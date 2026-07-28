
import { Link } from "react-router-dom";

import {
  FaPlay,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaHeadset,
} from "react-icons/fa";

import bag from "../assets/images/bags.png";

function Hero() {
  return (
    <section className="bg-[#fff8f2] overflow-hidden">

      {/* ================= HERO CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}

          <div className="text-center lg:text-left">

            <p className="text-orange-500 font-semibold mb-4 text-sm sm:text-base">
              Summer Sale Live Now!
            </p>


            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">

              Discover the Best
              <br />

              Products at
              <br />

              Best Prices

            </h1>


            <p className="mt-5 sm:mt-6 text-gray-500 text-base sm:text-lg leading-7 sm:leading-8 max-w-md mx-auto lg:mx-0">

              Find everything you need in one place.
              Top quality, best deals and fast delivery.

            </p>


            {/* ================= BUTTONS ================= */}

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mt-7 sm:mt-8">

              {/* Shop Button */}

              <Link
                to="/shop"
                className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold transition duration-300 shadow-sm hover:shadow-md"
              >
                Shop Now
              </Link>


              {/* Watch Video */}

              <Link
                to="/watch-video"
                className="flex items-center gap-3 font-semibold text-gray-800 hover:text-green-600 transition"
              >

                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow flex items-center justify-center flex-shrink-0">

                  <FaPlay className="text-green-600 text-sm" />

                </div>

                <span>
                  Watch Video
                </span>

              </Link>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="relative flex justify-center mt-4 lg:mt-0">

            {/* ================= OFFER CIRCLE ================= */}

            <div className="absolute top-0 left-2 sm:left-8 lg:left-0 bg-white rounded-full w-24 h-24 sm:w-28 sm:h-28 shadow-xl flex flex-col justify-center items-center z-10">

              <span className="text-2xl sm:text-3xl font-bold text-red-500">
                50%
              </span>

              <span className="text-gray-600 text-xs sm:text-sm">
                OFF
              </span>

            </div>


            {/* ================= MAIN IMAGE ================= */}

            <img
              src={bag}
              alt="Shopping Bag"
              className="w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto object-contain"
            />

          </div>

        </div>

      </div>


      {/* ================= BOTTOM FEATURES ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">

        <div className="bg-white rounded-2xl shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">

          {/* ================= FREE SHIPPING ================= */}

          <div className="flex items-center gap-4 p-5 sm:p-6 border-b sm:border-r lg:border-b-0">

            <FaTruck className="text-green-600 text-2xl sm:text-3xl flex-shrink-0" />

            <div>

              <h3 className="font-bold text-gray-800">
                Free Shipping
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                On orders over $50
              </p>

            </div>

          </div>


          {/* ================= RETURNS ================= */}

          <div className="flex items-center gap-4 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r">

            <FaUndo className="text-green-600 text-2xl sm:text-3xl flex-shrink-0" />

            <div>

              <h3 className="font-bold text-gray-800">
                30 Days Returns
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Money back guarantee
              </p>

            </div>

          </div>


          {/* ================= SECURE PAYMENT ================= */}

          <div className="flex items-center gap-4 p-5 sm:p-6 border-b sm:border-b-0 sm:border-r">

            <FaShieldAlt className="text-green-600 text-2xl sm:text-3xl flex-shrink-0" />

            <div>

              <h3 className="font-bold text-gray-800">
                Secure Payment
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                100% secure payment
              </p>

            </div>

          </div>


          {/* ================= SUPPORT ================= */}

          <div className="flex items-center gap-4 p-5 sm:p-6">

            <FaHeadset className="text-green-600 text-2xl sm:text-3xl flex-shrink-0" />

            <div>

              <h3 className="font-bold text-gray-800">
                24/7 Support
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Dedicated support
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;