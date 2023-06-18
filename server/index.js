import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';
// import vehicleRoutes from './routes/vehicles.js';
// import bookingRoutes from './routes/bookings.js';
// import paymentRoutes from './routes/payments.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

/** Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}));

/** Routes */
app.get('/', (req, res) => {
  res.send('Welcome to the Car Rental API.');
});
app.use('/api/user', userRoutes);
// app.use('/api/vehicle', vehicleRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/payments', paymentRoutes);

/** Mongoose Setup */
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB.');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.log('Error: ', error);
  });
