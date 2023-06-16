import mongoose from 'mongoose';

const vehicleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            min: 6,
            max: 40,
        },
        brand: {
            type: String,
            required: true,
            min: 3,
            max: 80,
        },
        model: {
            type: String,
            required: true,
            min: 3,
            max: 80,
        },
        year: {
            type: Number,
            required: true,
        },
        description : {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true }
);

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;