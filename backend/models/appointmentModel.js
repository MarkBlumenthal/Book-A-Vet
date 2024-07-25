// backend/models/appointmentModel.js
const pool = require('../config/db');

const createAppointment = async (appointment) => {
  const { petName, ownerEmail, checkupType, date, time } = appointment;
  const res = await pool.query(
    'INSERT INTO appointments (pet_name, owner_email, checkup_type, date, time) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [petName, ownerEmail, checkupType, date, time]
  );
  return res.rows[0];
};

const getAllAppointments = async () => {
  const res = await pool.query('SELECT * FROM appointments');
  return res.rows;
};

const updateAppointment = async (id, appointment) => {
  const { petName, checkupType, date, time } = appointment;
  const res = await pool.query(
    'UPDATE appointments SET pet_name = $1, checkup_type = $2, date = $3, time = $4 WHERE id = $5 RETURNING *',
    [petName, checkupType, date, time, id]
  );
  return res.rows[0];
};

const deleteAppointment = async (id) => {
  await pool.query('DELETE FROM appointments WHERE id = $1', [id]);
};

module.exports = {
  createAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
};




