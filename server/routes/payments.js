import express from 'express';

import { getPaymentById, postPayment } from '../controllers/payments.js';

const router = express.Router();

/** Get Payment By Id */
router.get('/:paymentId', getPaymentById);

/** Post Payment */
router.post('/', postPayment);

export default router;