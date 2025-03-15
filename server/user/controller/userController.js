import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
export const signup = async (req, res) => {
  const { firstName, lastName, email, contactNumber, password } = req.body;
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { contactNumber }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User({ firstName, lastName, email, contactNumber, password, });
    await newUser.save();
    res.status(201).json({ message: 'User created Sucessfull', userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

export const signin = async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: identifier }, { contactNumber: identifier }]
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_KEY,
      { expiresIn: '30d' }
    );

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};



