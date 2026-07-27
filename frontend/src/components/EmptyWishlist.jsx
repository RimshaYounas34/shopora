import { Link } from "react-router-dom";
import { FaHeartBroken } from "react-icons/fa";

function EmptyWishlist() {
  return (
    <div className="bg-white rounded-2xl shadow-sm py-20 px-6 text-center">

      {/* Icon */}

      <div className="w-28 h-28 mx-auto rounded-full bg-red-100 flex items-center justify-center">

        <FaHeartBroken className="text-red-500 text-5xl" />

      </div>

      {/* Heading */}

      <h2 className="text-3xl font-bold text-gray-800 mt-8">
        Your Wishlist is Empty
      </h2>

      {/* Description */}

      <p className="text-gray-500 mt-4 max-w-lg mx-auto leading-7">
        You haven't added any products to your wishlist yet.
        Browse our collection and save your favorite products
        to purchase later.
      </p>

      {/* Button */}

      <Link
        to="/shop"
        className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition"
      >
        Continue Shopping
      </Link>

    </div>
  );
}

export default EmptyWishlist;