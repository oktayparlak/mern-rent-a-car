import express from 'express';

import { getUserById, postRegisterUser, postLoginUser, postResetPassword, putUserProfile, putBlockUser, deleteUser} from '../controllers/users.js';

const router = express.Router();

/** Get User By Id */
router.get('/:userId', getUserById);

/** Post Register */
router.post('/register', postRegisterUser);
/** Post Login */
router.post('/login', postLoginUser);
/** Post Reset Password */
router.post('/reset-password', postResetPassword);

/** Put User Profile */
router.put('/:userId', putUserProfile);
/** Put Block User */
router.put('/:userId/block', putBlockUser);

/** Delete User */
router.delete('/:userId', deleteUser);

export default router;