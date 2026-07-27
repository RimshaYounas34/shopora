import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";
import productRequestRoutes from "./routes/productRequestRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

// ================= MIDDLEWARE =================

app.use(cors());
app.use(express.json());

// ================= MONGODB CONNECTION =================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

// ================= TEST ROUTE =================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Shopora Backend API is running successfully!",
  });
});

// ================= API ROUTES =================

app.use("/api/contact", contactRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);

app.use("/api/newsletter", newsletterRoutes);

app.use("/api/product-request", productRequestRoutes);

app.use("/api/orders", orderRoutes);

// ================= EXPORT APP =================

export default app;