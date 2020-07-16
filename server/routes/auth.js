const express = require("express");
const router = express.Router();

const authController = require('../controllers/auth');

// Create a new user
router.post("/signup", authController.sign_up);

// login
router.post("/login", authController.login_in);

module.exports = router;