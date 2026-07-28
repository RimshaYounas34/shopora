import {
  FaTrash,
  FaShoppingCart,
} from "react-icons/fa";

import toast from "react-hot-toast";

import { useWishlist } from "./context/WishlistContext";
import { useCart } from "./context/CartContext";

function WishlistTable() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  // Add wishlist product to cart
  const handleAddToCart = (product) => {
    addToCart(product);

    toast.success(
      product.title + " added to cart!"
    );
  };

  // Remove product from wishlist
  const handleRemove = (product) => {
    removeFromWishlist(product.id);

    toast.success(
      product.title + " removed from wishlist!"
    );
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">

      {/* Responsive Table Wrapper */}
      <div className="w-full overflow-x-auto">

        <table className="w-full min-w-[850px]">

          {/* Heading */}
          <thead className="bg-green-600 text-white">

            <tr>

              <th className="py-4 sm:py-5 px-4 sm:px-6 text-left text-sm sm:text-base">
                Product
              </th>

              <th className="py-4 sm:py-5 px-4 sm:px-6 text-center text-sm sm:text-base">
                Price
              </th>

              <th className="py-4 sm:py-5 px-4 sm:px-6 text-center text-sm sm:text-base">
                Stock Status
              </th>

              <th className="py-4 sm:py-5 px-4 sm:px-6 text-center text-sm sm:text-base">
                Add To Cart
              </th>

              <th className="py-4 sm:py-5 px-4 sm:px-6 text-center text-sm sm:text-base">
                Remove
              </th>

            </tr>

          </thead>

          {/* Body */}
          <tbody>

            {wishlistItems.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="py-12 text-center text-gray-500"
                >
                  Your wishlist is empty.
                </td>

              </tr>

            ) : (

              wishlistItems.map((product) => (

                <tr
                  key={product.id}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >

                  {/* Product */}
                  <td className="py-4 sm:py-5 px-4 sm:px-6">

                    <div className="flex items-center gap-3 sm:gap-4">

                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-gray-100 rounded-xl p-2 flex-shrink-0"
                      />

                      <div className="min-w-0">

                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate max-w-[200px]">
                          {product.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                          Product ID #{product.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Price */}
                  <td className="text-center font-bold text-green-600 text-sm sm:text-base px-4">
                    ${Number(product.price).toFixed(2)}
                  </td>

                  {/* Stock */}
                  <td className="text-center px-4">

                    <span className="inline-block whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-700">
                      In Stock
                    </span>

                  </td>

                  {/* Add To Cart */}
                  <td className="text-center px-4">

                    <button
                      type="button"
                      onClick={() =>
                        handleAddToCart(product)
                      }
                      className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl transition cursor-pointer text-sm sm:text-base whitespace-nowrap"
                    >

                      <FaShoppingCart />

                      <span>
                        Add To Cart
                      </span>

                    </button>

                  </td>

                  {/* Remove */}
                  <td className="text-center px-4">

                    <button
                      type="button"
                      onClick={() =>
                        handleRemove(product)
                      }
                      aria-label={`Remove ${product.title} from wishlist`}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition cursor-pointer"
                    >

                      <FaTrash className="mx-auto text-sm sm:text-base" />

                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default WishlistTable;