const Order = require("../models/Order");

// ================= CREATE ORDER =================

const createOrder = async (req, res) => {
  try {
    const {
      customer,
      products,
      paymentMethod,
      subtotal,
      shipping,
      discount,
      total,
    } = req.body;

    // Check required data

    if (
      !customer ||
      !customer.firstName ||
      !customer.lastName ||
      !customer.address ||
      !customer.city ||
      !customer.phone ||
      !customer.email
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required billing details.",
      });
    }

    if (!products || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Your cart is empty.",
      });
    }

    // Generate Order ID

    const orderId =
      "ORD-" +
      Date.now() +
      "-" +
      Math.floor(Math.random() * 1000);

    // Create Order

    const order = await Order.create({
      orderId,

      customer,

      products,

      paymentMethod: paymentMethod || "cod",

      subtotal: Number(subtotal) || 0,

      shipping: Number(shipping) || 0,

      discount: Number(discount) || 0,

      total: Number(total) || 0,

      status: "Pending",
    });

    // Response

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order,
    });
  } catch (error) {
    console.error("Create Order Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while placing your order.",
    });
  }
};


// ================= GET ALL ORDERS =================

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error("Get Orders Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch orders.",
    });
  }
};


// ================= GET SINGLE ORDER =================

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({
      orderId: req.params.orderId,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Get Order Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch order.",
    });
  }
};


// ================= UPDATE ORDER STATUS =================

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "Pending",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status.",
      });
    }

    const order = await Order.findOneAndUpdate(
      {
        orderId: req.params.orderId,
      },
      {
        status,
      },
      {
        new: true,
      }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order status updated successfully.",
      order,
    });
  } catch (error) {
    console.error("Update Order Status Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update order status.",
    });
  }
};


module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
};