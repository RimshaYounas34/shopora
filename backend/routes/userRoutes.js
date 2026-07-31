const express = require("express");
const User = require("../models/User");

const {
  googleLogin,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

// ================= GOOGLE LOGIN =================

router.post("/google", googleLogin);

// ================= GET ALL USERS =================

router.get("/", getUsers);

module.exports = router;