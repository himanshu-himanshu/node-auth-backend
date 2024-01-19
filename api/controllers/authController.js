const { loginService, signupService } = require("../services/authService");

/**
 * -----------------------------------------------
 * Login Controller Function below
 * -----------------------------------------------
 */
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

/**
 * -----------------------------------------------
 * Signup Controller Function below
 * -----------------------------------------------
 */
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
