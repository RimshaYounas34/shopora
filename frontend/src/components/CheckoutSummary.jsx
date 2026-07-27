import { Link } from "react-router-dom";

function CheckoutSummary() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">

      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      {/* Products */}

      <div className="space-y-5">

        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold">
              Wireless Headphones
            </h4>

            <p className="text-sm text-gray-500">
              Qty: 1
            </p>
          </div>

          <span className="font-semibold">
            $59.99
          </span>
        </div>

        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold">
              Smart Watch
            </h4>

            <p className="text-sm text-gray-500">
              Qty: 1
            </p>
          </div>

          <span className="font-semibold">
            $149.99
          </span>
        </div>

        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold">
              Travel Backpack
            </h4>

            <p className="text-sm text-gray-500">
              Qty: 2
            </p>
          </div>

          <span className="font-semibold">
            $79.98
          </span>
        </div>

      </div>

      <hr className="my-6" />

      {/* Totals */}

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$289.96</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-600">
            Free
          </span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>$15.00</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span className="text-green-600">
            $304.96
          </span>
        </div>

      </div>

      {/* Place Order */}

      <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition">
        Place Order
      </button>

      <Link
        to="/cart"
        className="block text-center mt-4 text-green-600 hover:underline"
      >
        ← Back to Cart
      </Link>

    </div>
  );
}

export default CheckoutSummary;