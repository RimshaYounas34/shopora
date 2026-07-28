
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaLaptop,
  FaTshirt,
  FaCouch,
  FaMobileAlt,
  FaGamepad,
  FaShoppingBag,
  FaGem,
  FaBasketballBall,
  FaArrowRight,
} from "react-icons/fa";

function Categories() {
  const categories = [
    {
      icon: <FaLaptop />,
      title: "Electronics",
      items: "120 Products",
      path: "/electronics",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FaTshirt />,
      title: "Fashion",
      items: "85 Products",
      path: "/fashion",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <FaCouch />,
      title: "Furniture",
      items: "42 Products",
      path: "/furniture",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobiles",
      items: "76 Products",
      path: "/mobiles",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaGamepad />,
      title: "Gaming",
      items: "39 Products",
      path: "/gaming",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FaShoppingBag />,
      title: "Bags",
      items: "58 Products",
      path: "/bags",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <FaGem />,
      title: "Jewellery",
      items: "31 Products",
      path: "/jewellery",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <FaBasketballBall />,
      title: "Sports",
      items: "65 Products",
      path: "/sports",
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ================= PREMIUM BANNER ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-white to-green-50 border-b">

        {/* Background Decorations */}
        <div className="absolute -top-20 -left-20 sm:-top-24 sm:-left-24 w-48 h-48 sm:w-72 sm:h-72 bg-green-200/30 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-24 w-48 h-48 sm:w-72 sm:h-72 bg-orange-200/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 py-10 sm:py-12 lg:py-8">

            {/* ================= LEFT ================= */}

            <div className="text-center lg:text-left">

              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-semibold">
                📂 Shop By Category
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Explore Our
                <span className="text-green-600"> Categories</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-lg mx-auto lg:mx-0 leading-7">
                Browse thousands of quality products from every category with
                exciting offers and premium collections.
              </p>

              {/* Button + Breadcrumb */}

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">

                <Link
                  to="/shop"
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                >
                  Shop Now
                  <FaArrowRight className="text-sm" />
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
                    Categories
                  </span>

                </div>

              </div>

            </div>


            {/* ================= RIGHT ICONS ================= */}

            <div className="flex justify-center lg:justify-end">

              <div className="grid grid-cols-3 gap-3 sm:gap-4">

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl sm:text-3xl text-blue-600 hover:-translate-y-2 transition">
                  <FaLaptop />
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl sm:text-3xl text-pink-600 hover:-translate-y-2 transition">
                  <FaTshirt />
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl sm:text-3xl text-green-600 hover:-translate-y-2 transition">
                  <FaMobileAlt />
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl sm:text-3xl text-orange-600 hover:-translate-y-2 transition">
                  <FaCouch />
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl sm:text-3xl text-purple-600 hover:-translate-y-2 transition">
                  <FaGamepad />
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl sm:text-3xl text-yellow-500 hover:-translate-y-2 transition">
                  <FaShoppingBag />
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES SECTION ================= */}

      <section className="py-12 sm:py-16 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Heading */}

          <div className="text-center mb-10 sm:mb-14">

            <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
              Shop By Category
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gray-800">
              Browse Top Categories
            </h2>

            <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
              Discover thousands of quality products from your favorite
              categories with the best prices and exclusive offers.
            </p>

          </div>


          {/* Categories Grid */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">

            {categories.map((item, index) => (

              <Link
                key={index}
                to={item.path}
                className="group relative bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >

                {/* Background Hover Effect */}

                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">

                  {/* Icon */}

                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl ${item.color} group-hover:scale-110 transition duration-300`}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}

                  <h3 className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl font-bold text-gray-800 group-hover:text-green-600 transition">
                    {item.title}
                  </h3>

                  {/* Products */}

                  <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-2">
                    {item.items}
                  </p>

                  {/* Explore */}

                  <span className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-sm sm:text-base text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                    Explore
                    <FaArrowRight className="text-xs sm:text-sm" />
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* ================= NEWSLETTER ================= */}

      <section className="bg-gradient-to-r from-green-600 to-emerald-500 py-12 sm:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

            {/* Newsletter Text */}

            <div className="text-center lg:text-left">

              <span className="text-green-100 uppercase tracking-widest text-xs sm:text-sm font-semibold">
                Newsletter
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Subscribe To Our Newsletter
              </h2>

              <p className="text-sm sm:text-base text-green-100 mt-3 max-w-lg leading-6">
                Get the latest offers, exclusive discounts, and new arrivals
                delivered straight to your inbox.
              </p>

            </div>


            {/* Newsletter Form */}

            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 sm:gap-0">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-72 lg:w-96 h-14 px-5 rounded-xl sm:rounded-l-xl sm:rounded-r-none outline-none text-gray-700"
              />

              <button className="h-14 bg-gray-900 hover:bg-black text-white px-8 rounded-xl sm:rounded-r-xl sm:rounded-l-none transition duration-300 font-semibold">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <Footer />

    </>
  );
}

export default Categories;
