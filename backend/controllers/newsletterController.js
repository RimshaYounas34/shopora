const Newsletter = require("../models/Newsletter");


const subscribeNewsletter = async (req, res) => {

  try {

    const { email } = req.body;


    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }


    const exists = await Newsletter.findOne({
      email,
    });


    if (exists) {
      return res.status(400).json({
        message: "Email already subscribed",
      });
    }


    await Newsletter.create({
      email,
    });


    res.status(201).json({
      message: "Subscribed successfully",
    });


  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  subscribeNewsletter,
};