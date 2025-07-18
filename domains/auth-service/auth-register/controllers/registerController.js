const userModel = require('../models/userModel');
const { hashPassword } = require('../utils/hash');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
  const existing = await userModel.findByEmail(email);
  if (existing) return res.status(409).json({ message: 'User already exists' });
  const hash = await hashPassword(password);
  const user = await userModel.create({ email, password: hash });
  res.status(201).json({ id: user.id, email: user.email });
};
