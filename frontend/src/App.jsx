
import { Routes, Route } from "react-router-dom";

// ================= PUBLIC / MAIN PAGES =================

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Deals from "./pages/Deals";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";

// ================= CATEGORY PAGES =================

import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import Furniture from "./pages/Furniture";
import Mobiles from "./pages/Mobiles";
import Gaming from "./pages/Gaming";
import Bags from "./pages/Bags";
import Jewellery from "./pages/Jewellery";
import Sports from "./pages/Sports";
import Beauty from "./pages/Beauty";
import Groceries from "./pages/Groceries";
import Watches from "./pages/Watches";
import Shoes from "./pages/Shoes";

// ================= FEATURED PRODUCT PAGES =================

import BestSellers from "./pages/BestSellers";
import TopRated from "./pages/TopRated";
import NewArrivals from "./pages/NewArrivals";

// ================= ROUTE PROTECTION =================

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

// ================= OTHER COMPONENTS =================

import ScrollToTop from "./components/ScrollToTop";

// ================= OTHER PAGES =================

import WatchVideo from "./pages/WatchVideo";

// ================= ADMIN PAGES =================

import AdminDashboard from "./pages/AdminDashboard";
import AdminOrders from "./pages/AdminOrders";


function App() {
  return (
    <>
      {/* Scroll to top whenever page changes */}
      <ScrollToTop />

      <Routes>

        {/* ================================================= */}
        {/* PUBLIC ROUTES - EVERYONE CAN ACCESS */}
        {/* ================================================= */}

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Watch Video */}
        <Route
          path="/watch-video"
          element={<WatchVideo />}
        />


        {/* ================================================= */}
        {/* PROTECTED ROUTES - LOGIN REQUIRED */}
        {/* ================================================= */}

        <Route element={<ProtectedRoute />}>

          {/* ================= SHOP ================= */}

          <Route
            path="/shop"
            element={<Shop />}
          />


          {/* ================= FEATURED PRODUCT PAGES ================= */}

          {/* All Products */}
          <Route
            path="/shop"
            element={<Shop />}
          />

          {/* Best Sellers */}
          <Route
            path="/best-sellers"
            element={<BestSellers />}
          />

          {/* Top Rated */}
          <Route
            path="/top-rated"
            element={<TopRated />}
          />

          {/* New Arrivals */}
          <Route
            path="/new-arrivals"
            element={<NewArrivals />}
          />


          {/* Product Details */}
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          {/* Categories */}
          <Route
            path="/categories"
            element={<Categories />}
          />


          {/* ================= CATEGORY PAGES ================= */}

          {/* Electronics */}
          <Route
            path="/electronics"
            element={<Electronics />}
          />

          {/* Fashion */}
          <Route
            path="/fashion"
            element={<Fashion />}
          />

          {/* Furniture */}
          <Route
            path="/furniture"
            element={<Furniture />}
          />

          {/* Mobiles */}
          <Route
            path="/mobiles"
            element={<Mobiles />}
          />

          {/* Gaming */}
          <Route
            path="/gaming"
            element={<Gaming />}
          />

          {/* Bags */}
          <Route
            path="/bags"
            element={<Bags />}
          />

          {/* Jewellery */}
          <Route
            path="/jewellery"
            element={<Jewellery />}
          />

          {/* Sports */}
          <Route
            path="/sports"
            element={<Sports />}
          />

          {/* Beauty */}
          <Route
            path="/beauty"
            element={<Beauty />}
          />

          {/* Groceries */}
          <Route
            path="/groceries"
            element={<Groceries />}
          />

          {/* Watches */}
          <Route
            path="/watches"
            element={<Watches />}
          />

          {/* Shoes */}
          <Route
            path="/shoes"
            element={<Shoes />}
          />


          {/* ================= SHOPPING ROUTES ================= */}

          {/* Cart */}
          <Route
            path="/cart"
            element={<Cart />}
          />

          {/* Wishlist */}
          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          {/* Checkout */}
          <Route
            path="/checkout"
            element={<Checkout />}
          />

          {/* Order Success */}
          <Route
            path="/order-success/:orderId"
            element={<OrderSuccess />}
          />


          {/* ================= OTHER PAGES ================= */}

          {/* Deals */}
          <Route
            path="/deals"
            element={<Deals />}
          />

          {/* Blog Main Page */}
          <Route
            path="/blog"
            element={<Blog />}
          />

          {/* Blog Details Page */}
          <Route
            path="/blog/:id"
            element={<BlogDetails />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>


        {/* ================================================= */}
        {/* ADMIN ROUTES - ADMIN ONLY */}
        {/* ================================================= */}

        <Route element={<AdminRoute />}>

          {/* Admin Dashboard */}
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />

          {/* Admin Orders */}
          <Route
            path="/admin/orders"
            element={<AdminOrders />}
          />

        </Route>

      </Routes>
    </>
  );
}

export default App;
