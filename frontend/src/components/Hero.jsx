
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
    <section className="bg-[#fff8f2]">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}

          <div>

            <p className="text-orange-500 font-semibold mb-4">
              Summer Sale Live Now!
            </p>

            <h1 className="text-6xl font-bold leading-tight text-gray-900">
              Discover the Best
              <br />
              Products at
              <br />
              Best Prices
            </h1>

            <p className="mt-6 text-gray-500 text-lg leading-8 max-w-md">
              Find everything you need in one place.
              Top quality, best deals and fast delivery.
            </p>

            <div className="flex items-center gap-5 mt-8">

              {/* Shop Button */}

              <Link
                to="/shop"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition duration-300"
              >
                Shop Now
              </Link>

              {/* Watch Video */}

              <Link
                to="/watch-video"
                className="flex items-center gap-3 font-semibold text-gray-800 hover:text-green-600 transition"
              >

                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">

                  <FaPlay className="text-green-600" />

                </div>

                Watch Video

              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* Offer Circle */}

            <div className="absolute top-4 left-0 bg-white rounded-full w-28 h-28 shadow-xl flex flex-col justify-center items-center z-10">

              <span className="text-3xl font-bold text-red-500">
                50%
              </span>

              <span className="text-gray-600 text-sm">
                OFF
              </span>

            </div>

            {/* Main Image */}

            <img
              src={bag}
              alt="Shopping Bag"
              className="w-full max-w-xl mx-auto"
            />

          </div>

        </div>

      </div>

      {/* Bottom Features */}

      <div className="max-w-7xl mx-auto px-6 pb-10">

        <div className="bg-white rounded-2xl shadow-md grid md:grid-cols-4">

          <div className="flex gap-4 p-6">

            <FaTruck className="text-green-600 text-3xl" />

            <div>

              <h3 className="font-bold">
                Free Shipping
              </h3>

              <p className="text-gray-500 text-sm">
                On orders over $50
              </p>

            </div>

          </div>

          <div className="flex gap-4 p-6">

            <FaUndo className="text-green-600 text-3xl" />

            <div>

              <h3 className="font-bold">
                30 Days Returns
              </h3>

              <p className="text-gray-500 text-sm">
                Money back guarantee
              </p>

            </div>

          </div>

          <div className="flex gap-4 p-6">

            <FaShieldAlt className="text-green-600 text-3xl" />

            <div>

              <h3 className="font-bold">
                Secure Payment
              </h3>

              <p className="text-gray-500 text-sm">
                100% secure payment
              </p>

            </div>

          </div>

          <div className="flex gap-4 p-6">

            <FaHeadset className="text-green-600 text-3xl" />

            <div>

              <h3 className="font-bold">
                24/7 Support
              </h3>

              <p className="text-gray-500 text-sm">
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

