const express = require("express");
const router = express.Router();
const { createPayment, checkPaymentStatus, updateTransactionStatus, refundTransaction } = require("../controllers/paymentController");

router.post("/create", createPayment);
router.get("/status/:orderId", checkPaymentStatus);
router.put("/status/:orderId", updateTransactionStatus);
router.get("/payment/refund/:orderId", refundTransaction);

module.exports = router;
