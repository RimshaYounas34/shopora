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

app.use(
cors({
origin: [
"http://localhost:5173",
"https://shopora-seven-tau.vercel.app",
],
credentials: true,
})
);

app.use(express.json());

// ================= MONGODB CONNECTION =================

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
console.log("MongoDB Connected");
})
.catch((error) => {
console.error("MongoDB Connection Error:", error);
});

// ================= TEST ROUTE =================

app.get("/", (req, res) => {
res.status(200).send("Backend Running...");
});

// ================= API ROUTES =================

app.use("/api/contact", contactRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/newsletter", newsletterRoutes);

app.use("/api/product-request", productRequestRoutes);

app.use("/api/orders", orderRoutes);

// ================= 404 HANDLER =================

app.use((req, res) => {
res.status(404).json({
success: false,
message: `Route not found: ${req.method} ${req.originalUrl}`,
});
});

// ================= ERROR HANDLER =================

app.use((err, req, res, next) => {
console.error("Server Error:", err);

res.status(500).json({
success: false,
message: "Internal server error",
});
});

// ================= LOCAL SERVER =================

// Localhost par server normally chalega.
// Vercel par app export hoga.
if (process.env.NODE_ENV !== "production") {
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
}

// ================= VERCEL EXPORT =================

module.exports = app;
