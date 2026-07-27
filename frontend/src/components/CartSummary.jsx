import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";

function CartSummary() {
  const { subtotal } = useCart();

  const shipping =
    subtotal > 0 ? 10 : 0;

  const discount = 0;

  const total =
    subtotal + shipping - discount;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 sticky top-24">

      {/* Heading */}

      <h2 className="text-2xl font-bold mb-8">
        Cart Summary
      </h2>

      {/* Subtotal */}

      <div className="flex justify-between py-4 border-b">

        <span className="text-gray-600">
          Subtotal
        </span>

        <span className="font-semibold">
          ${subtotal.toFixed(2)}
        </span>

      </div>

      {/* Shipping */}

      <div className="flex justify-between py-4 border-b">

        <span className="text-gray-600">
          Shipping
        </span>

        <span className="font-semibold">
          ${shipping.toFixed(2)}
        </span>

      </div>

      {/* Discount */}

      <div className="flex justify-between py-4 border-b">

        <span className="text-gray-600">
          Discount
        </span>

        <span className="text-green-600 font-semibold">
          -${discount.toFixed(2)}
        </span>

      </div>

      {/* Total */}

      <div className="flex justify-between py-6">

        <span className="text-xl font-bold">
          Total
        </span>

        <span className="text-2xl font-bold text-green-600">
          ${total.toFixed(2)}
        </span>

      </div>

      {/* Coupon */}

      <div className="mt-6">

        <input
          type="text"
          placeholder="Coupon Code"
          className="w-full h-12 border rounded-xl px-4 outline-none focus:border-green-600"
        />

        <button
          type="button"
          className="w-full h-12 mt-4 rounded-xl bg-gray-100 hover:bg-gray-200 font-semibold transition cursor-pointer"
        >
          Apply Coupon
        </button>

      </div>

      {/* Checkout */}

      <Link
        to="/checkout"
        className={`w-full h-14 mt-8 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition flex items-center justify-center ${
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
        className="w-full h-14 mt-4 rounded-xl border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold transition flex items-center justify-center"
      >
        Continue Shopping
      </Link>

    </div>
  );
}

export default CartSummary;