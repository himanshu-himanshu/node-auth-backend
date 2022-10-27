const mongoose = require("mongoose");
const User = require("../models/userModel");
const Bcrypt = require("bcryptjs");

// get user
const getUserService = async (req, res) => {
  try {
    User.find()
      .exec()
      .then((users) => {
        if (users.length == 0) {
          return res.status(404).json({
            success: false,
            status: 404,
            message: "User not found",
          });
        }
        return res.status(200).json({
          success: true,
          status: 200,
          message: "Users founded",
          data: users,
        });
      });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

// add user
const addUserService = async (req, res) => {
  try {
    let user = {
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      email: req.body.email,
      password: Bcrypt.hashSync(req.body.password, 10),
    };
    new User(user)
      .save()
      .then((result) => {
        res.status(200).json({
          success: true,
          message: "User added",
          data: result,
        });
      })
      .catch((err) => {
        console.log("ERROR 73", err);
        res.json({
          status: 500,
          success: false,
          message: err.message,
        });
      });
  } catch (err) {
    console.log("ERROR 81", err);
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

module.exports = {
  getUserService,
  addUserService,
};
