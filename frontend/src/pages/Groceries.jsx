
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
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-200/40 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 items-center py-8 gap-10">

            {/* Left Content */}

            <div>
              <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                🛒 Fresh Grocery Store
              </span>

              <h1 className="mt-5 text-5xl md:text-6xl font-extrabold text-gray-900">
                Fresh &{" "}
                <span className="text-green-600">
                  Healthy
                </span>

                <br />

                Groceries
              </h1>

              <p className="mt-5 text-gray-600 text-lg max-w-lg">
                Shop fresh vegetables, fruits, snacks and daily essentials
                delivered with premium quality.
              </p>

              <div className="flex items-center gap-5 mt-7">

                <Link
                  to="/shop"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
                >
                  Shop Now
                  <FaArrowRight />
                </Link>

                <div className="text-gray-500">
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

            <div className="flex justify-end">
              <div className="w-[360px] h-[360px] rounded-3xl overflow-hidden shadow-xl bg-white">
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

      <section className="py-20 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}

          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold uppercase tracking-widest">
              Grocery Collection
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Fresh Daily Essentials
            </h2>

            <p className="text-gray-500 mt-4">
              Quality groceries delivered at the best prices.
            </p>
          </div>

          {/* Product Grid */}

          <div className="grid md:grid-cols-4 gap-7">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >

                {/* Product Image */}

                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Product Details */}

                <div className="p-6">

                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>

                  {/* Rating */}

                  <div className="flex items-center gap-2 mt-3 text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <span className="text-gray-500 text-sm">
                      {product.rating}
                    </span>
                  </div>

                  {/* Price + Cart */}

                  <div className="flex justify-between items-center mt-5">

                    <span className="text-green-600 font-bold text-xl">
                      ${product.price}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="w-11 h-11 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition"
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
