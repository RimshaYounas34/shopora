import { Link, useParams } from "react-router-dom";
import { FaCheckCircle, FaShoppingBag } from "react-icons/fa";

function OrderSuccess() {
  const { orderId } = useParams();

  return (
    <>
      {/* ================= SUCCESS SECTION ================= */}

      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16">

        <div className="w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 text-center">

          {/* Success Icon */}

          <div className="flex justify-center mb-5 sm:mb-6">

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-100 flex items-center justify-center">

              <FaCheckCircle className="text-green-600 text-5xl sm:text-6xl" />

            </div>

          </div>


          {/* Heading */}

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">

            Order Placed Successfully! 🎉

          </h1>


          {/* Message */}

          <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-4 sm:mt-5 leading-7 sm:leading-relaxed max-w-xl mx-auto">

            Thank you for your order. Your order has been successfully placed
            and will be processed shortly.

          </p>


          {/* Order ID */}

          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 mt-6 sm:mt-8">

            <p className="text-gray-500 text-xs sm:text-sm">

              Your Order ID

            </p>

            <p className="text-lg sm:text-xl font-bold text-green-600 mt-2 break-all">

              {orderId}

            </p>

          </div>


          {/* Buttons */}

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">

            <Link
              to="/"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-xl border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold transition text-sm sm:text-base"
            >
              Back To Home
            </Link>


            <Link
              to="/shop"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition flex items-center justify-center gap-2 text-sm sm:text-base"
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