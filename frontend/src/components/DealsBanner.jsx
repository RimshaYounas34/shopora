import { Link } from "react-router-dom";
import { FaArrowRight, FaTags } from "react-icons/fa";

function DealsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-white to-green-50 border-b">

      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 items-center py-5">

          {/* Left Side */}
          <div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
              <FaTags />
              Limited Time Offers
            </span>

            <h1 className="mt-4 text-5xl font-extrabold text-gray-900">
              Hot
              <span className="text-green-600"> Deals</span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-lg">
              Discover today's biggest discounts, flash sales and exclusive
              offers on your favourite products before they're gone.
            </p>

            <div className="flex items-center gap-4 mt-6">

              <Link
                to="/shop"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
              >
                Shop Deals
                <FaArrowRight />
              </Link>

              <div className="text-sm text-gray-500">

                <Link
                  to="/"
                  className="hover:text-green-600 transition"
                >
                  Home
                </Link>

                <span className="mx-2">/</span>

                <span className="font-semibold text-green-600">
                  Deals
                </span>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-end">

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-2 transition">
                <h3 className="text-3xl font-bold text-red-500">
                  50%
                </h3>
                <p className="text-gray-500 mt-1">
                  OFF
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-2 transition">
                <h3 className="text-3xl font-bold text-green-600">
                  Free
                </h3>
                <p className="text-gray-500 mt-1">
                  Shipping
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-2 transition">
                <h3 className="text-2xl font-bold text-orange-500">
                  Buy 1
                </h3>
                <p className="text-gray-500 mt-1">
                  Get 1
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-2 transition">
                <h3 className="text-2xl font-bold text-blue-600">
                  Today
                </h3>
                <p className="text-gray-500 mt-1">
                  Only
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DealsBanner;