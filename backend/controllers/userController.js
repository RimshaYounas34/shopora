
const mongoose = require("mongoose");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// =====================================================
// GOOGLE LOGIN
// =====================================================

const googleLogin = async (req, res) => {
  try {
    console.log("=================================");
    console.log("GOOGLE LOGIN REQUEST");
    console.log("Body:", req.body);
    console.log("=================================");

    const { name, email, image } = req.body;

    // -------------------------------------------------
    // Check required fields
    // -------------------------------------------------

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    // -------------------------------------------------
    // Check JWT Secret
    // -------------------------------------------------

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing!");

      return res.status(500).json({
        success: false,
        message: "JWT_SECRET is not configured on backend",
      });
    }

    // -------------------------------------------------
    // Check MongoDB connection
    // -------------------------------------------------

    if (mongoose.connection.readyState !== 1) {
      console.error(
        "MongoDB is not connected. ReadyState:",
        mongoose.connection.readyState
      );

      return res.status(500).json({
        success: false,
        message: "Database is not connected",
      });
    }

    // -------------------------------------------------
    // Normalize email
    // -------------------------------------------------

    const normalizedEmail = email.trim().toLowerCase();

    // -------------------------------------------------
    // Find existing user
    // -------------------------------------------------

    let user = await User.findOne({
      email: normalizedEmail,
    });

    // =================================================
    // CREATE NEW GOOGLE USER
    // =================================================

    if (!user) {
      console.log(
        "Google user does not exist. Creating user..."
      );

      user = await User.create({
        name: name.trim(),
        email: normalizedEmail,
        password: "",
        phone: "",
        address: "",
        image: image || "",
        provider: "google",
        role: "user",
      });

      console.log(
        "Google user created:",
        user._id.toString()
      );
    }

    // =================================================
    // EXISTING USER
    // =================================================

    else {
      console.log(
        "Existing user found:",
        user._id.toString()
      );

      // Update name
      user.name = name.trim();

      // Update image if Google provides one
      if (image) {
        user.image = image;
      }

      // Make sure provider is Google
      user.provider = "google";

      await user.save();

      console.log("Google user updated successfully");
    }

    // =================================================
    // CREATE JWT
    // =================================================

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    console.log("JWT generated successfully");

    // =================================================
    // RESPONSE
    // =================================================

    return res.status(200).json({
      success: true,
      message: "Google login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        image: user.image,
      },
    });

  } catch (error) {
    // =================================================
    // ERROR
    // =================================================

    console.error("=================================");
    console.error("GOOGLE LOGIN ERROR");
    console.error("=================================");

    console.error("Message:", error.message);
    console.error("Name:", error.name);
    console.error("Stack:", error.stack);

    return res.status(500).json({
      success: false,
      message: "Server error during Google login",
      error: error.message,
    });
  }
};


// =====================================================
// GET ALL USERS
// =====================================================

const getUsers = async (req, res) => {
  try {
    console.log("Fetching users...");

    // Check MongoDB connection
    if (mongoose.connection.readyState !== 1) {
      console.error(
        "MongoDB is not connected. ReadyState:",
        mongoose.connection.readyState
      );

      return res.status(500).json({
        success: false,
        message: "Database is not connected",
      });
    }

    const users = await User.find({
      role: "user",
    })
      .select("-password")
      .sort({
        createdAt: -1,
      });

    console.log(
      "Users fetched:",
      users.length
    );

    return res.status(200).json({
      success: true,
      users,
    });

  } catch (error) {
    console.error("=================================");
    console.error("GET USERS ERROR");
    console.error("=================================");

    console.error("Message:", error.message);
    console.error("Stack:", error.stack);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch users.",
      error: error.message,
    });
  }
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {
  googleLogin,
  getUsers,
};
