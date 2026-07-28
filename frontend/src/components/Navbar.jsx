
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { HiShoppingBag } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import { useCart } from "./context/CartContext";
import { useAuth } from "../context/AuthContext";

import SearchBar from "./SearchBar";
import toast from "react-hot-toast";

function Navbar() {
  const { cartCount } = useCart();

  const { user, isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  // ================= LOGOUT =================

  const handleLogout = () => {
    logout();

    setMenuOpen(false);

    toast.success("Logged out successfully!");

    navigate("/");
  };

  // ================= CLOSE MENU =================

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">

      {/* ================= TOP NAVBAR ================= */}

      <nav className="bg-white shadow-sm border-b">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-20 flex items-center justify-between gap-4">

            {/* ================= LOGO ================= */}

            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
            >

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">

                <HiShoppingBag className="text-white text-2xl sm:text-3xl" />

              </div>

              <div>

                <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800">
                  Shopora
                </h1>

                <p className="text-[9px] sm:text-xs tracking-[3px] sm:tracking-widest text-green-600 uppercase">
                  Online Store
                </p>

              </div>

            </Link>


            {/* ================= SEARCH ================= */}

            <div className="hidden md:block flex-1 max-w-xl mx-4">
              <SearchBar />
            </div>


            {/* ================= DESKTOP RIGHT SIDE ================= */}

            <div className="hidden md:flex items-center gap-4 lg:gap-6">

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


              {/* ================= AUTH ================= */}

              {isAuthenticated ? (

                <div className="flex items-center gap-3">

                  {/* User Name */}

                  <div className="hidden lg:block text-right">

                    <p className="text-sm font-semibold text-gray-800">
                      {user?.name}
                    </p>

                    <p className="text-xs text-gray-500">

                      {user?.role === "admin"
                        ? "Administrator"
                        : "Customer"}

                    </p>

                  </div>


                  {/* Logout */}

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-red-500 text-white px-4 lg:px-5 py-2 rounded-full hover:bg-red-600 transition"
                  >

                    <FaSignOutAlt />

                    <span className="hidden lg:inline">
                      Logout
                    </span>

                  </button>

                </div>

              ) : (

                <Link
                  to="/login"
                  className="flex items-center gap-2 bg-green-600 text-white px-4 lg:px-5 py-2 rounded-full hover:bg-green-700 transition"
                >

                  <FaUser />

                  <span className="hidden lg:inline">
                    Login
                  </span>

                </Link>

              )}

            </div>


            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 text-2xl p-2"
              aria-label="Toggle menu"
            >

              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}

            </button>

          </div>


          {/* ================= MOBILE SEARCH ================= */}

          <div className="md:hidden pb-4">

            <SearchBar />

          </div>

        </div>

      </nav>


      {/* ================= DESKTOP BOTTOM MENU ================= */}

      <div className="hidden md:block bg-green-600 shadow">

        <div className="max-w-7xl mx-auto px-6">

          <ul className="flex justify-center gap-8 lg:gap-12 text-white font-medium py-4">

            <li>
              <Link
                to="/"
                className="hover:text-green-100 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="hover:text-green-100 transition"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/categories"
                className="hover:text-green-100 transition"
              >
                Categories
              </Link>
            </li>

            <li>
              <Link
                to="/deals"
                className="hover:text-green-100 transition"
              >
                Deals
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="hover:text-green-100 transition"
              >
                Blog
              </Link>
            </li>

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


      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (

        <div className="md:hidden bg-white border-b shadow-lg">

          <div className="px-5 py-5">

            {/* ================= MOBILE NAV LINKS ================= */}

            <ul className="flex flex-col gap-1 font-medium">

              <li>

                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition"
                >
                  Home
                </Link>

              </li>


              <li>

                <Link
                  to="/shop"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition"
                >
                  Shop
                </Link>

              </li>


              <li>

                <Link
                  to="/categories"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition"
                >
                  Categories
                </Link>

              </li>


              <li>

                <Link
                  to="/deals"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition"
                >
                  Deals
                </Link>

              </li>


              <li>

                <Link
                  to="/blog"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition"
                >
                  Blog
                </Link>

              </li>


              <li>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition"
                >
                  Contact
                </Link>

              </li>

            </ul>


            {/* ================= MOBILE ACTIONS ================= */}

            <div className="border-t mt-4 pt-4 flex flex-col gap-3">

              {/* Wishlist */}

              <Link
                to="/wishlist"
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-50 transition"
              >

                <FaHeart className="text-gray-700" />

                <span>
                  Wishlist
                </span>

              </Link>


              {/* Cart */}

              <Link
                to="/cart"
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-50 transition"
              >

                <div className="relative">

                  <FaShoppingCart className="text-gray-700" />

                  <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[9px] font-bold rounded-full min-w-4 h-4 px-1 flex items-center justify-center">

                    {cartCount}

                  </span>

                </div>

                <span>
                  Cart
                </span>

              </Link>


              {/* ================= MOBILE AUTH ================= */}

              {isAuthenticated ? (

                <>

                  <div className="px-4 py-3 bg-gray-50 rounded-lg">

                    <p className="font-semibold text-gray-800">
                      {user?.name}
                    </p>

                    <p className="text-sm text-gray-500">

                      {user?.role === "admin"
                        ? "Administrator"
                        : "Customer"}

                    </p>

                  </div>


                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition"
                  >

                    <FaSignOutAlt />

                    Logout

                  </button>

                </>

              ) : (

                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition"
                >

                  <FaUser />

                  Login

                </Link>

              )}

            </div>

          </div>

        </div>

      )}

    </header>
  );
}

export default Navbar;
