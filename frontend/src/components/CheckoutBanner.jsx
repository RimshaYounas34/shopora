import { Link } from "react-router-dom";

function CheckoutBanner() {
return ( <section className="bg-gradient-to-r from-green-600 to-emerald-500 py-10 sm:py-12 md:py-16">


  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

    {/* ================= HEADING ================= */}

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
      Checkout
    </h1>

    {/* ================= DESCRIPTION ================= */}

    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-green-100 max-w-xl mx-auto leading-relaxed">
      Complete your order securely and quickly.
    </p>

    {/* ================= BREADCRUMB ================= */}

    <div className="mt-5 sm:mt-6 flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base">

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
