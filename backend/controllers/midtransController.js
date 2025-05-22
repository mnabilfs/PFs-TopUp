// controllers/midtransController.js
const midtransClient = require('midtrans-client');

const coreApi = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY
});

exports.createTransaction = async (req, res) => {
  try {
    const { userId, gameId, amount } = req.body;

    const parameter = {
      transaction_details: {
        order_id: 'ORDER-' + new Date().getTime(),
        gross_amount: amount,
      },
      credit_card: {
        secure: true
      },
      customer_details: {
        user_id: userId
      }
    };

    const transaction = await coreApi.charge(parameter);
    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Transaction failed' });
  }
};
