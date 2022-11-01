const User = require("../models/userModel");

// User Login
const getAllUsersService = async (req, res) => {
  try {
    User.find()
      .exec()
      .then((users) => {
        if (!users) {
          return res.status(404).json({
            success: false,
            status: 404,
            message: "No Users found",
          });
        }

        return res.status(200).json({
          success: true,
          status: 200,
          message: "Successfully fetched users",
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

module.exports = {
  getAllUsersService,
};
