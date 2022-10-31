const mongoose = require("mongoose");
const User = require("../models/userModel");
const Bcrypt = require("bcryptjs");
const registerValidator = require("../validators/registerValidator");
const loginValidator = require("../validators/loginValidator");

// User Login
const loginService = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { errors, isValid } = loginValidator(req.body);
    if (!isValid) {
      return res.json({
        status: 404,
        success: false,
        message: errors,
      });
    }
    User.findOne({ email: email })
      .exec()
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            success: false,
            status: 404,
            message: "User not registered",
          });
        }

        if (!Bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({
            success: false,
            status: 401,
            message: "Wrong Password",
          });
        }

        return res.status(200).json({
          success: true,
          status: 200,
          message: "User exist",
          data: user,
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

// User Registration
const signupService = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { errors, isValid } = registerValidator(req.body);
    if (!isValid) {
      return res.json({
        status: 404,
        success: false,
        message: errors,
      });
    }
    await User.find({
      email: email,
    }).then((u) => {
      if (u.length > 0) {
        return res.json({
          status: 409,
          success: false,
          message: "Email already in use",
        });
      }
    });
    let user = {
      _id: new mongoose.Types.ObjectId(),
      username: username,
      email: email,
      password: Bcrypt.hashSync(password, 10),
    };
    new User(user)
      .save()
      .then((result) => {
        res.status(200).json({
          success: true,
          message: "Registration succesfull",
          data: result,
        });
      })
      .catch((err) => {
        console.log("93", err);
        res.json({
          status: 500,
          success: false,
          message: err.message,
        });
      });
  } catch (err) {
    console.log("101", err);
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

module.exports = {
  loginService,
  signupService,
};
