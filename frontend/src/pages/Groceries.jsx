
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

import groceryBanner from "../assets/images/grocery-banner.jpg";
import vegetables from "../assets/images/vegetables.jpg";
import fruits from "../assets/images/fruits.jpg";
import snacks from "../assets/images/snacks.jpg";
import drinks from "../assets/images/drinks.jpg";

import {
  FaArrowRight,
  FaStar,
  FaShoppingBasket,
} from "react-icons/fa";

function Groceries() {
  const { addToCart } = useCart();

  const products = [
    {
      id: "grocery-1",
      name: "Fresh Vegetables",
      title: "Fresh Vegetables",
      price: 15,
      oldPrice: 20,
      rating: "4.8",
      image: vegetables,
    },
    {
      id: "grocery-2",
      name: "Organic Fruits",
      title: "Organic Fruits",
      price: 20,
      oldPrice: 25,
      rating: "4.9",
      image: fruits,
    },
    {
      id: "grocery-3",
      name: "Healthy Snacks",
      title: "Healthy Snacks",
      price: 10,
      oldPrice: 15,
      rating: "4.7",
      image: snacks,
    },
    {
      id: "grocery-4",
      name: "Cold Drinks",
      title: "Cold Drinks",
      price: 12,
      oldPrice: 16,
      rating: "4.6",
      image: drinks,
    },
  ];

  // Add Product To Cart
  const handleAddToCart = (product) => {
    const cartProduct = {
      ...product,
      id: product.id,
      title: product.title || product.name,
      price: Number(product.price),
      oldPrice: Number(product.oldPrice),
      quantity: 1,
    };

    addToCart(cartProduct);

    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <>
      <Navbar />

      {/* ================= PREMIUM BANNER ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-green-50 via-white to-yellow-50 border-b">
        {/* Decorative Circles */}
        <div className="absolute -top-24 -left-24 w-56 sm:w-72 h-56 sm:h-72 bg-green-200/40 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-24 -right-24 w-56 sm:w-72 h-56 sm:h-72 bg-yellow-200/40 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center py-12 sm:py-16 lg:py-8 gap-10 lg:gap-12">

            {/* Left Content */}

            <div className="text-center lg:text-left">

              <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-xs sm:text-sm">
                🛒 Fresh Grocery Store
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Fresh &{" "}
                <span className="text-green-600">
                  Healthy
                </span>

                <br />

                Groceries
              </h1>

              <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
                Shop fresh vegetables, fruits, snacks and daily essentials
                delivered with premium quality.
              </p>

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

                  <span className="mx-2">
                    /
                  </span>

                  <span className="text-green-600 font-semibold">
                    Groceries
                  </span>

                </div>

              </div>
            </div>

            {/* Right Image */}

            <div className="flex justify-center lg:justify-end">

              <div className="w-full max-w-[360px] h-64 sm:h-80 md:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-white">

                <img
                  src={groceryBanner}
                  alt="Grocery Collection"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="py-12 sm:py-16 lg:py-20 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}

          <div className="text-center mb-10 sm:mb-12">

            <span className="text-green-600 font-semibold uppercase tracking-widest text-xs sm:text-sm">
              Grocery Collection
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Fresh Daily Essentials
            </h2>

            <p className="text-gray-500 mt-4 text-sm sm:text-base">
              Quality groceries delivered at the best prices.
            </p>

          </div>

          {/* Product Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >

                {/* Product Image */}

                <div className="h-56 sm:h-64 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />

                </div>

                {/* Product Details */}

                <div className="p-4 sm:p-6">

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                    {product.name}
                  </h3>

                  {/* Rating */}

                  <div className="flex items-center gap-2 mt-3 text-yellow-400">

                    <div className="flex gap-0.5">
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

                  {/* Price + Cart */}

                  <div className="flex justify-between items-center mt-5">

                    <span className="text-green-600 font-bold text-lg sm:text-xl">
                      ${product.price}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition"
                    >
                      <FaShoppingBasket />
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

export default Groceries;
