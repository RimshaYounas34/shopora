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

app.use(cors());
app.use(express.json());


// ================= MONGODB CONNECTION =================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// ================= TEST ROUTE =================

app.get("/", (req, res) => {
  res.send("Backend Running...");
});


// ================= API ROUTES =================

app.use("/api/contact", contactRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);

app.use("/api/newsletter", newsletterRoutes);

app.use("/api/product-request", productRequestRoutes);

// Orders
app.use("/api/orders", orderRoutes);


// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});