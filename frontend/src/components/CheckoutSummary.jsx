import { Link } from "react-router-dom";

function CheckoutSummary() {
return ( <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:sticky lg:top-6">

  {/* ================= HEADING ================= */}

  <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
    Order Summary
  </h2>

  {/* ================= PRODUCTS ================= */}

  <div className="space-y-5">

    {/* Product 1 */}

    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <h4 className="font-semibold text-sm sm:text-base text-gray-800">
          Wireless Headphones
        </h4>

        <p className="text-sm text-gray-500 mt-1">
          Qty: 1
        </p>
      </div>

      <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
        $59.99
      </span>
    </div>

    {/* Product 2 */}

    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <h4 className="font-semibold text-sm sm:text-base text-gray-800">
          Smart Watch
        </h4>

        <p className="text-sm text-gray-500 mt-1">
          Qty: 1
        </p>
      </div>

      <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
        $149.99
      </span>
    </div>

    {/* Product 3 */}

    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <h4 className="font-semibold text-sm sm:text-base text-gray-800">
          Travel Backpack
        </h4>

        <p className="text-sm text-gray-500 mt-1">
          Qty: 2
        </p>
      </div>

      <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
        $79.98
      </span>
    </div>

  </div>

  <hr className="my-5 sm:my-6" />

  {/* ================= TOTALS ================= */}

  <div className="space-y-4">

    <div className="flex justify-between gap-4 text-sm sm:text-base">
      <span>Subtotal</span>
      <span className="font-medium whitespace-nowrap">
        $289.96
      </span>
    </div>

    <div className="flex justify-between gap-4 text-sm sm:text-base">
      <span>Shipping</span>

      <span className="text-green-600 font-medium">
        Free
      </span>
    </div>

    <div className="flex justify-between gap-4 text-sm sm:text-base">
      <span>Tax</span>

      <span className="font-medium whitespace-nowrap">
        $15.00
      </span>
    </div>

    <hr />

    <div className="flex justify-between items-center gap-4 text-lg sm:text-xl font-bold">
      <span>Total</span>

      <span className="text-green-600 whitespace-nowrap">
        $304.96
      </span>
    </div>

  </div>

  {/* ================= PLACE ORDER ================= */}

  <button
    type="button"
    className="w-full mt-7 sm:mt-8 bg-green-600 hover:bg-green-700 text-white py-3.5 sm:py-4 rounded-xl font-semibold transition duration-300"
  >
    Place Order
  </button>

  {/* ================= BACK TO CART ================= */}

  <Link
    to="/cart"
    className="block text-center mt-4 text-sm sm:text-base text-green-600 hover:underline"
  >
    ← Back to Cart
  </Link>

</div>


);
}

export default CheckoutSummary;
