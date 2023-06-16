import Vehicle from '../models/vehicle.js';

/** Get Vehicles */
export const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/** Get Vehicle By Id */
export const getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.vehicleId);
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/** Get Vehicle's Bookings */
export const getVehicleBookings = async (req, res) => {};

/** Post Vehicle */
export const postVehicle = (req, res) => {
    try {
        const { title, brand, model, year, description, price, image } = req.body;
        const vehicle = new Vehicle({ title, brand, model, year, description, price, image, createdBy: req.userId });
        vehicle.save().then((vehicle) => {
            res.status(201).json({ message: 'Vehicle created successfully', vehicle });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/** Put Vehicle */
export const putVehicle = async (req, res) => {};

/** Delete Vehicle */
export const deleteVehicle = async (req, res) => {};