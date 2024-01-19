const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_LOCAL_URL } = process.env;

/**
 * -----------------------------------------------
 * Database connection logic
 * -----------------------------------------------
 */
exports.connect = () => {
  mongoose
    .connect(MONGODB_LOCAL_URL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
