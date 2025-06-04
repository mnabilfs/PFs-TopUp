const axios = require('axios');

// Fungsi untuk memeriksa status transaksi
const checkTransactionStatus = async (orderId) => {
  const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY; // Ganti dengan server key asli
  const url = `https://api.sandbox.midtrans.com/v2/${orderId}/status`; // URL Midtrans status endpoint

  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Basic ${Buffer.from(MIDTRANS_SERVER_KEY + ":").toString('base64')}`,
      },
    });

    // Log untuk memeriksa status transaksi yang diterima dari Midtrans
    console.log(`Midtrans response for order ${orderId}:`, response.data);

    // Mengembalikan data status transaksi dari Midtrans
    return response.data;
  } catch (error) {
    console.error("Error checking transaction status:", error);
    throw new Error("Failed to fetch transaction status");
  }
};

module.exports = { checkTransactionStatus };
