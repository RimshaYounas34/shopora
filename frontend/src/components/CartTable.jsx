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

  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-12 text-center">

        <div className="text-5xl mb-5">
          🛒
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          Your Cart is Empty
        </h2>

        <p className="text-gray-500 mt-3">
          Add some products to your cart and they will appear here.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">

      <table className="w-full min-w-[700px]">

        <thead className="bg-green-600 text-white">

          <tr>

            <th className="text-left p-5">
              Product
            </th>

            <th className="text-center p-5">
              Price
            </th>

            <th className="text-center p-5">
              Quantity
            </th>

            <th className="text-center p-5">
              Total
            </th>

            <th className="text-center p-5">
              Remove
            </th>

          </tr>

        </thead>

        <tbody>

          {cartItems.map((item) => (

            <tr
              key={item.id}
              className="border-b last:border-b-0"
            >

              {/* Product */}

              <td className="p-5">

                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name || item.title}
                    className="w-20 h-20 object-contain"
                  />

                  <h3 className="font-semibold text-gray-800">
                    {item.name || item.title}
                  </h3>

                </div>

              </td>

              {/* Price */}

              <td className="text-center font-semibold">
                ${Number(item.price).toFixed(2)}
              </td>

              {/* Quantity */}

              <td>

                <div className="flex justify-center">

                  <div className="flex items-center border rounded-xl overflow-hidden">

                    <button
                      type="button"
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                      className="w-10 h-10 hover:bg-gray-100 cursor-pointer"
                    >
                      <FaMinus className="mx-auto" />
                    </button>

                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQty(item.id)
                      }
                      className="w-10 h-10 hover:bg-gray-100 cursor-pointer"
                    >
                      <FaPlus className="mx-auto" />
                    </button>

                  </div>

                </div>

              </td>

              {/* Total */}

              <td className="text-center font-bold text-green-600">
                $
                {(
                  Number(item.price) *
                  item.quantity
                ).toFixed(2)}
              </td>

              {/* Remove */}

              <td className="text-center">

                <button
                  type="button"
                  onClick={() =>
                    removeItem(item.id)
                  }
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                >
                  <FaTrash />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CartTable;