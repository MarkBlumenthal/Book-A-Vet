// backend/config/db.js
const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;

