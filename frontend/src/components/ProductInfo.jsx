import { useState } from "react";
import {
  FaStar,
  FaHeart,
  FaMinus,
  FaPlus,
  FaShoppingCart,
} from "react-icons/fa";

function ProductInfo({ product }) {

  const [quantity, setQuantity] = useState(1);

  return (
    <div>

      {/* Category */}

      <p className="text-emerald-600 font-semibold">
        Electronics
      </p>

      {/* Title */}

      <h1 className="text-4xl font-bold text-gray-900 mt-2">
        {product.title}
      </h1>

      {/* Rating */}

      <div className="flex items-center gap-4 mt-5">

        <div className="flex text-yellow-400">

          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}

        </div>

        <span className="text-gray-500">
          ({product.reviews} Reviews)
        </span>

      </div>

      {/* Price */}

      <div className="flex items-center gap-4 mt-6">

        <h2 className="text-4xl font-bold text-emerald-600">
          ${product.price}
        </h2>

        <del className="text-2xl text-gray-400">
          ${product.oldPrice}
        </del>

      </div>

      {/* Description */}

      <p className="text-gray-600 leading-8 mt-6">
        {product.title} is a premium quality product with modern
        design, excellent durability and high performance.
        Perfect for everyday use with fast delivery and secure shopping.
      </p>

      {/* Colors */}

      <div className="mt-8">

        <h3 className="font-semibold text-lg mb-3">
          Colors
        </h3>

        <div className="flex gap-3">

          <button className="w-8 h-8 rounded-full bg-black border-2 border-black"></button>

          <button className="w-8 h-8 rounded-full bg-gray-300 border"></button>

          <button className="w-8 h-8 rounded-full bg-red-500 border"></button>

          <button className="w-8 h-8 rounded-full bg-blue-500 border"></button>

        </div>

      </div>

      {/* Quantity */}

      <div className="mt-8">

        <h3 className="font-semibold text-lg mb-3">
          Quantity
        </h3>

        <div className="flex items-center gap-4">

          <div className="flex items-center border rounded-xl overflow-hidden">

            <button
              onClick={() =>
                quantity > 1 && setQuantity(quantity - 1)
              }
              className="w-12 h-12 hover:bg-gray-100"
            >
              <FaMinus className="mx-auto" />
            </button>

            <span className="w-14 text-center font-semibold">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
              className="w-12 h-12 hover:bg-gray-100"
            >
              <FaPlus className="mx-auto" />
            </button>

          </div>

          <button className="w-12 h-12 rounded-xl border hover:bg-red-50">
            <FaHeart className="mx-auto text-red-500" />
          </button>

        </div>

      </div>
            {/* Buttons */}

      <div className="flex gap-4 mt-10">

        <button className="flex-1 h-14 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-3">

          <FaShoppingCart />

          Add To Cart

        </button>

        <button className="flex-1 h-14 rounded-xl border border-emerald-600 text-emerald-600 font-semibold hover:bg-emerald-600 hover:text-white transition">

          Buy Now

        </button>

      </div>

      {/* Extra Info */}

      <div className="mt-10 space-y-3 text-gray-600">

        <p>
          <span className="font-semibold">
            Product ID:
          </span>{" "}
          #{product.id}
        </p>

        <p>
          <span className="font-semibold">
            Availability:
          </span>{" "}
          In Stock
        </p>

        <p>
          <span className="font-semibold">
            Discount:
          </span>{" "}
          {product.discount}
        </p>

        <p>
          <span className="font-semibold">
            Shipping:
          </span>{" "}
          Free Worldwide Delivery
        </p>

      </div>

    </div>
  );
}

export default ProductInfo;