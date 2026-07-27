const express = require("express");

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();


// Create New Order

router.post("/", createOrder);


// Get All Orders

router.get("/", getAllOrders);


// Get Single Order

router.get("/:orderId", getOrderById);


// Update Order Status

router.put("/:orderId/status", updateOrderStatus);


module.exports = router;