import { Link } from "react-router-dom";

function WishlistBanner() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-500 py-16">

      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        <h1 className="text-5xl font-bold">
          My Wishlist
        </h1>

        <p className="mt-4 text-lg text-green-100">
          Save your favorite products and shop them anytime.
        </p>

        <div className="mt-6 flex justify-center items-center gap-3 text-sm">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <span>/</span>

          <span className="font-semibold text-yellow-300">
            Wishlist
          </span>

        </div>

      </div>

    </section>
  );
}

export default WishlistBanner;