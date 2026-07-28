
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

import watch from "../assets/images/watch.jpg";

function DealOffer() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl sm:rounded-3xl shadow-md overflow-hidden">

          {/* ================= LEFT SIDE ================= */}

          <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">

            {/* Offer Badge */}

            <span className="inline-flex self-start bg-red-100 text-red-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              Limited Time Offer
            </span>


            {/* Heading */}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-5 sm:mt-6 leading-tight">

              Up To{" "}

              <span className="text-green-600">
                50% OFF
              </span>

              <br className="hidden sm:block" />

              <span className="block sm:inline">
                On Premium Products
              </span>

            </h2>


            {/* Description */}

            <p className="text-gray-600 mt-5 sm:mt-6 text-sm sm:text-base leading-7 sm:leading-8 max-w-xl">

              Discover exclusive discounts on our best-selling
              electronics, fashion, accessories and much more.
              Hurry up before the offer ends.

            </p>


            {/* Shop Button */}

            <Link
              to="/shop"
              className="inline-flex self-start mt-6 sm:mt-8 bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition duration-300"
            >
              Shop Now
            </Link>


            {/* Countdown Timer */}

            <div className="mt-6 sm:mt-8 w-full overflow-hidden">

              <CountdownTimer />

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="relative bg-gradient-to-br from-green-100 to-emerald-50 min-h-[280px] sm:min-h-[350px] lg:min-h-[500px] flex items-center justify-center p-6 sm:p-8 md:p-10">

            {/* Decorative Circle */}

            <div className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white/60 rounded-full"></div>


            {/* Deal Image */}

            <img
              src={watch}
              alt="Deal Product"
              className="
                relative
                z-10
                w-[180px]
                sm:w-[230px]
                md:w-[280px]
                lg:w-[330px]
                max-w-full
                object-contain
                drop-shadow-xl
                hover:scale-105
                transition
                duration-500
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default DealOffer;
