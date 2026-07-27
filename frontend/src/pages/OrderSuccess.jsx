import { Link, useParams } from "react-router-dom";
import { FaCheckCircle, FaShoppingBag } from "react-icons/fa";

function OrderSuccess() {
  const { orderId } = useParams();

  return (
    <>
      {/* ================= SUCCESS SECTION ================= */}

      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">

        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-10 text-center">

          {/* Success Icon */}

          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
              <FaCheckCircle className="text-green-600 text-6xl" />
            </div>
          </div>


          {/* Heading */}

          <h1 className="text-4xl font-bold text-gray-800">
            Order Placed Successfully! 🎉
          </h1>


          {/* Message */}

          <p className="text-gray-500 text-lg mt-5 leading-relaxed">
            Thank you for your order. Your order has been successfully placed
            and will be processed shortly.
          </p>


          {/* Order ID */}

          <div className="bg-gray-50 rounded-2xl p-5 mt-8">

            <p className="text-gray-500 text-sm">
              Your Order ID
            </p>

            <p className="text-xl font-bold text-green-600 mt-2">
              {orderId}
            </p>

          </div>


          {/* Buttons */}

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <Link
              to="/"
              className="px-7 py-3 rounded-xl border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold transition"
            >
              Back To Home
            </Link>


            <Link
              to="/shop"
              className="px-7 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition flex items-center justify-center gap-2"
            >
              <FaShoppingBag />
              Continue Shopping
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}

export default OrderSuccess;