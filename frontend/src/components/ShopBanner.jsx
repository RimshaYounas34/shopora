import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import bag from "../assets/images/bags.png";

function ShopBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-50 via-white to-orange-50 border-b">

      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative">

        <div className="grid lg:grid-cols-2 items-center py-5">

          {/* Left Side */}
          <div>

            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold">
              ✨ New Collection
            </span>

            <h1 className="mt-4 text-5xl font-extrabold text-gray-900 leading-tight">
              Shop Your
              <span className="text-emerald-600"> Favorites</span>
            </h1>

            <p className="mt-3 text-gray-600 max-w-md">
              Discover premium products with the latest trends,
              unbeatable prices, and fast delivery.
            </p>

            <div className="flex items-center gap-3 mt-6">

              <Link
                to="/shop"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
              >
                Explore
                <FaArrowRight />
              </Link>

              <div className="text-sm text-gray-500">
                <Link to="/" className="hover:text-emerald-600">
                  Home
                </Link>

                <span className="mx-2">/</span>

                <span className="font-semibold text-emerald-600">
                  Shop
                </span>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">

            <div className="relative">

              {/* White Circle */}
              <div className="absolute inset-0 bg-white rounded-full shadow-2xl scale-90"></div>

              <img
                src={bag}
                alt="Bag"
                className="relative w-[230px] md:w-[280px] object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
              />

              {/* Discount Badge */}
              <div className="absolute top-3 -left-6 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg font-bold">
                50% OFF
              </div>

              {/* Free Shipping */}
              <div className="absolute bottom-4 -right-6 bg-white shadow-lg rounded-xl px-4 py-2">
                <p className="text-xs text-gray-500">
                  Free Shipping
                </p>
                <p className="font-bold text-emerald-600">
                  On Orders $50+
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ShopBanner;