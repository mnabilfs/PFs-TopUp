const express = require("express");
const router = express.Router();
const { createPayment, checkPaymentStatus, updateTransactionStatus } = require("../controllers/paymentController");

router.post("/create", createPayment);
router.get("/payment/status/:orderId", checkPaymentStatus);  // Untuk cek status transaksi
router.put("/payment/status/:orderId", updateTransactionStatus);  // Untuk update status transaksi

module.exports = router;
