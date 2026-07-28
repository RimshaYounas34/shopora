import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

// Fashion Images
import tshirt from "../assets/images/fashion/tshirt.jpg";
import jeans from "../assets/images/fashion/jeans.jpg";
import dress from "../assets/images/fashion/dress.jpg";
import jacket from "../assets/images/fashion/jacket.jpg";
import hoodie from "../assets/images/fashion/hoodie.jpg";
import shoes from "../assets/images/fashion/shoes.png";
import sneakers from "../assets/images/fashion/sneakers.jpg";
import handbag from "../assets/images/fashion/handbag.jpg";
import sunglasses from "../assets/images/fashion/sunglasses.jpeg";
import cap from "../assets/images/fashion/cap.jpg";
import watch from "../assets/images/fashion/watch.jpg";
import belt from "../assets/images/fashion/belt.jpg";

// Fashion Banner
import fashionBanner from "../assets/images/fashion/fashion-banner.jpg";

function Fashion() {
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
      id: "fashion-1",
      name: "Classic Cotton T-Shirt",
      title: "Classic Cotton T-Shirt",
      price: 29,
      oldPrice: 39,
      image: tshirt,
    },
    {
      id: "fashion-2",
      name: "Premium Denim Jeans",
      title: "Premium Denim Jeans",
      price: 59,
      oldPrice: 79,
      image: jeans,
    },
    {
      id: "fashion-3",
      name: "Elegant Summer Dress",
      title: "Elegant Summer Dress",
      price: 69,
      oldPrice: 89,
      image: dress,
    },
    {
      id: "fashion-4",
      name: "Casual Denim Jacket",
      title: "Casual Denim Jacket",
      price: 89,
      oldPrice: 119,
      image: jacket,
    },
    {
      id: "fashion-5",
      name: "Comfortable Hoodie",
      title: "Comfortable Hoodie",
      price: 49,
      oldPrice: 65,
      image: hoodie,
    },
    {
      id: "fashion-6",
      name: "Classic Formal Shoes",
      title: "Classic Formal Shoes",
      price: 99,
      oldPrice: 129,
      image: shoes,
    },
    {
      id: "fashion-7",
      name: "Premium Sneakers",
      title: "Premium Sneakers",
      price: 79,
      oldPrice: 99,
      image: sneakers,
    },
    {
      id: "fashion-8",
      name: "Leather Handbag",
      title: "Leather Handbag",
      price: 119,
      oldPrice: 149,
      image: handbag,
    },
    {
      id: "fashion-9",
      name: "Stylish Sunglasses",
      title: "Stylish Sunglasses",
      price: 39,
      oldPrice: 59,
      image: sunglasses,
    },
    {
      id: "fashion-10",
      name: "Classic Fashion Cap",
      title: "Classic Fashion Cap",
      price: 25,
      oldPrice: 35,
      image: cap,
    },
    {
      id: "fashion-11",
      name: "Luxury Wrist Watch",
      title: "Luxury Wrist Watch",
      price: 149,
      oldPrice: 199,
      image: watch,
    },
    {
      id: "fashion-12",
      name: "Classic Leather Belt",
      title: "Classic Leather Belt",
      price: 35,
      oldPrice: 49,
      image: belt,
    },
  ];

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-r from-[#fff8f2] via-[#fffaf6] to-[#eef9f2] py-12 sm:py-16 lg:py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

            {/* Left Content */}

            <div className="w-full lg:w-1/2 text-center lg:text-left">

              <p className="text-green-600 font-semibold uppercase tracking-wider text-sm sm:text-base">
                Home / Fashion
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mt-4">
                Fashion
              </h1>

              <p className="text-gray-500 text-base sm:text-lg mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Explore the latest fashion trends, stylish clothing and
                accessories designed to elevate your everyday look.
              </p>

              <Link
                to="/shop"
                className="mt-7 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-7 sm:px-8 py-3 rounded-xl font-semibold transition duration-300"
              >
                Shop Fashion
              </Link>

            </div>

            {/* Right Banner */}

            <div className="w-full lg:w-1/2 flex justify-center">

              <div className="w-full max-w-lg h-56 sm:h-72 md:h-80 bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">

                <img
                  src={fashionBanner}
                  alt="Fashion Collection"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}

      <section className="py-12 sm:py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section Heading */}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-8 sm:mb-10">

            <div className="w-full md:w-auto">

              <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                Our Collection
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
                Fashion Products
              </h2>

              <p className="text-gray-500 mt-3 text-sm sm:text-base">
                Discover trendy fashion products for every style.
              </p>

            </div>

            {/* Sort */}

            <select className="w-full md:w-auto border border-gray-200 bg-white px-5 py-3 rounded-xl outline-none text-gray-600">
              <option>Sort By</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>

          </div>

          {/* ================= PRODUCT GRID ================= */}

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >

                {/* Product Image */}

                <div className="h-64 sm:h-56 bg-gray-100 overflow-hidden">

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
                    className="w-full mt-4 sm:mt-5 bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold transition text-sm sm:text-base"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-7 lg:gap-8">

            {/* Newsletter Content */}

            <div className="text-center lg:text-left">

              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Subscribe To Our Newsletter
              </h2>

              <p className="text-green-100 mt-3 text-sm sm:text-base">
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
                className="w-full sm:w-auto h-14 bg-gray-900 hover:bg-black text-white px-8 rounded-xl sm:rounded-l-none sm:rounded-r-xl transition"
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Fashion;