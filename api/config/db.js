const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_COMPASS_URL } = process.env;

/********--DATABASE CONNECTION--********/

exports.connect = () => {
  mongoose
    .connect(MONGODB_COMPASS_URL, {
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
