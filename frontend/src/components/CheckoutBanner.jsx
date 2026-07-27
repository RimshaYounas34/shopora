import { Link } from "react-router-dom";

function CheckoutBanner() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-500 py-16">

      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        <h1 className="text-5xl font-bold">
          Checkout
        </h1>

        <p className="mt-4 text-lg text-green-100">
          Complete your order securely and quickly.
        </p>

        <div className="mt-6 flex justify-center items-center gap-3">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-yellow-300 font-semibold">
            Checkout
          </span>

        </div>

      </div>

    </section>
  );
}

export default CheckoutBanner;