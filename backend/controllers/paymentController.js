// controller/paymentsController.js

const snap = require("../config/midtrans");
const db = require("../config/firebase");
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
