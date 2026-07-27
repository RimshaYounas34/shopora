import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutBanner from "../components/CheckoutBanner";
import BillingForm from "../components/BillingForm";
import OrderSummary from "../components/OrderSummary";
import PaymentMethod from "../components/PaymentMethod";

function Checkout() {
  // Billing Form Data
  const [billingData, setBillingData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    country: "Pakistan",
    phone: "",
    email: "",
    notes: "",
  });

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= CHECKOUT BANNER ================= */}

      <CheckoutBanner />


      {/* ================= CHECKOUT SECTION ================= */}

      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* ================= BILLING FORM ================= */}

            <div className="lg:col-span-2">

              <BillingForm
                onBillingChange={setBillingData}
              />

            </div>


            {/* ================= RIGHT SIDE ================= */}

            <div>

              {/* Order Summary */}

              <OrderSummary />


              {/* Payment Method */}

              <PaymentMethod
                billingData={billingData}
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <Footer />
    </>
  );
}

export default Checkout;