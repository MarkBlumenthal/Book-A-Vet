// backend/routes/appointmentRoutes.js
const express = require('express');
const appointmentModel = require('../models/appointmentModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const appointment = await appointmentModel.createAppointment(req.body);
  res.send(appointment);
});

router.get('/', async (req, res) => {
  const appointments = await appointmentModel.getAllAppointments();
  res.send(appointments);
});

router.put('/:id', async (req, res) => {
  const updatedAppointment = await appointmentModel.updateAppointment(req.params.id, req.body);
  res.send(updatedAppointment);
});

router.delete('/:id', async (req, res) => {
  await appointmentModel.deleteAppointment(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
