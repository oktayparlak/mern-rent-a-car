import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        vehicleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vehicle',
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        totalPrices: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;