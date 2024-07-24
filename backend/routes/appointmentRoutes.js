// backend/routes/appointmentRoutes.js
const express = require('express');
const appointmentModel = require('../models/appointmentModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const userId = 1;  // Assuming a fixed user ID for now, replace with actual user ID logic.
  const appointment = { ...req.body, userId };
  console.log("Received appointment data:", appointment);
  try {
    const newAppointment = await appointmentModel.createAppointment(appointment);
    res.status(201).send(newAppointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(400).send({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  const appointments = await appointmentModel.getAllAppointments();
  res.send(appointments);
});

router.put('/:id', async (req, res) => {
  try {
    const updatedAppointment = await appointmentModel.updateAppointment(req.params.id, req.body);
    res.send(updatedAppointment);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await appointmentModel.deleteAppointment(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;


