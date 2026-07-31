const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const productRequestRoutes = require("./routes/productRequestRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// ================= MIDDLEWARE =================

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://shopora-seven-tau.vercel.app",
      "https://shopra-online-store.web.app",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ================= DATABASE =================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });

// ================= TEST =================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Shopora Backend API is running successfully!",
  });
});

// ================= API ROUTES =================

app.use("/api/contact", contactRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/newsletter", newsletterRoutes);

app.use("/api/product-request", productRequestRoutes);

app.use("/api/orders", orderRoutes);

// ================= API TEST =================

app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API routes are working!",
  });
});

// ================= 404 =================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// ================= ERROR =================

app.use((err, req, res, next) => {
  console.error("Server Error:", err);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// ================= EXPORT =================

module.exports = app;