const { Pool, types } = require('pg');

const TYPE_DATESTAMP = 1082;
types.setTypeParser(TYPE_DATESTAMP, date => date);

const dbUser = process.env.POSTGRES_USER || 'root';
const dbPassword = process.env.POSTGRES_PASSWORD || 'toor';

const dbName = process.env.POSTGRES_DB || 'challenge';
const dbHost = process.env.POSTGRES_DB || 'localhost';
const dbPort = process.env.POSTGRES_PORT || 5432;

const pool = new Pool({
  user: dbUser,
  host: dbHost,
  database: dbName,
  password: dbPassword,
  port: dbPort,
})

module.exports = pool
