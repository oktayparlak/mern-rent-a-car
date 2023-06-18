import express from 'express';

import { getVehicles, getVehicleById, getVehicleBookings, createVehicle, updateVehicle, deleteVehicle } from '../controllers/vehicles.js';

const router = express.Router();

/** Get Vehicles */
router.get('/api/vehicles', getVehicles);
/** Get Vehicle By Id */
router.get('/api/vehicles/:vehicleId', getVehicleById);
/** Get Vehicle's Bookings */
router.get('/api/vehicles/:vehicleId/bookings', getVehicleBookings);

/** Post Vehicle */
router.post('/api/vehicles', createVehicle);

/** Put Vehicle */
router.put('/api/vehicles/:vehicleId', updateVehicle);

/** Delete Vehicle */
router.delete('/api/vehicles/:vehicleId', deleteVehicle);

export default router;
