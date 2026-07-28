import {
FaFacebookF,
FaTwitter,
FaInstagram,
FaLinkedinIn,
FaMapMarkerAlt,
FaPhoneAlt,
FaEnvelope,
} from "react-icons/fa";

import { HiShoppingBag } from "react-icons/hi2";

import { Link } from "react-router-dom";

function Footer() {
return ( <footer className="bg-[#1f2937] text-gray-300 pt-12 sm:pt-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* ================= MAIN FOOTER ================= */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

      {/* ================= COMPANY ================= */}

      <div className="sm:col-span-2 lg:col-span-1">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 mb-5 w-fit"
        >

          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">

            <HiShoppingBag className="text-white text-2xl sm:text-3xl" />

          </div>

          <div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Shopora
            </h2>

            <p className="text-[10px] sm:text-xs tracking-widest text-emerald-400 uppercase">
              Online Store
            </p>

          </div>

        </Link>


        <p className="text-sm leading-7 text-gray-400 max-w-sm">
          Shop smarter with quality products at unbeatable prices.
          Fast delivery, secure payment and trusted service.
        </p>


        {/* Social Icons */}

        <div className="flex flex-wrap gap-3 mt-6">

          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>

        </div>

      </div>


      {/* ================= QUICK LINKS ================= */}

      <div>

        <h3 className="text-white font-semibold text-lg mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3 text-sm sm:text-base">

          <li>
            <Link to="/" className="hover:text-emerald-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" className="hover:text-emerald-400 transition">
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="/categories"
              className="hover:text-emerald-400 transition"
            >
              Categories
            </Link>
          </li>

          <li>
            <Link to="/deals" className="hover:text-emerald-400 transition">
              Deals
            </Link>
          </li>

          <li>
            <Link to="/blog" className="hover:text-emerald-400 transition">
              Blog
            </Link>
          </li>

        </ul>

      </div>


      {/* ================= CUSTOMER SERVICE ================= */}

      <div>

        <h3 className="text-white font-semibold text-lg mb-5">
          Customer Service
        </h3>

        <ul className="space-y-3 text-sm sm:text-base">

          <li>
            <Link
              to="/contact"
              className="hover:text-emerald-400 transition"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-emerald-400 transition"
            >
              Returns
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-emerald-400 transition"
            >
              Shipping
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-emerald-400 transition"
            >
              Privacy Policy
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-emerald-400 transition"
            >
              Terms & Conditions
            </a>
          </li>

        </ul>

      </div>


      {/* ================= MY ACCOUNT ================= */}

      <div>

        <h3 className="text-white font-semibold text-lg mb-5">
          My Account
        </h3>

        <ul className="space-y-3 text-sm sm:text-base">

          <li>
            <Link
              to="/login"
              className="hover:text-emerald-400 transition"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/wishlist"
              className="hover:text-emerald-400 transition"
            >
              Wishlist
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="hover:text-emerald-400 transition"
            >
              Shopping Cart
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-emerald-400 transition"
            >
              Orders
            </a>
          </li>

          <li>
            <Link
              to="/checkout"
              className="hover:text-emerald-400 transition"
            >
              Checkout
            </Link>
          </li>

        </ul>

      </div>


      {/* ================= CONTACT ================= */}

      <div>

        <h3 className="text-white font-semibold text-lg mb-5">
          Contact
        </h3>

        <div className="space-y-5 text-sm">

          <div className="flex gap-3 items-start">

            <FaMapMarkerAlt className="text-emerald-500 mt-1 flex-shrink-0" />

            <p>
              Lahore, Pakistan
            </p>

          </div>


          <div className="flex gap-3 items-start">

            <FaPhoneAlt className="text-emerald-500 mt-1 flex-shrink-0" />

            <p className="break-all">
              +92 300 1234567
            </p>

          </div>


          <div className="flex gap-3 items-start">

            <FaEnvelope className="text-emerald-500 mt-1 flex-shrink-0" />

            <p className="break-all">
              support@shopora.com
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* ================= BOTTOM FOOTER ================= */}

    <div className="border-t border-gray-700 mt-10 sm:mt-14 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3">

      <p className="text-xs sm:text-sm text-gray-400">
        © 2026{" "}
        <span className="text-white font-semibold">
          Shopora
        </span>
        . All Rights Reserved.
      </p>

      <p className="text-xs sm:text-sm text-gray-500">
        Designed with ❤️ using React & Tailwind CSS
      </p>

    </div>

  </div>

</footer>

);
}

export default Footer;
