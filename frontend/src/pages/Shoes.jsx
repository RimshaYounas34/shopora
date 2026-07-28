
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

// Shoes Images
import shoe1 from "../assets/images/shoe1.jpg";
import shoe2 from "../assets/images/shoe2.jpg";
import shoe3 from "../assets/images/shoe3.jpg";
import shoe4 from "../assets/images/shoe4.jpg";

// Shoes Banner
import shoesBanner from "../assets/images/shoes-banner.jpg";

function Shoes() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 401,
      name: "Premium Running Shoes",
      title: "Premium Running Shoes",
      price: 85,
      oldPrice: 110,
      image: shoe1,
    },
    {
      id: 402,
      name: "Classic Casual Shoes",
      title: "Classic Casual Shoes",
      price: 70,
      oldPrice: 95,
      image: shoe2,
    },
    {
      id: 403,
      name: "Sports Comfort Shoes",
      title: "Sports Comfort Shoes",
      price: 95,
      oldPrice: 125,
      image: shoe3,
    },
    {
      id: 404,
      name: "Luxury Sneakers",
      title: "Luxury Sneakers",
      price: 120,
      oldPrice: 150,
      image: shoe4,
    },
  ];

  // Add Product To Cart
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

      <section className="bg-gradient-to-r from-[#fff8f2] via-[#fffaf6] to-[#eef9f2] py-12 sm:py-16 lg:py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

            {/* Left Content */}

            <div className="w-full lg:w-1/2 text-center lg:text-left">

              <p className="text-green-600 font-semibold uppercase tracking-wider text-sm sm:text-base">
                Home / Shoes
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mt-3 sm:mt-4">
                Shoes
              </h1>

              <p className="text-gray-500 text-base sm:text-lg mt-4 sm:mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover stylish, comfortable and premium quality shoes
                designed for your everyday lifestyle, sports and special
                occasions.
              </p>

              <Link
                to="/shop"
                className="mt-6 sm:mt-7 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-7 sm:px-8 py-3 rounded-xl font-semibold transition duration-300"
              >
                Shop Shoes
              </Link>

            </div>

            {/* Right Banner Image */}

            <div className="w-full lg:w-1/2 flex justify-center">

              <div className="w-full max-w-lg h-56 sm:h-72 md:h-80 bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">

                <img
                  src={shoesBanner}
                  alt="Shoes Collection"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section Heading */}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 sm:mb-10">

            <div className="w-full md:w-auto">

              <span className="text-green-600 font-semibold uppercase tracking-wider text-sm sm:text-base">
                Our Collection
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
                Shoes Collection
              </h2>

              <p className="text-gray-500 mt-3 text-sm sm:text-base">
                Explore our stylish and comfortable footwear collection.
              </p>

            </div>

            {/* Sort */}

            <select
              className="w-full md:w-auto border border-gray-200 bg-white px-4 sm:px-5 py-3 rounded-xl outline-none text-gray-600 text-sm sm:text-base cursor-pointer"
            >
              <option>Sort By</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>

          </div>

          {/* ================= PRODUCT GRID ================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >

                {/* Product Image */}

                <div className="h-64 sm:h-56 md:h-60 lg:h-56 bg-gray-100 overflow-hidden">

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

                  <div className="flex items-center gap-2 sm:gap-3 mt-3">

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
                    onClick={() => handleAddToCart(product)}
                    className="w-full mt-4 sm:mt-5 bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold transition duration-300 text-sm sm:text-base"
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

          <div className="flex flex-col lg:flex-row items-center justify-between gap-7 sm:gap-8">

            {/* Newsletter Content */}

            <div className="w-full lg:w-auto text-center lg:text-left">

              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Subscribe To Our Newsletter
              </h2>

              <p className="text-green-100 mt-3 text-sm sm:text-base">
                Get the latest offers, discounts and new arrivals directly in
                your inbox.
              </p>

            </div>

            {/* Newsletter Form */}

            <div className="flex w-full max-w-xl lg:w-auto">

              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 lg:w-96 h-12 sm:h-14 rounded-l-xl px-4 sm:px-5 outline-none text-sm sm:text-base"
              />

              <button
                type="button"
                className="shrink-0 bg-gray-900 hover:bg-black text-white px-5 sm:px-8 rounded-r-xl transition text-sm sm:text-base"
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

export default Shoes;
