// controller/paymentsController.js

const snap = require("../config/midtrans");
const db = require("../config/firebase");
const axios = require("axios");
const md5 = require("md5");
const { checkTransactionStatus } = require("../utils/midtransHelper");

// Fungsi untuk membuat pembayaran
exports.createPayment = async (req, res) => {
  try {
    const { userId, zoneId, waNumber, selectedTopup } = req.body;

    const orderId = `PFS-${Date.now()}`;
    const itemName = `${selectedTopup.value} Diamonds`;

    const grossAmount =
      selectedTopup.price + Math.floor(selectedTopup.price * 0.11);

    // Cek apakah orderId sudah ada di Firestore
    const transactionRef = await db
      .collection("transactions")
      .doc(orderId)
      .get();

    if (transactionRef.exists) {
      return res
        .status(400)
        .json({ message: "Transaksi sudah ada. Silakan coba lagi." });
    }

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount,
      },
      customer_details: {
        first_name: userId,
        last_name: zoneId,
        email: `${userId}@paperfires.store`,
        phone: waNumber || "081234567890",
      },
      item_details: [
        {
          id: selectedTopup.value.toString(),
          price: selectedTopup.price,
          quantity: 1,
          name: `${selectedTopup.value} Diamonds`,
        },
        {
          id: "tax",
          price: grossAmount - selectedTopup.price,
          quantity: 1,
          name: "Pajak 11%",
        },
      ],
    };

    const transaction = await snap.createTransaction(parameter);

    // Simpan data transaksi ke Firestore
    await db.collection("transactions").doc(orderId).set({
      orderId,
      userId,
      zoneId,
      waNumber,
      selectedTopup,
      item_name: itemName,
      transactionToken: transaction.token,
      transactionUrl: transaction.redirect_url,
      status: "pending", // Status awal adalah pending
      createdAt: new Date(),
    });

    console.log("🧾 Simpan transaksi:", {
      orderId,
      item_name: itemName,
    });

    res.status(200).json({
      token: transaction.token,
      redirect_url: transaction.redirect_url,
      order_id: orderId,
    });
  } catch (error) {
    console.error("Midtrans/Firestore Error:", error);
    res.status(500).json({ message: "Failed to create transaction", error });
  }
};



// Fungsi untuk memeriksa status transaksi berdasarkan orderId
exports.checkPaymentStatus = async (req, res) => {
  const { orderId } = req.params; // Ambil orderId dari params
  
  try {
    // Cek status transaksi melalui API Midtrans
    const transactionStatus = await checkTransactionStatus(orderId);

    // Jika status transaksi sudah sukses atau gagal, perbarui status di Firestore
    const transactionRef = db.collection("transactions").doc(orderId);
    await transactionRef.update({
      status: transactionStatus.transaction_status,
      updatedAt: new Date(),
    });

    // Ambil data lokal dari Firestore
    const localDoc = await transactionRef.get();
    const localData = localDoc.exists ? localDoc.data() : {};
    const fallbackItem = localData?.selectedTopup?.value
      ? `${localData.selectedTopup.value} Diamonds`
      : "-";

    const responseData = {
      ...transactionStatus,
      item_name: localData.item_name || fallbackItem,
    };

    if (!localData.item_name) {
      console.warn(`⚠️ item_name missing in Firestore for orderId: ${orderId}`);
    }
    console.log("✅ Final Response Sent to Frontend:", responseData);

    // Kirimkan respons ke frontend
    res.status(200).json({
      message: "Transaction status fetched successfully",
      status: transactionStatus.transaction_status,
      data: responseData,
    });
  } catch (error) {
    console.error("Error fetching transaction status:", error);
    res.status(500).json({
      message: "Failed to fetch transaction status",
      error: error.message,
    });
  }
};

// Cek status transaksi berdasarkan orderId dan update status di Firestore
exports.updateTransactionStatus = async (req, res) => {
  const { orderId } = req.params;

  try {
    const transactionStatus = await checkTransactionStatus(orderId);

    // Hanya update status jika transaksi sudah selesai (settlement)
    if (transactionStatus.transaction_status === "settlement") {
      const transactionRef = db.collection("transactions").doc(orderId);
      await transactionRef.update({
        status: transactionStatus.transaction_status,
        updatedAt: new Date(),
      });

      res.status(200).json({
        message: "Transaction status updated successfully",
        status: transactionStatus.transaction_status,
        data: transactionStatus,
      });
    } else {
      res.status(200).json({
        message: "Transaction status is not settled yet",
        status: transactionStatus.transaction_status,
      });
    }
  } catch (error) {
    console.error("Error updating transaction status:", error);
    res.status(500).json({
      message: "Failed to update transaction status",
      error: error.message,
    });
  }
};

// Fungsi untuk Melakukan Top Up Transaksi Pada IAK (Only for Mobile-Legend)
exports.topupToIAK = async (req, res) => {
  const { orderId, userId, zoneId, product_code } = req.body;

  const username = process.env.IAK_USERNAME;
  const api_key = process.env.IAK_API_KEY; 
  const ref_id = orderId;
  const customer_id = `${userId}|${zoneId}`;
  const sign = md5(username + api_key + ref_id);

  const payload = {
    username,
    customer_id,
    ref_id,
    product_code,
    sign,
  };

  try {
    // 1. Kirim top-up ke IAK
    const topupResponse = await axios.post(
      "https://prepaid.iak.dev/api/top-up",
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    const topupResult = topupResponse.data;

    // 2. Cek ulang status topup di IAK
    const checkPayload = {
      username,
      ref_id,
      sign,
    };

    const checkResponse = await axios.post(
      "https://prepaid.iak.dev/api/check-status",
      checkPayload,
      { headers: { "Content-Type": "application/json" } }
    );

    const checkResult = checkResponse.data;

    const finalStatus = checkResult?.data?.status;

    if (finalStatus === 1) {
      // Simpan ke Firestore jika perlu
      await db.collection("transactions").doc(orderId).update({
        topupStatus: "success",
        topupAt: new Date(),
      });

      return res.status(200).json({
        message: "Top-up berhasil",
        data: checkResult.data,
      });
    }else if(finalStatus === 0) {
      await db.collection("transactions").doc(orderId).update({
        topupStatus: "processing",
        topupAt: new Date(),
      });
    
      return res.status(202).json({
        message: "Top-up masih dalam proses",
        data: checkResult.data,
      });
    } else {
      // Mark as failed
      await db.collection("transactions").doc(orderId).update({
        topupStatus: "failed",
        topupAt: new Date(),
        topupError: checkResult?.data?.message,
      });

      return res.status(400).json({
        message: "Top-up gagal",
        data: checkResult.data,
      });
    }
  } catch (error) {
    console.error("❌ Error top-up:", error.response?.data || error.message);

    return res.status(500).json({
      message: "Terjadi kesalahan saat top-up",
      error: error.response?.data || error.message,
    });
  }
};

// Fungsi Callback Untuk Status
exports.iakCallbackHandler = async (req, res) => {
  try {
    const data = req.body.data;

    const { ref_id, status, message, sn, sign } = data;
    const expectedSign = md5(process.env.IAK_USERNAME + process.env.IAK_API_KEY + ref_id);

    // Verifikasi sign
    if (sign !== expectedSign) {
      return res.status(403).json({ message: "Invalid signature" });
    }

    // Update transaksi di Firestore berdasarkan ref_id
    const transactionRef = db.collection("transactions").doc(ref_id);

    await transactionRef.update({
      status: status === "1" ? "success" : status === "2" ? "failed" : "processing",
      message,
      sn: sn || null,
      updatedAt: new Date(),
    });

    return res.status(200).json({ message: "Callback received and processed" });
  } catch (error) {
    console.error("Callback Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Check Status Tanpa Menggunakan Callback
exports.checkTopupStatus = async (req, res) => {
  const { orderId } = req.params;

  try {
    const doc = await db.collection("transactions").doc(orderId).get();

    if (!doc.exists) {
      return res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }

    const data = doc.data();

    return res.status(200).json({
      message: "Status transaksi ditemukan",
      status: data.topupStatus || "unknown",
      data,
    });
  } catch (error) {
    console.error("Error checkTopupStatus:", error);
    return res.status(500).json({
      message: "Gagal mengambil status transaksi",
      error: error.message,
    });
  }
};
