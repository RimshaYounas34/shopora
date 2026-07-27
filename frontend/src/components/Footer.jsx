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

function Footer() {
  return (
    <footer className="bg-[#1f2937] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company */}
          <div>

            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                <HiShoppingBag className="text-white text-3xl" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-white">
                  Shopora
                </h2>

                <p className="text-xs tracking-widest text-emerald-400 uppercase">
                  Online Store
                </p>
              </div>

            </div>

            <p className="text-sm leading-7 text-gray-400">
              Shop smarter with quality products at unbeatable prices.
              Fast delivery, secure payment and trusted service.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-emerald-400">Home</a></li>
              <li><a href="#" className="hover:text-emerald-400">Shop</a></li>
              <li><a href="#" className="hover:text-emerald-400">Categories</a></li>
              <li><a href="#" className="hover:text-emerald-400">Deals</a></li>
              <li><a href="#" className="hover:text-emerald-400">Blog</a></li>
            </ul>

          </div>

          {/* Customer Service */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-emerald-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-emerald-400">Returns</a></li>
              <li><a href="#" className="hover:text-emerald-400">Shipping</a></li>
              <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400">Terms & Conditions</a></li>
            </ul>

          </div>

          {/* My Account */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-5">
              My Account
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-emerald-400">Login</a></li>
              <li><a href="#" className="hover:text-emerald-400">Wishlist</a></li>
              <li><a href="#" className="hover:text-emerald-400">Shopping Cart</a></li>
              <li><a href="#" className="hover:text-emerald-400">Orders</a></li>
              <li><a href="#" className="hover:text-emerald-400">Checkout</a></li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-5 text-sm">

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-emerald-500 mt-1" />
                <p>Lahore, Pakistan</p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-emerald-500 mt-1" />
                <p>+92 300 1234567</p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-emerald-500 mt-1" />
                <p>support@shopora.com</p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-14 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-400">
            © 2026 <span className="text-white font-semibold">Shopora</span>. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;