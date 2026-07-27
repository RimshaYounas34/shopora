const express = require("express");
const ProductRequest = require("../models/ProductRequest");


const router = express.Router();


// Create Product Request

router.post("/", async (req, res) => {

  try {

    const request = await ProductRequest.create(req.body);


    res.status(201).json({
      success: true,
      message: "Product request sent successfully",
      data: request,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});


module.exports = router;