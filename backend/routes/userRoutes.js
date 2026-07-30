const express = require("express");

const router = express.Router();

const User = require("../models/User");

const {
  googleLogin,
} = require("../controllers/userController");

// ================= GOOGLE LOGIN =================

router.post("/google", googleLogin);

// ================= GET ALL USERS =================

router.get("/", async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      users,
    });

  } catch (error) {
    console.error("Fetch Users Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
});

module.exports = router;