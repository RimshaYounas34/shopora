
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

import beautyBanner from "../assets/images/beauty-banner.jpg";
import cream from "../assets/images/cream.jpg";
import makeup from "../assets/images/makeup.jpg";
import skincare from "../assets/images/skincare.jpg";
import perfume from "../assets/images/perfume.jpg";

import { FaArrowRight, FaStar, FaShoppingBag } from "react-icons/fa";

function Beauty() {
  // Cart Context
  const { addToCart } = useCart();

  // ================= PRODUCTS =================

  const products = [
    {
      id: "beauty-1",
      name: "Luxury Face Cream",
      title: "Luxury Face Cream",
      price: 25,
      rating: "4.8",
      image: cream,
    },
    {
      id: "beauty-2",
      name: "Premium Makeup Kit",
      title: "Premium Makeup Kit",
      price: 45,
      rating: "4.9",
      image: makeup,
    },
    {
      id: "beauty-3",
      name: "Skin Care Collection",
      title: "Skin Care Collection",
      price: 35,
      rating: "4.7",
      image: skincare,
    },
    {
      id: "beauty-4",
      name: "Elegant Perfume",
      title: "Elegant Perfume",
      price: 30,
      rating: "4.6",
      image: perfume,
    },
  ];

  // ================= ADD TO CART =================

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      title: product.title || product.name,
      price: Number(product.price),
      quantity: 1,
    });

    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= PREMIUM BEAUTY BANNER ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-pink-50 via-white to-green-50 border-b">
        
        {/* Background Blur */}

        <div className="absolute -top-20 -left-20 sm:-top-24 sm:-left-24 w-48 h-48 sm:w-72 sm:h-72 bg-pink-200/40 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-24 w-48 h-48 sm:w-72 sm:h-72 bg-green-200/40 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 items-center py-10 sm:py-14 lg:py-8 gap-10 lg:gap-16">

            {/* Left Content */}

            <div className="text-center lg:text-left">

              <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-600 font-semibold text-xs sm:text-sm">
                ✨ Premium Beauty Store
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Discover Your
                <span className="text-green-500 block sm:inline">
                  {" "}Natural Beauty
                </span>
              </h1>

              <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Explore skincare, makeup and beauty essentials crafted with
                premium quality products for your daily glow.
              </p>

              {/* Buttons / Breadcrumb */}

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mt-7">

                <Link
                  to="/shop"
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                >
                  Shop Now
                  <FaArrowRight />
                </Link>

                <div className="text-gray-500 text-sm sm:text-base">
                  <Link
                    to="/"
                    className="hover:text-green-600"
                  >
                    Home
                  </Link>

                  <span className="mx-2">/</span>

                  <span className="text-green-600 font-semibold">
                    Beauty
                  </span>
                </div>

              </div>

            </div>

            {/* Banner Image */}

            <div className="flex justify-center lg:justify-end">

              <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-xl p-3 sm:p-5">

                <img
                  src={beautyBanner}
                  alt="Beauty Collection"
                  className="w-full aspect-square object-cover rounded-2xl hover:scale-105 transition duration-500"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PRODUCTS SECTION ================= */}

      <section className="py-14 sm:py-16 lg:py-20 bg-[#f8faf8]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}

          <div className="text-center mb-10 sm:mb-12">

            <span className="text-green-500 font-semibold uppercase tracking-widest text-xs sm:text-sm">
              Beauty Collection
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Featured Beauty Products
            </h2>

            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Choose premium products for your skincare and beauty routine.
            </p>

          </div>

          {/* ================= PRODUCT GRID ================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">

            {products.map((product) => (

              <div
                key={product.id}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

                {/* Product Image */}

                <div className="h-60 sm:h-64 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-110
                      transition
                      duration-500
                    "
                  />

                </div>

                {/* Product Details */}

                <div className="p-5 sm:p-6">

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>

                  {/* Rating */}

                  <div className="flex items-center gap-2 mt-3">

                    <div className="flex text-yellow-400 text-sm sm:text-base">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <span className="text-gray-500 text-sm">
                      {product.rating}
                    </span>

                  </div>

                  {/* Price + Add To Cart */}

                  <div className="flex justify-between items-center mt-5">

                    <p className="text-green-600 font-bold text-xl">
                      ${product.price}
                    </p>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-green-600
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-green-700
                        transition
                        cursor-pointer
                      "
                    >
                      <FaShoppingBag />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

    </>
  );
}

export default Beauty;