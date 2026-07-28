import { Link } from "react-router-dom";
import { FaArrowRight, FaPenNib } from "react-icons/fa";

function BlogBanner() {
return ( <section className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-white to-green-50 border-b">

  {/* ================= BACKGROUND DECORATIONS ================= */}

  <div className="absolute -top-20 -left-20 sm:-top-24 sm:-left-24 w-48 h-48 sm:w-72 sm:h-72 bg-orange-200/30 rounded-full blur-3xl"></div>

  <div className="absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-24 w-48 h-48 sm:w-72 sm:h-72 bg-green-200/30 rounded-full blur-3xl"></div>


  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 py-8 sm:py-10 md:py-12">


      {/* ================= LEFT SIDE ================= */}

      <div className="text-center lg:text-left">

        {/* Badge */}

        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-semibold">

          <FaPenNib />

          Latest Articles

        </span>


        {/* Heading */}

        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">

          Our
          <span className="text-green-600"> Blog</span>

        </h1>


        {/* Description */}

        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-lg mx-auto lg:mx-0 leading-6 sm:leading-7">

          Read shopping guides, product reviews, fashion trends and
          expert tips to help you make smarter buying decisions.

        </p>


        {/* Button + Breadcrumb */}

        <div className="flex flex-col sm:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 mt-6">

          <Link
            to="/shop"
            className="bg-green-600 hover:bg-green-700 text-white px-5 sm:px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition text-sm sm:text-base"
          >
            Explore Blog
            <FaArrowRight />
          </Link>


          {/* Breadcrumb */}

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


      {/* ================= RIGHT SIDE ================= */}

      <div className="w-full flex justify-center lg:justify-end">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md lg:max-w-lg">


          {/* Shopping Guide */}

          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 hover:-translate-y-1 sm:hover:-translate-y-2 transition duration-300">

            <h3 className="font-bold text-gray-800 text-sm sm:text-base">
              Shopping Guide
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-5">
              Tips for smarter shopping.
            </p>

          </div>


          {/* Product Reviews */}

          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 hover:-translate-y-1 sm:hover:-translate-y-2 transition duration-300">

            <h3 className="font-bold text-gray-800 text-sm sm:text-base">
              Product Reviews
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-5">
              Honest reviews before buying.
            </p>

          </div>


          {/* Fashion Trends */}

          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 hover:-translate-y-1 sm:hover:-translate-y-2 transition duration-300">

            <h3 className="font-bold text-gray-800 text-sm sm:text-base">
              Fashion Trends
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-5">
              Discover what's trending now.
            </p>

          </div>


          {/* Tech News */}

          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 hover:-translate-y-1 sm:hover:-translate-y-2 transition duration-300">

            <h3 className="font-bold text-gray-800 text-sm sm:text-base">
              Tech News
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-5">
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
