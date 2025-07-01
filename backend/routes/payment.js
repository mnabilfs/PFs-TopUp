const express = require("express");
const router = express.Router();
const { createPayment, checkPaymentStatus, updateTransactionStatus, topupToIAK, iakCallbackHandler, checkTopupStatus} = require("../controllers/paymentController");

router.post("/create", createPayment);
router.get("/status/:orderId", checkPaymentStatus);
router.put("/status/:orderId", updateTransactionStatus);
router.post("/callback", iakCallbackHandler);
router.post("/topup", topupToIAK);
router.get("/check-status/:orderId", checkTopupStatus)

module.exports = router;
