const express = require("express");

const ProductRequest = require("../models/ProductRequest");

const router = express.Router();


// ================= CREATE PRODUCT REQUEST =================

router.post("/", async (req, res) => {
  try {

    const request = await ProductRequest.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product request sent successfully",
      data: request,
    });

  } catch (error) {

    console.error("Create Product Request Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// ================= GET ALL PRODUCT REQUESTS =================

router.get("/", async (req, res) => {
  try {

    const requests = await ProductRequest.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      requests,
    });

  } catch (error) {

    console.error(
      "Fetch Product Requests Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch product requests",
    });
  }
});


module.exports = router;