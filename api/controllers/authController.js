const { loginService, signupService } = require("../services/getUserService");

exports.loginFunction = async (req, res) => {
  try {
    return await loginService(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.signupFunction = async (req, res) => {
  try {
    return await signupService(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
