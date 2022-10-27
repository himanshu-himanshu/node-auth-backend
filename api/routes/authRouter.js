const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.addUserFunc);
router.get("/login", authController.getUserFunc);

module.exports = router;
