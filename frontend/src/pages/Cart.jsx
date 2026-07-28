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
      <section className="bg-gray-50 py-10 sm:py-12 md:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Cart Table */}
            <div className="lg:col-span-2 min-w-0">

              <CartTable />

            </div>

            {/* Cart Summary */}
            <div className="w-full">

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