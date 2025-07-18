const userModel = require('../models/userModel');
const { comparePassword } = require('../utils/hash');
const { generateToken } = require('../utils/jwt');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findByEmail(email);
  if (!user) return res.status(404).json({ message: 'User not found' });
  const valid = await comparePassword(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
  const token = generateToken({ id: user.id, email: user.email });
  res.json({ token });
};
