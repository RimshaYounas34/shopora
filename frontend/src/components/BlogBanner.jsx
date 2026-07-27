import { Link } from "react-router-dom";
import { FaArrowRight, FaPenNib } from "react-icons/fa";

function BlogBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-white to-green-50 border-b">

      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 items-center py-5">

          {/* Left Side */}

          <div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
              <FaPenNib />
              Latest Articles
            </span>

            <h1 className="mt-4 text-5xl font-extrabold text-gray-900">
              Our
              <span className="text-green-600"> Blog</span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-lg">
              Read shopping guides, product reviews, fashion trends and
              expert tips to help you make smarter buying decisions.
            </p>

            <div className="flex items-center gap-4 mt-6">

              <Link
                to="/shop"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
              >
                Explore Blog
                <FaArrowRight />
              </Link>

              <div className="text-sm text-gray-500">

                <Link
                  to="/"
                  className="hover:text-green-600 transition"
                >
                  Home
                </Link>

                <span className="mx-2">/</span>

                <span className="font-semibold text-green-600">
                  Blog
                </span>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-end">

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
                <h3 className="font-bold text-gray-800">
                  Shopping Guide
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Tips for smarter shopping.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
                <h3 className="font-bold text-gray-800">
                  Product Reviews
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Honest reviews before buying.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
                <h3 className="font-bold text-gray-800">
                  Fashion Trends
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Discover what's trending now.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
                <h3 className="font-bold text-gray-800">
                  Tech News
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Latest gadgets & updates.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BlogBanner;