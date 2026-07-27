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
    <div className="bg-white rounded-3xl shadow-sm p-8">

      {/* Heading */}

      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Order Summary
      </h2>


      {/* Cart Products */}

      {cartItems.length === 0 ? (

        <div className="text-center py-8">

          <div className="text-5xl mb-4">
            🛒
          </div>

          <h3 className="text-lg font-semibold text-gray-800">
            Your Cart is Empty
          </h3>

          <p className="text-gray-500 mt-2">
            Add some products before placing an order.
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-5"
            >

              {/* Product Image */}

              <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">

                <img
                  src={item.image}
                  alt={item.name || item.title}
                  className="w-full h-full object-contain p-2"
                />

              </div>


              {/* Product Details */}

              <div className="flex-1 min-w-0">

                <h4 className="font-semibold text-gray-800 truncate">
                  {item.name || item.title}
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  Qty: {item.quantity}
                </p>

                <p className="text-gray-500 text-sm">
                  ${Number(item.price).toFixed(2)} each
                </p>

              </div>


              {/* Product Total */}

              <div className="text-right">

                <p className="font-bold text-green-600">
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

        <div className="mt-8 space-y-4">

          {/* Subtotal */}

          <div className="flex justify-between text-gray-600">

            <span>
              Subtotal
            </span>

            <span className="font-semibold text-gray-800">
              ${subtotal.toFixed(2)}
            </span>

          </div>


          {/* Shipping */}

          <div className="flex justify-between text-gray-600">

            <span>
              Shipping
            </span>

            <span className="font-semibold text-gray-800">
              ${shipping.toFixed(2)}
            </span>

          </div>


          {/* Discount */}

          <div className="flex justify-between text-gray-600">

            <span>
              Discount
            </span>

            <span className="font-semibold text-green-600">
              -${discount.toFixed(2)}
            </span>

          </div>


          {/* Total */}

          <div className="flex justify-between items-center border-t pt-5 mt-5">

            <span className="text-xl font-bold text-gray-800">
              Total
            </span>

            <span className="text-2xl font-bold text-green-600">
              ${total.toFixed(2)}
            </span>

          </div>

        </div>

      )}

    </div>
  );
}

export default OrderSummary;