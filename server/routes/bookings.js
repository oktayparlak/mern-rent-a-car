import express from 'express';

import { getUserBookingByUserId, getBookingById, postBooking, putBooking, deleteBooking } from '../controllers/bookings.js';

const router = express.Router();

/** Get User's Booking By User Id */
router.get('/user/:userId', getUserBookingByUserId);
/**Get Bookings By Id  */
router.get('/:bookingId', getBookingById);

/** Post Booking */
router.post('/', postBooking);

/** Put Booking */
router.put('/:bookingId', putBooking);

/** Delete Booking */
router.delete('/:bookingId', deleteBooking);

export default router;