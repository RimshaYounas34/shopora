import {
FaHeart,
FaShoppingCart,
FaUser,
FaSignOutAlt,
} from "react-icons/fa";

import { HiShoppingBag } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "./context/CartContext";
import { useAuth } from "../context/AuthContext";

import SearchBar from "./SearchBar";
import toast from "react-hot-toast";

function Navbar() {
const { cartCount } = useCart();

const { user, isAuthenticated, logout } = useAuth();

const navigate = useNavigate();

// ================= LOGOUT =================

const handleLogout = () => {
logout();

toast.success("Logged out successfully!");

navigate("/");


};

return ( <header className="sticky top-0 z-50">

  {/* ================= TOP NAVBAR ================= */}

  <nav className="bg-white shadow-sm border-b">

    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

      {/* ================= LOGO ================= */}

      <Link
        to="/"
        className="flex items-center gap-3"
      >

        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">

          <HiShoppingBag className="text-white text-3xl" />

        </div>

        <div>

          <h1 className="text-2xl font-extrabold text-gray-800">
            Shopora
          </h1>

          <p className="text-xs tracking-widest text-green-600 uppercase">
            Online Store
          </p>

        </div>

      </Link>


      {/* ================= SEARCH ================= */}

      <SearchBar />


      {/* ================= RIGHT SIDE ================= */}

      <div className="flex items-center gap-6">

        {/* Wishlist */}

        <Link
          to="/wishlist"
          className="text-gray-700 hover:text-green-600 transition"
        >
          <FaHeart size={22} />
        </Link>


        {/* Cart */}

        <Link
          to="/cart"
          className="relative text-gray-700 hover:text-green-600 transition"
        >

          <FaShoppingCart size={22} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
            {cartCount}
          </span>

        </Link>


        {/* ================= AUTH BUTTON ================= */}

        {isAuthenticated ? (

          // ================= LOGGED IN =================

          <div className="flex items-center gap-3">

            {/* User Name */}

            <div className="hidden md:block text-right">

              <p className="text-sm font-semibold text-gray-800">
                {user?.name}
              </p>

              <p className="text-xs text-gray-500">
                {user?.role === "admin"
                  ? "Administrator"
                  : "Customer"}
              </p>

            </div>


            {/* Logout Button */}

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition"
            >

              <FaSignOutAlt />

              Logout

            </button>

          </div>

        ) : (

          // ================= LOGGED OUT =================

          <Link
            to="/login"
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
          >

            <FaUser />

            Login

          </Link>

        )}

      </div>

    </div>

  </nav>


  {/* ================= BOTTOM MENU ================= */}

  <div className="bg-green-600 shadow">

    <div className="max-w-7xl mx-auto">

      <ul className="flex justify-center gap-12 text-white font-medium py-4">

        {/* Home */}

        <li>
          <Link
            to="/"
            className="hover:text-green-100 transition"
          >
            Home
          </Link>
        </li>


        {/* Shop */}

        <li>
          <Link
            to="/shop"
            className="hover:text-green-100 transition"
          >
            Shop
          </Link>
        </li>


        {/* Categories */}

        <li>
          <Link
            to="/categories"
            className="hover:text-green-100 transition"
          >
            Categories
          </Link>
        </li>


        {/* Deals */}

        <li>
          <Link
            to="/deals"
            className="hover:text-green-100 transition"
          >
            Deals
          </Link>
        </li>


        {/* Blog */}

        <li>
          <Link
            to="/blog"
            className="hover:text-green-100 transition"
          >
            Blog
          </Link>
        </li>


        {/* Contact */}

        <li>
          <Link
            to="/contact"
            className="hover:text-green-100 transition"
          >
            Contact
          </Link>
        </li>

      </ul>

    </div>

  </div>

</header>
);
}

export default Navbar;
