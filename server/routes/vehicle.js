const express = require('express');

const router = express.Router();

const vehicleController = require('../controllers/vehicle');

/** Get Vehicles */
router.get('/api/vehicles', vehicleController.getVehicles);
/** Get Vehicle By Id */
router.get('/api/vehicles/:vehicleId', vehicleController.getVehicleById);
/** Get Vehicle Bookings */
router.get('/api/vehicles/:vehicleId/bookings', vehicleController.getVehicleBookings);

/** Post Vehicle */
router.post('/api/vehicles', vehicleController.postVehicle);

/** Put Vehicle */
router.put('/api/vehicles/:vehicleId', vehicleController.putVehicle);

/** Delete Vehicle */
router.delete('/api/vehicles/:vehicleId', vehicleController.deleteVehicle);

module.exports = router;
