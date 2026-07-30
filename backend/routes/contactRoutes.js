const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");
const { createContact } = require("../controllers/contactController");

// ================= CREATE CONTACT =================

router.post("/", createContact);


// ================= GET ALL CONTACT MESSAGES =================

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      contacts,
    });

  } catch (error) {
    console.error("Fetch Contacts Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch contact messages",
    });
  }
});


module.exports = router;