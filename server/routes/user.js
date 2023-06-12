const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

/** Get User By Id */
router.get('/api/users/:userId', userController.getUserById);

/** Post Register */
router.post('/api/users', userController.postRegisterUser);
/** Post Login */
router.post('/api/users/login', userController.postLoginUser);
/** Post Reset Password */
router.post('/api/users/reset-password', userController.postResetPassword);

/** Put User Profile */
router.put('/api/users/:userId', userController.putUserProfile);
/** Put Block User */
router.put('/api/users/:userId/block', userController.putBlockUser);

/** Delete User */
router.delete('/api/users/:userId', userController.deleteUser);

module.exports = router;