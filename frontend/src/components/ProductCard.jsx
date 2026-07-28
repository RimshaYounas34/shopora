
import { Link, useNavigate } from "react-router-dom";

import {
  FaStar,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

import toast from "react-hot-toast";

import { useCart } from "./context/CartContext";
import { useWishlist } from "./context/WishlistContext";
import { useAuth } from "../context/AuthContext";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const { isAuthenticated } = useAuth();

  // ================= PRODUCT NAME =================

  const productName =
    product.title ||
    product.name ||
    "Product";

  // ================= ADD TO CART =================

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error(
        "Please login to add products to cart."
      );

      navigate("/login");
      return;
    }

    addToCart({
      ...product,
      title: productName,
    });

    toast.success(
      `${productName} added to cart!`
    );
  };

  // ================= WISHLIST =================

  const handleWishlist = () => {
    if (!isAuthenticated) {
      toast.error(
        "Please login to use wishlist."
      );

      navigate("/login");
      return;
    }

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);

      toast.success(
        `${productName} removed from wishlist!`
      );
    } else {
      addToWishlist({
        ...product,
        title: productName,
      });

      toast.success(
        `${productName} added to wishlist!`
      );
    }
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

      {/* ================= PRODUCT IMAGE ================= */}

      <div className="relative">

        {/* Discount Badge */}

        {product.discount && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-500 text-white text-[9px] sm:text-xs font-semibold px-2 py-1 rounded-full z-10">
            {product.discount}
          </span>
        )}

        {/* Wishlist Button */}

        <button
          type="button"
          onClick={handleWishlist}
          aria-label="Add to wishlist"
          className={`absolute top-2 right-2 sm:top-3 sm:right-3
            w-8 h-8 sm:w-10 sm:h-10
            rounded-full bg-white shadow-md
            flex items-center justify-center
            transition-all duration-300 z-10
            ${
              isInWishlist(product.id)
                ? "text-red-500"
                : "text-gray-700 hover:bg-red-500 hover:text-white"
            }`}
        >
          <FaHeart className="text-xs sm:text-sm" />
        </button>

        {/* Product Image */}

        <Link to={`/product/${product.id}`}>
          <div className="bg-gray-50 h-36 sm:h-44 md:h-52 lg:h-56 flex items-center justify-center overflow-hidden cursor-pointer">

            <img
              src={product.image}
              alt={productName}
              className="
                w-full
                h-28 sm:h-36 md:h-44 lg:h-48
                px-3
                object-contain
                group-hover:scale-110
                transition-transform
                duration-300
              "
            />

          </div>
        </Link>

      </div>

      {/* ================= PRODUCT CONTENT ================= */}

      <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">

        {/* Product Title */}

        <Link to={`/product/${product.id}`}>
          <h3 className="
            font-semibold
            text-gray-800
            text-sm sm:text-base
            leading-5 sm:leading-6
            line-clamp-2
            hover:text-green-600
            transition
            cursor-pointer
            min-h-[40px]
            sm:min-h-[48px]
          ">
            {productName}
          </h3>
        </Link>

        {/* Description */}

        {product.description && (
          <p className="
            text-gray-500
            text-xs sm:text-sm
            mt-2
            line-clamp-2
            leading-5
          ">
            {product.description}
          </p>
        )}

        {/* Rating */}

        <div className="flex items-center gap-1 mt-2 sm:mt-3">

          <div className="flex items-center gap-[2px]">
            {[1, 2, 3, 4, 5].map((item) => (
              <FaStar
                key={item}
                className={`text-[9px] sm:text-xs ${
                  item <= (product.rating || 0)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <span className="
            text-gray-500
            text-[10px] sm:text-xs
            ml-1
            whitespace-nowrap
          ">
            ({product.reviews || 0})
          </span>

        </div>

        {/* Price */}

        <div className="
          flex
          flex-wrap
          items-center
          gap-1.5 sm:gap-2
          mt-2 sm:mt-3
        ">

          <span className="
            text-green-600
            font-bold
            text-base sm:text-lg
          ">
            ${Number(product.price).toFixed(2)}
          </span>

          {product.oldPrice && (
            <span className="
              line-through
              text-gray-400
              text-xs sm:text-sm
            ">
              ${Number(product.oldPrice).toFixed(2)}
            </span>
          )}

        </div>

        {/* ================= ADD TO CART ================= */}

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-auto pt-3 sm:pt-4 w-full"
        >
          <div className="
            w-full
            bg-green-600
            hover:bg-green-700
            text-white
            py-2 sm:py-2.5
            px-2
            rounded-lg
            flex
            items-center
            justify-center
            gap-1.5 sm:gap-2
            text-xs sm:text-sm
            font-medium
            transition
          ">

            <FaShoppingCart className="text-xs sm:text-sm" />

            <span>
              Add To Cart
            </span>

          </div>
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
