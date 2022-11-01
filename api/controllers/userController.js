const { getAllUsersService } = require("../services/userService");

exports.getAllUsersFunction = async (req, res) => {
  try {
    return await getAllUsersService(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
