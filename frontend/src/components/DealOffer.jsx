import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

import watch from "../assets/images/watch.jpg";

function DealOffer() {
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-sm overflow-hidden">

          {/* Left Side */}

          <div className="p-10">

            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
              Limited Time Offer
            </span>

            <h2 className="text-5xl font-bold text-gray-800 mt-6 leading-tight">
              Up To
              <span className="text-green-600">
                {" "}50% OFF
              </span>
              <br />
              On Premium Products
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Discover exclusive discounts on our best-selling
              electronics, fashion, accessories and much more.
              Hurry up before the offer ends.
            </p>

            <Link
              to="/shop"
              className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Shop Now
            </Link>

            {/* Timer */}

            <CountdownTimer />

          </div>

          {/* Right Side */}

          <div className="bg-gradient-to-br from-green-100 to-emerald-50 flex justify-center items-center p-10">

            <img
              src={watch}
              alt="Deal Product"
              className="h-[420px] object-contain hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default DealOffer;