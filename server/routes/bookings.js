import express from 'express';

import { getUserBookingByUserId, getBookingById, postBooking, deleteBooking } from '../controllers/bookings.js';

const router = express.Router();

/** Get User's Booking By User Id */
router.get('/user/:userId', getUserBookingByUserId);
/**Get Bookings By Id  */
router.get('/:bookingId', getBookingById);

/** Post Booking */
router.post('/', postBooking);

/** Delete Booking */
router.delete('/:bookingId', deleteBooking);

export default router;