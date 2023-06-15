const express = require('express');

const userRoutes = require('./routes/user');
const vehicleRoutes = require('./routes/vehicle');
const bookingRoutes = require('./routes/booking');
const paymentRoutes = require('./routes/payment.js');

const app = express();
const PORT = process.env.PORT || 5000;

/** Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Routes */
app.use('/api/user', userRoutes);
app.use('/api/vehicle', vehicleRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
