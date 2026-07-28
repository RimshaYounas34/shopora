import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

// Electronics Images
import laptop from "../assets/images/electronics/laptop.png";
import headphones from "../assets/images/electronics/headphones.jpg";
import smartwatch from "../assets/images/electronics/smartwatch.jpg";
import speaker from "../assets/images/electronics/speaker.jpg";
import keyboard from "../assets/images/electronics/keyboard.jpg";
import mouse from "../assets/images/electronics/mouse.jpg";
import tablet from "../assets/images/electronics/tablet.jpg";
import phone from "../assets/images/electronics/phone.jpg";
import camera from "../assets/images/electronics/camera.jpg";
import charger from "../assets/images/electronics/charger.jpg";
import powerbank from "../assets/images/electronics/powerbank.jpg";
import monitor from "../assets/images/electronics/monitor.jpg";

// Banner
import electronicsBanner from "../assets/images/electronics/electronics-banner.jpg";

function Electronics() {
  const { addToCart } = useCart();

  // ================= ADD TO CART =================

  const handleAddCart = (product) => {
    addToCart({
      ...product,
      title: product.title || product.name,
      price: Number(product.price),
      oldPrice: Number(product.oldPrice),
      quantity: 1,
    });

    toast.success(`${product.name} added to cart 🛒`);
  };

  // ================= PRODUCTS =================

  const products = [
    {
      id: "electronics-1",
      name: "Premium Laptop",
      title: "Premium Laptop",
      price: 899,
      oldPrice: 999,
      image: laptop,
    },
    {
      id: "electronics-2",
      name: "Wireless Headphones",
      title: "Wireless Headphones",
      price: 129,
      oldPrice: 159,
      image: headphones,
    },
    {
      id: "electronics-3",
      name: "Smart Watch",
      title: "Smart Watch",
      price: 89,
      oldPrice: 119,
      image: smartwatch,
    },
    {
      id: "electronics-4",
      name: "Bluetooth Speaker",
      title: "Bluetooth Speaker",
      price: 59,
      oldPrice: 79,
      image: speaker,
    },
    {
      id: "electronics-5",
      name: "Gaming Keyboard",
      title: "Gaming Keyboard",
      price: 79,
      oldPrice: 99,
      image: keyboard,
    },
    {
      id: "electronics-6",
      name: "Wireless Mouse",
      title: "Wireless Mouse",
      price: 49,
      oldPrice: 65,
      image: mouse,
    },
    {
      id: "electronics-7",
      name: "Tablet",
      title: "Tablet",
      price: 299,
      oldPrice: 349,
      image: tablet,
    },
    {
      id: "electronics-8",
      name: "Smartphone",
      title: "Smartphone",
      price: 599,
      oldPrice: 699,
      image: phone,
    },
    {
      id: "electronics-9",
      name: "Digital Camera",
      title: "Digital Camera",
      price: 449,
      oldPrice: 499,
      image: camera,
    },
    {
      id: "electronics-10",
      name: "USB-C Charger",
      title: "USB-C Charger",
      price: 29,
      oldPrice: 39,
      image: charger,
    },
    {
      id: "electronics-11",
      name: "Power Bank",
      title: "Power Bank",
      price: 39,
      oldPrice: 49,
      image: powerbank,
    },
    {
      id: "electronics-12",
      name: "LED Monitor",
      title: "LED Monitor",
      price: 249,
      oldPrice: 299,
      image: monitor,
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= CATEGORY HERO ================= */}

      <section className="bg-gradient-to-r from-blue-50 via-white to-green-50 py-12 sm:py-16 lg:py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

            {/* Left Content */}

            <div className="w-full lg:w-1/2 text-center lg:text-left">

              <p className="text-green-600 font-semibold uppercase tracking-wider text-sm sm:text-base">
                Home / Electronics
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mt-3 sm:mt-4">
                Electronics
              </h1>

              <p className="text-gray-500 text-base sm:text-lg mt-4 sm:mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover latest electronics, smart devices and accessories
                designed to make your everyday life easier.
              </p>

              <Link
                to="/shop"
                className="mt-6 sm:mt-7 inline-flex bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition"
              >
                Shop Electronics
              </Link>

            </div>

            {/* Right Banner Image */}

            <div className="w-full lg:w-1/2 flex justify-center">

              <div className="w-full max-w-lg h-56 sm:h-72 md:h-80 bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">

                <img
                  src={electronicsBanner}
                  alt="Electronics"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}

      <section className="py-12 sm:py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-8 sm:mb-10">

            <div>

              <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                Our Collection
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
                Electronics Products
              </h2>

              <p className="text-gray-500 mt-3 text-sm sm:text-base">
                Explore our latest electronics collection.
              </p>

            </div>

            {/* Sort */}

            <select className="w-full md:w-auto border border-gray-200 bg-white px-4 sm:px-5 py-3 rounded-xl outline-none text-gray-600 cursor-pointer">
              <option>Sort By</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>

          </div>

          {/* ================= PRODUCT GRID ================= */}

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >

                {/* Product Image */}

                <div className="h-52 sm:h-56 bg-gray-100 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* Product Details */}

                <div className="p-4 sm:p-5">

                  <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate">
                    {product.name}
                  </h3>

                  {/* Price */}

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">

                    <span className="text-lg sm:text-xl font-bold text-green-600">
                      ${product.price}
                    </span>

                    <span className="text-xs sm:text-sm text-gray-400 line-through">
                      ${product.oldPrice}
                    </span>

                  </div>

                  {/* Add To Cart */}

                  <button
                    type="button"
                    onClick={() => handleAddCart(product)}
                    className="w-full mt-4 sm:mt-5 bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition cursor-pointer"
                  >
                    Add To Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="bg-green-600 py-12 sm:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-7 lg:gap-8">

            {/* Newsletter Content */}

            <div className="text-center lg:text-left">

              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Subscribe To Our Newsletter
              </h2>

              <p className="text-green-100 mt-3 text-sm sm:text-base max-w-xl">
                Get the latest offers, discounts and new arrivals directly in
                your inbox.
              </p>

            </div>

            {/* Newsletter Form */}

            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 sm:gap-0">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-72 lg:w-96 h-14 rounded-xl sm:rounded-l-xl sm:rounded-r-none px-5 outline-none"
              />

              <button
                type="button"
                className="h-14 bg-gray-900 hover:bg-black text-white px-6 sm:px-8 rounded-xl sm:rounded-l-none sm:rounded-r-xl transition cursor-pointer"
              >
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

export default Electronics;