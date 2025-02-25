// This file defines the routes related to user authentication, such as registering a new user and logging in an existing user.

const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logOutUser);

module.exports = router;
