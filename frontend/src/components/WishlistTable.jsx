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

return ( <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

  <div className="overflow-x-auto">

    <table className="w-full min-w-[900px]">

      {/* Heading */}

      <thead className="bg-green-600 text-white">

        <tr>

          <th className="py-5 px-6 text-left">
            Product
          </th>

          <th className="py-5 px-6 text-center">
            Price
          </th>

          <th className="py-5 px-6 text-center">
            Stock Status
          </th>

          <th className="py-5 px-6 text-center">
            Add To Cart
          </th>

          <th className="py-5 px-6 text-center">
            Remove
          </th>

        </tr>

      </thead>

      {/* Body */}

      <tbody>

        {wishlistItems.map((product) => (

          <tr
            key={product.id}
            className="border-b last:border-none hover:bg-gray-50 transition"
          >

            {/* Product */}

            <td className="py-5 px-6">

              <div className="flex items-center gap-4">

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-contain bg-gray-100 rounded-xl p-2"
                />

                <div>

                  <h3 className="font-semibold text-gray-800">
                    {product.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Product ID #{product.id}
                  </p>

                </div>

              </div>

            </td>

            {/* Price */}

            <td className="text-center font-bold text-green-600">

              ${Number(product.price).toFixed(2)}

            </td>

            {/* Stock */}

            <td className="text-center">

              <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700">
                In Stock
              </span>

            </td>

            {/* Add To Cart */}

            <td className="text-center">

              <button
                type="button"
                onClick={() =>
                  handleAddToCart(product)
                }
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition cursor-pointer"
              >

                <FaShoppingCart />

                Add To Cart

              </button>

            </td>

            {/* Remove */}

            <td className="text-center">

              <button
                type="button"
                onClick={() =>
                  handleRemove(product)
                }
                className="w-11 h-11 rounded-xl bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition cursor-pointer"
              >

                <FaTrash className="mx-auto" />

              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>

);
}

export default WishlistTable;
