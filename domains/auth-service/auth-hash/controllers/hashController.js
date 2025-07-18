const { hashPassword } = require('../utils/hash');
const userModel = require('../models/userModel');

exports.hashPasswordEndpoint = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
  const hash = await hashPassword(password);
  // Save user with hash password
  const user = await userModel.create({ email, password: hash });
  res.status(201).json({ id: user.id, email: user.email });
};
