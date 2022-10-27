const {
  getUserService,
  addUserService,
} = require("../services/getUserService");

exports.getUserFunc = async (req, res) => {
  try {
    return await getUserService(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.addUserFunc = async (req, res) => {
  try {
    return await addUserService(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
