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
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminNewsletters from "./pages/AdminNewsletters";
import AdminProductRequests from "./pages/AdminProductRequests";

function App() {
return (
<> <ScrollToTop />

  <Routes>

    {/* ================================================= */}
    {/* PUBLIC ROUTES */}
    {/* ================================================= */}

    <Route
      path="/"
      element={<Home />}
    />

    <Route
      path="/login"
      element={<Login />}
    />

    <Route
      path="/register"
      element={<Register />}
    />

    <Route
      path="/watch-video"
      element={<WatchVideo />}
    />


    {/* ================================================= */}
    {/* PROTECTED ROUTES */}
    {/* ================================================= */}

    <Route element={<ProtectedRoute />}>

      {/* ================= SHOP ================= */}

      <Route
        path="/shop"
        element={<Shop />}
      />

      <Route
        path="/best-sellers"
        element={<BestSellers />}
      />

      <Route
        path="/top-rated"
        element={<TopRated />}
      />

      <Route
        path="/new-arrivals"
        element={<NewArrivals />}
      />


      {/* ================= PRODUCT ================= */}

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/categories"
        element={<Categories />}
      />


      {/* ================= CATEGORY PAGES ================= */}

      <Route
        path="/electronics"
        element={<Electronics />}
      />

      <Route
        path="/fashion"
        element={<Fashion />}
      />

      <Route
        path="/furniture"
        element={<Furniture />}
      />

      <Route
        path="/mobiles"
        element={<Mobiles />}
      />

      <Route
        path="/gaming"
        element={<Gaming />}
      />

      <Route
        path="/bags"
        element={<Bags />}
      />

      <Route
        path="/jewellery"
        element={<Jewellery />}
      />

      <Route
        path="/sports"
        element={<Sports />}
      />

      <Route
        path="/beauty"
        element={<Beauty />}
      />

      <Route
        path="/groceries"
        element={<Groceries />}
      />

      <Route
        path="/watches"
        element={<Watches />}
      />

      <Route
        path="/shoes"
        element={<Shoes />}
      />


      {/* ================= SHOPPING ================= */}

      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      <Route
        path="/checkout"
        element={<Checkout />}
      />

      <Route
        path="/order-success/:orderId"
        element={<OrderSuccess />}
      />


      {/* ================= OTHER PAGES ================= */}

      <Route
        path="/deals"
        element={<Deals />}
      />

      <Route
        path="/blog"
        element={<Blog />}
      />

      <Route
        path="/blog/:id"
        element={<BlogDetails />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

    </Route>


    {/* ================================================= */}
    {/* ADMIN ROUTES - ADMIN ONLY */}
    {/* ================================================= */}

    <Route element={<AdminRoute />}>

      {/* Dashboard */}

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

      {/* Orders */}

      <Route
        path="/admin/orders"
        element={<AdminOrders />}
      />

      {/* Users */}

      <Route
        path="/admin/users"
        element={<AdminUsers />}
      />

      {/* Contact Messages */}

      <Route
        path="/admin/contacts"
        element={<AdminContacts />}
      />

      {/* Newsletter Subscribers */}

      <Route
        path="/admin/newsletters"
        element={<AdminNewsletters />}
      />

      {/* Product Requests */}

      <Route
        path="/admin/product-requests"
        element={<AdminProductRequests />}
      />

    </Route>

  </Routes>
</>


);
}

export default App;
