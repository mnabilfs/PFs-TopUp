const express = require('express');
const router = express.Router();
const midtransController = require('../controllers/midtransController');
const verifyFirebaseToken = require('../middleware/verifyFirebaseToken');

router.post('/create-transaction', verifyFirebaseToken, midtransController.createTransaction);

module.exports = router;
