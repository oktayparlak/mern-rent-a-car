import express from 'express';

import { verifyToken } from '../middlewares/auth.js';
import { getUserById, registerUser, loginUser, resetPassword, updateUserProfile, deleteUser } from '../controllers/users.js';

const router = express.Router();

/** Get User By Id */
router.get('/:userId',verifyToken, getUserById);

/** Post Register */
router.post('/register', registerUser);
/** Post Login */
router.post('/login', loginUser);
/** Post Reset Password */
//router.post('/reset-password', resetPassword);

/** Put User Profile */
router.put('/:userId', updateUserProfile);

/** Delete User */
//router.delete('/:userId', deleteUser);

export default router;
