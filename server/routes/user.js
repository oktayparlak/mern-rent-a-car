const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

/** Get User By Id */
router.get('/:userId', userController.getUserById);

/** Post Register */
router.post('/register', userController.postRegisterUser);
/** Post Login */
router.post('/login', userController.postLoginUser);
/** Post Reset Password */
router.post('/reset-password', userController.postResetPassword);

/** Put User Profile */
router.put('/:userId', userController.putUserProfile);
/** Put Block User */
router.put('/:userId/block', userController.putBlockUser);

/** Delete User */
router.delete('/:userId', userController.deleteUser);

module.exports = router;