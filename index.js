const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRouter = require("./api/routes/authRouter");

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * MongoDB database connection below
 */
mongoose.connect(process.env.MONGODB_COMPASS_URL, { useNewUrlParser: true });

var conn = mongoose.connection;

conn.on("connected", function () {
  console.log("Database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("Database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "Connection error:"));

/**
 * Router
 */

app.use("/auth", authRouter);

app.listen(8000, () => {
  console.log("Server is listening at 8000");
});
