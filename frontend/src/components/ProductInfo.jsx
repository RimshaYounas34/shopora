
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
    <div className="w-full">

      {/* ================= CATEGORY ================= */}

      <p className="text-emerald-600 font-semibold text-sm sm:text-base">
        Electronics
      </p>

      {/* ================= TITLE ================= */}

      <h1 className="
        text-2xl
        sm:text-3xl
        lg:text-4xl
        font-bold
        text-gray-900
        mt-2
        leading-tight
      ">
        {product.title}
      </h1>

      {/* ================= RATING ================= */}

      <div className="
        flex
        flex-wrap
        items-center
        gap-2 sm:gap-4
        mt-4 sm:mt-5
      ">

        <div className="flex items-center text-yellow-400 gap-1">
          {[...Array(product.rating || 0)].map((_, index) => (
            <FaStar
              key={index}
              className="text-sm sm:text-base"
            />
          ))}
        </div>

        <span className="text-gray-500 text-sm sm:text-base">
          ({product.reviews || 0} Reviews)
        </span>

      </div>

      {/* ================= PRICE ================= */}

      <div className="
        flex
        flex-wrap
        items-center
        gap-3 sm:gap-4
        mt-5 sm:mt-6
      ">

        <h2 className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          text-emerald-600
        ">
          ${Number(product.price).toFixed(2)}
        </h2>

        {product.oldPrice && (
          <del className="
            text-lg
            sm:text-xl
            lg:text-2xl
            text-gray-400
          ">
            ${Number(product.oldPrice).toFixed(2)}
          </del>
        )}

      </div>

      {/* ================= DESCRIPTION ================= */}

      <p className="
        text-gray-600
        text-sm sm:text-base
        leading-7 sm:leading-8
        mt-5 sm:mt-6
      ">
        {product.title} is a premium quality product with modern
        design, excellent durability and high performance.
        Perfect for everyday use with fast delivery and secure shopping.
      </p>

      {/* ================= COLORS ================= */}

      <div className="mt-6 sm:mt-8">

        <h3 className="
          font-semibold
          text-base sm:text-lg
          mb-3
        ">
          Colors
        </h3>

        <div className="flex gap-3">

          <button
            type="button"
            aria-label="Black"
            className="
              w-8 h-8
              rounded-full
              bg-black
              border-2 border-black
              hover:scale-110
              transition
            "
          />

          <button
            type="button"
            aria-label="Gray"
            className="
              w-8 h-8
              rounded-full
              bg-gray-300
              border
              hover:scale-110
              transition
            "
          />

          <button
            type="button"
            aria-label="Red"
            className="
              w-8 h-8
              rounded-full
              bg-red-500
              border
              hover:scale-110
              transition
            "
          />

          <button
            type="button"
            aria-label="Blue"
            className="
              w-8 h-8
              rounded-full
              bg-blue-500
              border
              hover:scale-110
              transition
            "
          />

        </div>

      </div>

      {/* ================= QUANTITY ================= */}

      <div className="mt-6 sm:mt-8">

        <h3 className="
          font-semibold
          text-base sm:text-lg
          mb-3
        ">
          Quantity
        </h3>

        <div className="flex items-center gap-3 sm:gap-4">

          {/* Quantity Counter */}

          <div className="
            flex
            items-center
            border
            border-gray-200
            rounded-xl
            overflow-hidden
          ">

            <button
              type="button"
              onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
              className="
                w-10 h-10
                sm:w-12 sm:h-12
                hover:bg-gray-100
                transition
              "
            >
              <FaMinus className="mx-auto text-xs sm:text-sm" />
            </button>

            <span className="
              w-12
              sm:w-14
              text-center
              font-semibold
              text-sm sm:text-base
            ">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() =>
                setQuantity(quantity + 1)
              }
              className="
                w-10 h-10
                sm:w-12 sm:h-12
                hover:bg-gray-100
                transition
              "
            >
              <FaPlus className="mx-auto text-xs sm:text-sm" />
            </button>

          </div>

          {/* Wishlist */}

          <button
            type="button"
            aria-label="Add to wishlist"
            className="
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-xl
              border
              border-gray-200
              hover:bg-red-50
              transition
            "
          >
            <FaHeart className="mx-auto text-red-500" />
          </button>

        </div>

      </div>

      {/* ================= BUTTONS ================= */}

      <div className="
        flex
        flex-col
        sm:flex-row
        gap-3 sm:gap-4
        mt-8 sm:mt-10
      ">

        <button
          type="button"
          className="
            w-full
            sm:flex-1
            min-h-12
            sm:h-14
            rounded-xl
            bg-emerald-600
            text-white
            font-semibold
            hover:bg-emerald-700
            transition
            flex
            items-center
            justify-center
            gap-2 sm:gap-3
            text-sm sm:text-base
          "
        >
          <FaShoppingCart />

          Add To Cart
        </button>

        <button
          type="button"
          className="
            w-full
            sm:flex-1
            min-h-12
            sm:h-14
            rounded-xl
            border
            border-emerald-600
            text-emerald-600
            font-semibold
            hover:bg-emerald-600
            hover:text-white
            transition
            text-sm sm:text-base
          "
        >
          Buy Now
        </button>

      </div>

      {/* ================= EXTRA INFO ================= */}

      <div className="
        mt-8 sm:mt-10
        space-y-3
        text-gray-600
        text-sm sm:text-base
      ">

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
          <span className="text-green-600">
            In Stock
          </span>
        </p>

        {product.discount && (
          <p>
            <span className="font-semibold">
              Discount:
            </span>{" "}
            {product.discount}
          </p>
        )}

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
