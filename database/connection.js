const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

let connectionString;
if (process.env.NODE_ENV === "production") {
  connectionString = process.env.DATABASE_URL;
} else {
  connectionString = process.env.DEV_DATABASE_URL;
}

const db = new pg.Pool({
  connectionString,
  ...(process.env.NODE_ENV === "production" && {
    ssl: { rejectUnauthorized: false },
  }),
});
module.exports = db;
