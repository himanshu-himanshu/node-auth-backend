const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signupFunction);
router.post("/login", authController.loginFunction);

module.exports = router;
