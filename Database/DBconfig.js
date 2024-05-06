// const mongoose = require("mongoose");
require('dotenv').config();

const pg = require("pg");

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "E-learning",
  password: "hari13569",
  port: 5432,
});



module.exports = {
  db
}
