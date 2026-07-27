import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

// Bags Images
import leatherHandbag from "../assets/images/bags/leather-handbag.jpeg";
import shoulderBag from "../assets/images/bags/shoulder-bag.jpg";
import crossbodyBag from "../assets/images/bags/crossbody-bag.jpg";
import toteBag from "../assets/images/bags/tote-bag.jpg";
import backpack from "../assets/images/bags/backpack.jpg";
import travelBag from "../assets/images/bags/travel-bag.jpg";
import laptopBag from "../assets/images/bags/laptop-bag.jpg";
import clutchBag from "../assets/images/bags/clutch-bag.jpg";
import wallet from "../assets/images/bags/wallet.jpg";
import schoolBag from "../assets/images/bags/school-bag.jpg";
import duffleBag from "../assets/images/bags/duffle-bag.jpg";
import miniBag from "../assets/images/bags/mini-bag.jpg";

// Bags Banner
import bagsBanner from "../assets/images/bags/bags-banner.jpg";

function Bags() {
  // Cart Context
  const { addToCart } = useCart();

  // ================= PRODUCTS =================
  const products = [
    {
      id: "bags-1",
      name: "Premium Leather Handbag",
      title: "Premium Leather Handbag",
      price: 119,
      oldPrice: 149,
      image: leatherHandbag,
    },
    {
      id: "bags-2",
      name: "Elegant Shoulder Bag",
      title: "Elegant Shoulder Bag",
      price: 89,
      oldPrice: 119,
      image: shoulderBag,
    },
    {
      id: "bags-3",
      name: "Stylish Crossbody Bag",
      title: "Stylish Crossbody Bag",
      price: 69,
      oldPrice: 89,
      image: crossbodyBag,
    },
    {
      id: "bags-4",
      name: "Classic Tote Bag",
      title: "Classic Tote Bag",
      price: 99,
      oldPrice: 129,
      image: toteBag,
    },
    {
      id: "bags-5",
      name: "Modern Travel Backpack",
      title: "Modern Travel Backpack",
      price: 79,
      oldPrice: 99,
      image: backpack,
    },
    {
      id: "bags-6",
      name: "Large Travel Bag",
      title: "Large Travel Bag",
      price: 109,
      oldPrice: 139,
      image: travelBag,
    },
    {
      id: "bags-7",
      name: "Professional Laptop Bag",
      title: "Professional Laptop Bag",
      price: 69,
      oldPrice: 89,
      image: laptopBag,
    },
    {
      id: "bags-8",
      name: "Elegant Evening Clutch",
      title: "Elegant Evening Clutch",
      price: 49,
      oldPrice: 69,
      image: clutchBag,
    },
    {
      id: "bags-9",
      name: "Premium Leather Wallet",
      title: "Premium Leather Wallet",
      price: 39,
      oldPrice: 59,
      image: wallet,
    },
    {
      id: "bags-10",
      name: "Classic School Bag",
      title: "Classic School Bag",
      price: 59,
      oldPrice: 79,
      image: schoolBag,
    },
    {
      id: "bags-11",
      name: "Large Duffle Bag",
      title: "Large Duffle Bag",
      price: 89,
      oldPrice: 119,
      image: duffleBag,
    },
    {
      id: "bags-12",
      name: "Cute Mini Bag",
      title: "Cute Mini Bag",
      price: 45,
      oldPrice: 59,
      image: miniBag,
    },
  ];

  // ================= ADD PRODUCT TO CART =================
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      title: product.title || product.name,
      price: Number(product.price),
      oldPrice: Number(product.oldPrice),
    });

    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= CATEGORY HERO ================= */}

      <section className="bg-gradient-to-r from-[#fff8f2] via-[#fffaf6] to-[#eef9f2] py-20 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Content */}

            <div className="lg:w-1/2">
              <p className="text-green-600 font-semibold uppercase tracking-wider">
                Home / Bags
              </p>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4">
                Bags
              </h1>

              <p className="text-gray-500 text-lg mt-5 max-w-xl leading-relaxed">
                Discover stylish, practical and premium bags designed for
                everyday use, travel, work and special occasions.
              </p>

              <Link
                to="/shop"
                className="mt-7 inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
              >
                Shop Bags
              </Link>
            </div>

            {/* Right Banner Image */}

            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-lg h-80 bg-white rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={bagsBanner}
                  alt="Bags Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-10">

            <div>
              <span className="text-green-600 font-semibold uppercase tracking-wider">
                Our Collection
              </span>

              <h2 className="text-4xl font-bold text-gray-800 mt-2">
                Bags Collection
              </h2>

              <p className="text-gray-500 mt-3">
                Explore our stylish collection of bags for every occasion.
              </p>
            </div>

            {/* Sort */}

            <select className="border border-gray-200 bg-white px-5 py-3 rounded-xl outline-none text-gray-600">
              <option>Sort By</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>

          </div>

          {/* ================= PRODUCT GRID ================= */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >

                {/* Product Image */}

                <div className="h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Product Details */}

                <div className="p-5">

                  <h3 className="text-lg font-bold text-gray-800 truncate">
                    {product.name}
                  </h3>

                  {/* Price */}

                  <div className="flex items-center gap-3 mt-3">

                    <span className="text-xl font-bold text-green-600">
                      ${product.price}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      ${product.oldPrice}
                    </span>

                  </div>

                  {/* Add To Cart */}

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition duration-300"
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

      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Newsletter Content */}

            <div>
              <h2 className="text-3xl font-bold text-white">
                Subscribe To Our Newsletter
              </h2>

              <p className="text-green-100 mt-3">
                Get the latest offers, discounts and new arrivals directly in
                your inbox.
              </p>
            </div>

            {/* Newsletter Form */}

            <div className="flex w-full lg:w-auto">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full lg:w-96 h-14 rounded-l-xl px-5 outline-none"
              />

              <button
                type="button"
                className="bg-gray-900 hover:bg-black text-white px-8 rounded-r-xl transition"
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

export default Bags;