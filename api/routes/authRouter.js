const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

/********--AUTH ROUTES--********/

// Route for registration
router.post("/signup", authController.signupFunction);

// Route for login
router.post("/login", authController.loginFunction);

module.exports = router;
