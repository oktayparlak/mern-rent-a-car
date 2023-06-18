import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            reqired: true,
            min: 6,
        },
        resetToken: {
            type: String,
        },
        vehicles: [
            {
                vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
                default: [],
            },
        ],
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;