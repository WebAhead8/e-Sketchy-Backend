const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

let connectionString = process.env.DATABASE_URL;

if (process.env.NODE_ENV === "production") {
  connectionString = process.env.DATABASE_URL;
}

const db = new pg.Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

module.exports = db;
