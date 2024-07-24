// backend/models/appointmentModel.js
const pool = require('../config/db');

const createAppointment = async (appointment) => {
  const { userId, petName, checkupType, date, time } = appointment;
  const res = await pool.query(
    'INSERT INTO appointments (user_id, pet_name, checkup_type, date, time) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [userId, petName, checkupType, date, time]
  );
  return res.rows[0];
};

module.exports = {
  createAppointment,
};

