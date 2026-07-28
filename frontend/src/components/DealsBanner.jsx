
import { Link } from "react-router-dom";
import { FaArrowRight, FaTags } from "react-icons/fa";

function DealsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-white to-green-50 border-b">

      {/* ================= BACKGROUND DECORATIONS ================= */}

      <div className="absolute -top-24 -left-24 w-56 h-56 sm:w-72 sm:h-72 bg-orange-200/30 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 w-56 h-56 sm:w-72 sm:h-72 bg-green-200/30 rounded-full blur-3xl"></div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 py-8 sm:py-10 md:py-12">


          {/* ================= LEFT SIDE ================= */}

          <div className="text-center lg:text-left">

            {/* Badge */}

            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-xs sm:text-sm font-semibold">

              <FaTags />

              Limited Time Offers

            </span>


            {/* Heading */}

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">

              Hot

              <span className="text-green-600">
                {" "}Deals
              </span>

            </h1>


            {/* Description */}

            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-lg mx-auto lg:mx-0 leading-7">

              Discover today's biggest discounts, flash sales and exclusive
              offers on your favourite products before they're gone.

            </p>


            {/* Button + Breadcrumb */}

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">

              {/* Shop Button */}

              <Link
                to="/shop"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition duration-300"
              >

                Shop Deals

                <FaArrowRight />

              </Link>


              {/* Breadcrumb */}

              <div className="text-sm text-gray-500">

                <Link
                  to="/"
                  className="hover:text-green-600 transition"
                >
                  Home
                </Link>

                <span className="mx-2">
                  /
                </span>

                <span className="font-semibold text-green-600">
                  Deals
                </span>

              </div>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="flex justify-center lg:justify-end">

            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm">


              {/* 50% OFF */}

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 text-center hover:-translate-y-2 transition duration-300">

                <h3 className="text-2xl sm:text-3xl font-bold text-red-500">
                  50%
                </h3>

                <p className="text-gray-500 mt-1 text-sm sm:text-base">
                  OFF
                </p>

              </div>


              {/* Free Shipping */}

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 text-center hover:-translate-y-2 transition duration-300">

                <h3 className="text-2xl sm:text-3xl font-bold text-green-600">
                  Free
                </h3>

                <p className="text-gray-500 mt-1 text-sm sm:text-base">
                  Shipping
                </p>

              </div>


              {/* Buy 1 Get 1 */}

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 text-center hover:-translate-y-2 transition duration-300">

                <h3 className="text-xl sm:text-2xl font-bold text-orange-500">
                  Buy 1
                </h3>

                <p className="text-gray-500 mt-1 text-sm sm:text-base">
                  Get 1
                </p>

              </div>


              {/* Today Only */}

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 text-center hover:-translate-y-2 transition duration-300">

                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                  Today
                </h3>

                <p className="text-gray-500 mt-1 text-sm sm:text-base">
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
