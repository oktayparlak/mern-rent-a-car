import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

/** Get User By Id */
export const getUserById = (req, res) => {};

/** Register User */
export const postRegisterUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  bcrypt.hash(password, 12).then((hashedPassword) => {
    const newUser = new User({ firstName, lastName, email, password: hashedPassword });
    newUser
      .save()
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });
};

/** Login User */
export const postLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
    delete user.password;
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/** Reset Password */
export const postResetPassword = async (req, res) => {};

/** Update User Profile */
export const putUserProfile = (req, res) => {};

/** Block User */
export const putBlockUser = (req, res) => {};

/** Delete User */
export const deleteUser = (req, res) => {};
