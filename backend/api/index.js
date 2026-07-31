const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoutes = require("../routes/contactRoutes");
const authRoutes = require("../routes/authRoutes");
const userRoutes = require("../routes/userRoutes");
const newsletterRoutes = require("../routes/newsletterRoutes");
const productRequestRoutes = require("../routes/productRequestRoutes");
const orderRoutes = require("../routes/orderRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "https://shopora-seven-tau.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Shopora Backend API is running successfully!",
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/product-request", productRequestRoutes);
app.use("/api/orders", orderRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }
};

module.exports = async (req, res) => {
  await connectDB();
  return app(req, res);
};