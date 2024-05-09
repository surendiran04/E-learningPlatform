const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const { db } = require('./Database/DBconfig')
const {AuthRouter,courseRouter} =  require('./Router/routes')
const dotenv = require('dotenv');
let PORT = process.env.PORT;

const app = express();
dotenv.config();
app.use(cors());
app.use(body_parser.json());
app.use("/api/auth", AuthRouter); // app.use(AuthRouter) 
app.use(courseRouter)


db.connect();

app.listen(PORT, () => {
    console.log(`Server connected successfully at ${PORT}`);
})