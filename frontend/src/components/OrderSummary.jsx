import { useCart } from "./context/CartContext";

function OrderSummary() {
  const { cartItems, subtotal } = useCart();

  // Shipping charges
  const shipping = subtotal > 0 ? 10 : 0;

  // Discount
  const discount = 0;

  // Final total
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-5 sm:p-6 md:p-8">

      {/* Heading */}

      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
        Order Summary
      </h2>


      {/* Cart Products */}

      {cartItems.length === 0 ? (

        <div className="text-center py-6 sm:py-8">

          <div className="text-4xl sm:text-5xl mb-4">
            🛒
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Your Cart is Empty
          </h3>

          <p className="text-gray-500 text-sm sm:text-base mt-2 leading-6">
            Add some products before placing an order.
          </p>

        </div>

      ) : (

        <div className="space-y-4 sm:space-y-5">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex items-center gap-3 sm:gap-4 border-b pb-4 sm:pb-5"
            >

              {/* Product Image */}

              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">

                <img
                  src={item.image}
                  alt={item.name || item.title}
                  className="w-full h-full object-contain p-1.5 sm:p-2"
                />

              </div>


              {/* Product Details */}

              <div className="flex-1 min-w-0">

                <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                  {item.name || item.title}
                </h4>

                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Qty: {item.quantity}
                </p>

                <p className="text-gray-500 text-xs sm:text-sm">
                  ${Number(item.price).toFixed(2)} each
                </p>

              </div>


              {/* Product Total */}

              <div className="text-right flex-shrink-0">

                <p className="font-bold text-green-600 text-sm sm:text-base">
                  $
                  {(
                    Number(item.price) * item.quantity
                  ).toFixed(2)}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}


      {/* Price Details */}

      {cartItems.length > 0 && (

        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">

          {/* Subtotal */}

          <div className="flex justify-between items-center gap-4 text-sm sm:text-base text-gray-600">

            <span>
              Subtotal
            </span>

            <span className="font-semibold text-gray-800">
              ${subtotal.toFixed(2)}
            </span>

          </div>


          {/* Shipping */}

          <div className="flex justify-between items-center gap-4 text-sm sm:text-base text-gray-600">

            <span>
              Shipping
            </span>

            <span className="font-semibold text-gray-800">
              ${shipping.toFixed(2)}
            </span>

          </div>


          {/* Discount */}

          <div className="flex justify-between items-center gap-4 text-sm sm:text-base text-gray-600">

            <span>
              Discount
            </span>

            <span className="font-semibold text-green-600">
              -${discount.toFixed(2)}
            </span>

          </div>


          {/* Total */}

          <div className="flex justify-between items-center gap-4 border-t pt-4 sm:pt-5 mt-4 sm:mt-5">

            <span className="text-lg sm:text-xl font-bold text-gray-800">
              Total
            </span>

            <span className="text-xl sm:text-2xl font-bold text-green-600">
              ${total.toFixed(2)}
            </span>

          </div>

        </div>

      )}

    </div>
  );
}

export default OrderSummary;