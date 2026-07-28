
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import bag from "../assets/images/bags.png";

function ShopBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-50 via-white to-orange-50 border-b">

      {/* Background Decorations */}
      <div className="absolute -top-20 -left-20 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-20 -right-20 w-48 h-48 sm:w-72 sm:h-72 bg-orange-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 py-8 sm:py-10 lg:py-6">

          {/* ================= LEFT SIDE ================= */}

          <div className="text-center lg:text-left">

            {/* Badge */}
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              ✨ New Collection
            </span>

            {/* Heading */}
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Shop Your
              <span className="text-emerald-600"> Favorites</span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-md mx-auto lg:mx-0 leading-6">
              Discover premium products with the latest trends,
              unbeatable prices, and fast delivery.
            </p>

            {/* Button + Breadcrumb */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">

              {/* Explore Button */}
              <Link
                to="/shop"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition w-full sm:w-auto"
              >
                Explore
                <FaArrowRight className="text-sm" />
              </Link>

              {/* Breadcrumb */}
              <div className="text-sm text-gray-500">

                <Link
                  to="/"
                  className="hover:text-emerald-600 transition"
                >
                  Home
                </Link>

                <span className="mx-2">/</span>

                <span className="font-semibold text-emerald-600">
                  Shop
                </span>

              </div>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">

            <div className="relative">

              {/* White Circle */}
              <div className="absolute inset-0 bg-white rounded-full shadow-2xl scale-90"></div>

              {/* Product Image */}
              <img
                src={bag}
                alt="Shopping Bag"
                className="
                  relative
                  w-[180px]
                  xs:w-[200px]
                  sm:w-[230px]
                  md:w-[270px]
                  lg:w-[240px]
                  xl:w-[280px]
                  object-contain
                  drop-shadow-2xl
                  hover:scale-105
                  transition
                  duration-500
                "
              />

              {/* ================= DISCOUNT BADGE ================= */}

              <div className="
                absolute
                top-1
                -left-2
                sm:top-3
                sm:-left-5
                bg-orange-500
                text-white
                px-3
                sm:px-4
                py-1.5
                sm:py-2
                rounded-full
                shadow-lg
                text-xs
                sm:text-sm
                font-bold
              ">
                50% OFF
              </div>


              {/* ================= FREE SHIPPING ================= */}

              <div className="
                absolute
                bottom-1
                -right-2
                sm:bottom-4
                sm:-right-5
                bg-white
                shadow-lg
                rounded-xl
                px-3
                sm:px-4
                py-2
                whitespace-nowrap
              ">

                <p className="text-[10px] sm:text-xs text-gray-500">
                  Free Shipping
                </p>

                <p className="text-xs sm:text-sm font-bold text-emerald-600">
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
