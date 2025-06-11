const express = require("express");
const router = express.Router();
const { createPayment, checkPaymentStatus, updateTransactionStatus } = require("../controllers/paymentController");

router.post("/create", createPayment);
router.get("/status/:orderId", checkPaymentStatus);
router.put("/status/:orderId", updateTransactionStatus);

module.exports = router;
