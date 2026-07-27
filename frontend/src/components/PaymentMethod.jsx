import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useCart } from "./context/CartContext";

function PaymentMethod({ billingData }) {
  const navigate = useNavigate();

  const {
    cartItems,
    subtotal,
    clearCart,
  } = useCart();

  const [payment, setPayment] = useState("cod");
  const [loading, setLoading] = useState(false);

  const shipping = subtotal > 0 ? 10 : 0;
  const discount = 0;
  const total = subtotal + shipping - discount;


  // ================= PLACE ORDER =================

  const handlePlaceOrder = async () => {

    // Check Cart

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }


    // Check Billing Details

    if (
      !billingData?.firstName ||
      !billingData?.lastName ||
      !billingData?.address ||
      !billingData?.city ||
      !billingData?.phone ||
      !billingData?.email
    ) {
      toast.error("Please complete all required billing details.");
      return;
    }


    try {

      setLoading(true);


      // ================= ORDER DATA =================

      const orderData = {

        customer: {
          firstName: billingData.firstName,
          lastName: billingData.lastName,
          company: billingData.company || "",
          address: billingData.address,
          city: billingData.city,
          country: billingData.country || "Pakistan",
          phone: billingData.phone,
          email: billingData.email,
          notes: billingData.notes || "",
        },


        products: cartItems.map((item) => ({
          id: item.id,
          name: item.name || item.title,
          image: item.image || "",
          price: Number(
            String(item.price).replace("$", "")
          ),
          quantity: item.quantity,
        })),


        paymentMethod: payment,

        subtotal: Number(subtotal),

        shipping: Number(shipping),

        discount: Number(discount),

        total: Number(total),

      };


      // ================= SEND ORDER TO BACKEND =================

      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(orderData),
        }
      );


      const data = await response.json();


      // ================= ERROR =================

      if (!response.ok) {

        toast.error(
          data.message ||
          "Failed to place order."
        );

        return;
      }


      // ================= SUCCESS =================

      toast.success(
        "Your order has been placed successfully! 🎉"
      );


      // Clear Cart

      clearCart();


      // Go To Order Success Page

      setTimeout(() => {

        navigate(
          `/order-success/${data.order.orderId}`
        );

      }, 1000);


    } catch (error) {

      console.error(
        "Place Order Error:",
        error
      );


      toast.error(
        "Unable to place order. Please try again."
      );


    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="bg-white rounded-3xl shadow-sm p-8 mt-8">


      {/* ================= HEADING ================= */}

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Payment Method
      </h2>


      {/* ================= PAYMENT OPTIONS ================= */}

      <div className="space-y-5">


        {/* Cash On Delivery */}

        <label className="flex items-center gap-3 cursor-pointer border border-gray-200 rounded-xl p-4 hover:border-green-500 transition">

          <input
            type="radio"
            name="payment"
            value="cod"
            checked={payment === "cod"}
            onChange={() =>
              setPayment("cod")
            }
            className="accent-green-600"
          />

          <div>

            <p className="font-semibold text-gray-800">
              Cash On Delivery
            </p>

            <p className="text-sm text-gray-500">
              Pay when your order arrives.
            </p>

          </div>

        </label>


        {/* Credit / Debit Card */}

        <label className="flex items-center gap-3 cursor-pointer border border-gray-200 rounded-xl p-4 hover:border-green-500 transition">

          <input
            type="radio"
            name="payment"
            value="card"
            checked={payment === "card"}
            onChange={() =>
              setPayment("card")
            }
            className="accent-green-600"
          />

          <div>

            <p className="font-semibold text-gray-800">
              Credit / Debit Card
            </p>

            <p className="text-sm text-gray-500">
              Pay securely using your card.
            </p>

          </div>

        </label>


        {/* PayPal */}

        <label className="flex items-center gap-3 cursor-pointer border border-gray-200 rounded-xl p-4 hover:border-green-500 transition">

          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={payment === "paypal"}
            onChange={() =>
              setPayment("paypal")
            }
            className="accent-green-600"
          />

          <div>

            <p className="font-semibold text-gray-800">
              PayPal
            </p>

            <p className="text-sm text-gray-500">
              Pay securely with PayPal.
            </p>

          </div>

        </label>


      </div>


      {/* ================= TOTAL ================= */}

      <div className="flex justify-between items-center border-t mt-8 pt-6">

        <span className="text-lg font-bold text-gray-800">
          Order Total
        </span>

        <span className="text-2xl font-bold text-green-600">
          ${total.toFixed(2)}
        </span>

      </div>


      {/* ================= PLACE ORDER ================= */}

      <button
        type="button"
        onClick={handlePlaceOrder}
        disabled={
          cartItems.length === 0 ||
          loading
        }
        className="w-full mt-8 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition"
      >

        {loading
          ? "Placing Order..."
          : "Place Order"
        }

      </button>


    </div>

  );
}

export default PaymentMethod;