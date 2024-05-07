require('dotenv').config();

const pg = require("pg");

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const db = new pg.Client({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true
  }
});


module.exports = {
  db
}
