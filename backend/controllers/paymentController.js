const snap = require("../config/midtrans");
const db = require("../config/firebase");

exports.createPayment = async (req, res) => {
  try {
    const { userId, zoneId, waNumber, selectedTopup } = req.body;

    const orderId = `PFS-${Date.now()}`;

    const grossAmount = selectedTopup.price + Math.floor(selectedTopup.price * 0.12);

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
          name: "Pajak 12%",
        },
      ],
    };

    const transaction = await snap.createTransaction(parameter);

    // Simpan data ke Firestore
    await db.collection("transactions").doc(orderId).set({
      orderId,
      userId,
      zoneId,
      waNumber,
      selectedTopup,
      transactionToken: transaction.token,
      transactionUrl: transaction.redirect_url,
      status: "pending",
      createdAt: new Date(),
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
