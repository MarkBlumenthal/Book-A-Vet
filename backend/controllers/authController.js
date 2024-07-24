// backend/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminModel = require('../models/adminModel');
const config = require('../config');

const login = async (req, res) => {
  const { username, password } = req.body;
  const admin = await adminModel.getAdminByUsername(username);
  if (!admin || !await bcrypt.compare(password, admin.password)) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ id: admin.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
  res.send({ token });
};

module.exports = {
  login,
};

