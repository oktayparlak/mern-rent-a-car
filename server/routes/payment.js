const express = require('express');

const router = express.Router();

const paymentController = require('../controllers/payment.js');

/** Get Payment By Id */
router.get('/:paymentId', paymentController.getPaymentById);

/** Post Payment */
router.post('/', paymentController.postPayment);

module.exports = router;