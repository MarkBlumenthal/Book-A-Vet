// backend/app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const pool = require('./config/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.locals.pool = pool;

app.use('/auth', authRoutes);
app.use('/appointments', appointmentRoutes);

module.exports = app;


