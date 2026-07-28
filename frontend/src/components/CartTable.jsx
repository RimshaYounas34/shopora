import {
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";

import { useCart } from "./context/CartContext";

function CartTable() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-12 text-center">

        {/* Cart Icon */}
        <div className="text-4xl sm:text-5xl mb-4 sm:mb-5">
          🛒
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Your Cart is Empty
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base max-w-md mx-auto">
          Add some products to your cart and they will appear here.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      {/* Responsive Horizontal Scroll */}
      <div className="w-full overflow-x-auto">

        <table className="w-full min-w-[700px]">

          {/* Table Header */}
          <thead className="bg-green-600 text-white">

            <tr>

              <th className="text-left px-4 sm:px-5 py-4 sm:py-5 text-sm sm:text-base">
                Product
              </th>

              <th className="text-center px-4 sm:px-5 py-4 sm:py-5 text-sm sm:text-base">
                Price
              </th>

              <th className="text-center px-4 sm:px-5 py-4 sm:py-5 text-sm sm:text-base">
                Quantity
              </th>

              <th className="text-center px-4 sm:px-5 py-4 sm:py-5 text-sm sm:text-base">
                Total
              </th>

              <th className="text-center px-4 sm:px-5 py-4 sm:py-5 text-sm sm:text-base">
                Remove
              </th>

            </tr>

          </thead>

          {/* Table Body */}
          <tbody>

            {cartItems.map((item) => (

              <tr
                key={item.id}
                className="border-b last:border-b-0 hover:bg-gray-50 transition"
              >

                {/* Product */}
                <td className="px-4 sm:px-5 py-4 sm:py-5">

                  <div className="flex items-center gap-3 sm:gap-4">

                    <img
                      src={item.image}
                      alt={item.name || item.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-gray-50 rounded-xl p-1 flex-shrink-0"
                    />

                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base max-w-[180px]">
                      {item.name || item.title}
                    </h3>

                  </div>

                </td>

                {/* Price */}
                <td className="text-center font-semibold text-sm sm:text-base px-4">
                  ${Number(item.price).toFixed(2)}
                </td>

                {/* Quantity */}
                <td className="px-4">

                  <div className="flex justify-center">

                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">

                      {/* Decrease */}
                      <button
                        type="button"
                        onClick={() =>
                          decreaseQty(item.id)
                        }
                        aria-label="Decrease quantity"
                        className="w-9 h-9 sm:w-10 sm:h-10 hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition"
                      >
                        <FaMinus className="mx-auto text-xs sm:text-sm" />
                      </button>

                      {/* Quantity */}
                      <span className="w-10 sm:w-12 text-center font-semibold text-sm sm:text-base">
                        {item.quantity}
                      </span>

                      {/* Increase */}
                      <button
                        type="button"
                        onClick={() =>
                          increaseQty(item.id)
                        }
                        aria-label="Increase quantity"
                        className="w-9 h-9 sm:w-10 sm:h-10 hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition"
                      >
                        <FaPlus className="mx-auto text-xs sm:text-sm" />
                      </button>

                    </div>

                  </div>

                </td>

                {/* Total */}
                <td className="text-center font-bold text-green-600 text-sm sm:text-base px-4">
                  $
                  {(
                    Number(item.price) *
                    item.quantity
                  ).toFixed(2)}
                </td>

                {/* Remove */}
                <td className="text-center px-4">

                  <button
                    type="button"
                    onClick={() =>
                      removeItem(item.id)
                    }
                    aria-label={`Remove ${item.name || item.title}`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mx-auto text-red-500 hover:bg-red-100 hover:text-red-700 cursor-pointer transition"
                  >
                    <FaTrash className="text-sm sm:text-base" />
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

export default CartTable;