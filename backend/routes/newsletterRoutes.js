const express = require("express");

const Newsletter = require("../models/Newsletter");

const {
  subscribeNewsletter,
} = require("../controllers/newsletterController");

const router = express.Router();


// ================= SUBSCRIBE NEWSLETTER =================

router.post("/", subscribeNewsletter);


// ================= GET ALL SUBSCRIBERS =================

router.get("/", async (req, res) => {
  try {
    const newsletters = await Newsletter.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      newsletters,
    });

  } catch (error) {
    console.error("Fetch Newsletter Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch newsletter subscribers",
    });
  }
});


module.exports = router;