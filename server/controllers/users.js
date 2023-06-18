import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

/** Get User By Id */
export const getUserById = (req, res) => {
  const  { userId }  = req.params;
  User.findById(userId)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

/** Register User */
export const registerUser = (req, res) => {
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
export const loginUser = async (req, res) => {
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
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/** Reset Password */
export const resetPassword = async (req, res) => {};

/** Update User Profile */
export const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    User.findByIdAndUpdate(id, { firstName, lastName, email, password: hashedPassword }).then((user) => {
      res.status(200).json(user);
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};


/** Delete User */
export const deleteUser = (req, res) => {};
