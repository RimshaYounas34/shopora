import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";

function CartSummary() {
  const { subtotal } = useCart();

  const shipping = subtotal > 0 ? 10 : 0;
  const discount = 0;

  const total = subtotal + shipping - discount;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 md:p-8 lg:sticky lg:top-24">

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
        Cart Summary
      </h2>

      {/* Subtotal */}
      <div className="flex justify-between items-center py-3 sm:py-4 border-b">

        <span className="text-gray-600 text-sm sm:text-base">
          Subtotal
        </span>

        <span className="font-semibold text-sm sm:text-base">
          ${subtotal.toFixed(2)}
        </span>

      </div>

      {/* Shipping */}
      <div className="flex justify-between items-center py-3 sm:py-4 border-b">

        <span className="text-gray-600 text-sm sm:text-base">
          Shipping
        </span>

        <span className="font-semibold text-sm sm:text-base">
          ${shipping.toFixed(2)}
        </span>

      </div>

      {/* Discount */}
      <div className="flex justify-between items-center py-3 sm:py-4 border-b">

        <span className="text-gray-600 text-sm sm:text-base">
          Discount
        </span>

        <span className="text-green-600 font-semibold text-sm sm:text-base">
          -${discount.toFixed(2)}
        </span>

      </div>

      {/* Total */}
      <div className="flex justify-between items-center py-5 sm:py-6">

        <span className="text-lg sm:text-xl font-bold">
          Total
        </span>

        <span className="text-xl sm:text-2xl font-bold text-green-600">
          ${total.toFixed(2)}
        </span>

      </div>

      {/* Coupon */}
      <div className="mt-4 sm:mt-6">

        <input
          type="text"
          placeholder="Coupon Code"
          className="w-full h-11 sm:h-12 border border-gray-200 rounded-xl px-4 text-sm sm:text-base outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
        />

        <button
          type="button"
          className="w-full h-11 sm:h-12 mt-3 sm:mt-4 rounded-xl bg-gray-100 hover:bg-gray-200 font-semibold text-sm sm:text-base transition cursor-pointer"
        >
          Apply Coupon
        </button>

      </div>

      {/* Checkout */}
      <Link
        to="/checkout"
        className={`w-full h-12 sm:h-14 mt-6 sm:mt-8 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm sm:text-base transition flex items-center justify-center ${
          subtotal === 0
            ? "pointer-events-none opacity-50"
            : ""
        }`}
      >
        Proceed To Checkout
      </Link>

      {/* Continue Shopping */}
      <Link
        to="/shop"
        className="w-full h-12 sm:h-14 mt-3 sm:mt-4 rounded-xl border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold text-sm sm:text-base transition flex items-center justify-center"
      >
        Continue Shopping
      </Link>

    </div>
  );
}

export default CartSummary;