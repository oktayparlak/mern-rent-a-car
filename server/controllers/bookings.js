import Booking from '../models/booking.js';

/** Get User's Booking By User Id */
export const getUserBookingByUserId = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    if (booking) {
      res.status(200).json(bookings);
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**Get Bookings By Id  */
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/** Post Booking */
export const postBooking = async (req, res) => {
  try {
    const { userId, vehicleId, startDate, endDate, totalPrices } = req.body;
    const booking = await Booking.findOne({ vehicleId });
    if (!booking) {
      const newBooking = new Booking({ userId, vehicleId, startDate, endDate, totalPrices });
      newBooking.save().then((booking) => {
        res.status(201).json({ message: 'Booking created successfully', booking });
      });
    } else {
      if (startDate <= booking.endDate || endDate >= booking.startDate) {
        res.status(400).json({ message: 'Vehicle is not available' });
      } else {
        const newBooking = new Booking({ userId, vehicleId, startDate, endDate, totalPrices });
        newBooking.save().then((booking) => {
          res.status(201).json({ message: 'Booking created successfully', booking });
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/** Delete Booking */
export const deleteBooking = (req, res) => {
  try {
    Booking.findByIdAndDelete(req.params.bookingId).then((booking) => {
      res.status(200).json({ message: 'Booking deleted successfully', booking });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
