const User = require("../models/User");
const jwt = require("jsonwebtoken");

// ================= GOOGLE LOGIN =================

const googleLogin = async (req, res) => {
  try {
    const { name, email, image } = req.body;

    // Required fields check
    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required",
      });
    }

    const normalizedEmail = email.toLowerCase();

    // Check user already exists
    let user = await User.findOne({
      email: normalizedEmail,
    });

    // If user doesn't exist, create new user
    if (!user) {
      user = await User.create({
        name,
        email: normalizedEmail,
        password: "",
        image: image || "",
        provider: "google",
        role: "user",
      });
    } else {
      // Update Google image/name if available
      user.name = name;

      if (image) {
        user.image = image;
      }

      // If existing account was created with Google
      if (!user.provider) {
        user.provider = "google";
      }

      await user.save();
    }

    // Generate JWT
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

    // Send response
    res.status(200).json({
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
    console.error("Google Login Error:", error);

    res.status(500).json({
      message: "Server error during Google login",
    });
  }
};


// ================= GET ALL USERS =================

const getUsers = async (req, res) => {
  try {
    // Only normal registered users
    // Admin account will not be counted
    const users = await User.find({
      role: "user",
    })
      .select("-password")
      .sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      users,
    });

  } catch (error) {
    console.error("Get Users Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch users.",
    });
  }
};


// ================= EXPORT =================

module.exports = {
  googleLogin,
  getUsers,
};