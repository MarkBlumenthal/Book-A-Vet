// backend/models/userModel.js
const pool = require('../config/db');

const getUserByEmail = async (email) => {
  const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return res.rows[0];
};

module.exports = {
  getUserByEmail,
};

