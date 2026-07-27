import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartBanner from "../components/CartBanner";
import CartTable from "../components/CartTable";
import CartSummary from "../components/CartSummary";

function Cart() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <CartBanner />

      {/* Cart Section */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cart Table */}

            <div className="lg:col-span-2">

              <CartTable />

            </div>

            {/* Cart Summary */}

            <div>

              <CartSummary />

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <Footer />

    </>
  );
}

export default Cart;