const express = require('express');

const router = express.Router();

const bookingController = require('../controllers/booking');

/** Get User's Booking By User Id */
router.get('/user/:userId', bookingController.getUserBookingByUserId);
/**Get Bookings By Id  */
router.get('/:bookingId', bookingController.getBookingById);

/** Post Booking */
router.post('/', bookingController.postBooking);

/** Put Booking */
router.put('/:bookingId', bookingController.putBooking);

/** Delete Booking */
router.delete('/:bookingId', bookingController.deleteBooking);

module.exports = router;