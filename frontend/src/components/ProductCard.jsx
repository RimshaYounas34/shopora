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

const {
isAuthenticated,
} = useAuth();

// ================= PRODUCT NAME =================

const productName =
product.title ||
product.name ||
"Product";

// ================= ADD TO CART =================

const handleAddToCart = () => {

// Check Login

if (!isAuthenticated) {

  toast.error(
    "Please login to add products to cart."
  );

  navigate("/login");

  return;
}


// Add Product

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

// Check Login

if (!isAuthenticated) {

  toast.error(
    "Please login to use wishlist."
  );

  navigate("/login");

  return;
}


// Remove from Wishlist

if (isInWishlist(product.id)) {

  removeFromWishlist(product.id);

  toast.success(
    `${productName} removed from wishlist!`
  );

}

// Add to Wishlist

else {

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

<div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">


  {/* ================= PRODUCT IMAGE ================= */}

  <div className="relative">


    {/* Discount Badge */}

    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">

      {product.discount}

    </span>


    {/* Wishlist Button */}

    <button
      type="button"
      onClick={handleWishlist}
      className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center transition z-10 ${
        isInWishlist(product.id)
          ? "text-red-500"
          : "text-gray-700 hover:bg-red-500 hover:text-white"
      }`}
    >

      <FaHeart size={14} />

    </button>


    {/* Product Image */}

    <Link to={`/product/${product.id}`}>

      <div className="bg-gray-50 h-56 flex items-center justify-center overflow-hidden cursor-pointer">

        <img
          src={product.image}
          alt={productName}
          className="h-44 object-contain group-hover:scale-110 transition duration-300"
        />

      </div>

    </Link>

  </div>


  {/* ================= PRODUCT CONTENT ================= */}

  <div className="p-4">


    {/* Product Title */}

    <Link to={`/product/${product.id}`}>

      <h3 className="font-semibold text-gray-800 line-clamp-2 hover:text-green-600 transition cursor-pointer">

        {productName}

      </h3>

    </Link>


    {/* Description */}

    {product.description && (

      <p className="text-gray-500 text-sm mt-2 line-clamp-2">

        {product.description}

      </p>

    )}


    {/* Rating */}

    <div className="flex items-center gap-1 text-sm mt-3">

      {[1, 2, 3, 4, 5].map((item) => (

        <FaStar
          key={item}
          className={
            item <= (product.rating || 0)
              ? "text-yellow-400"
              : "text-gray-300"
          }
        />

      ))}

      <span className="text-gray-500 text-xs ml-1">

        ({product.reviews || 0} Reviews)

      </span>

    </div>


    {/* Price */}

    <div className="flex items-center gap-2 mt-3">

      <span className="text-green-600 font-bold text-lg">

        ${Number(product.price).toFixed(2)}

      </span>


      {product.oldPrice && (

        <span className="line-through text-gray-400">

          ${Number(product.oldPrice).toFixed(2)}

        </span>

      )}

    </div>


    {/* ================= ADD TO CART ================= */}

    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition cursor-pointer"
    >

      <FaShoppingCart />

      Add To Cart

    </button>


  </div>

</div>

);

}

export default ProductCard;
