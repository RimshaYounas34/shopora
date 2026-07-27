import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

// Watch Images
import watch1 from "../assets/images/watch1.jpg";
import watch2 from "../assets/images/watch2.jpg";
import watch3 from "../assets/images/watch3.jpg";
import watch4 from "../assets/images/watch4.jpg";

// Watch Banner
import watchBanner from "../assets/images/watch-banner.png";

function Watches() {
  // Cart Context
  const { addToCart } = useCart();

  const products = [
    {
      id: 301,
      name: "Luxury Classic Watch",
      title: "Luxury Classic Watch",
      price: 120,
      oldPrice: 150,
      image: watch1,
    },
    {
      id: 302,
      name: "Premium Leather Watch",
      title: "Premium Leather Watch",
      price: 95,
      oldPrice: 120,
      image: watch2,
    },
    {
      id: 303,
      name: "Smart Fashion Watch",
      title: "Smart Fashion Watch",
      price: 150,
      oldPrice: 190,
      image: watch3,
    },
    {
      id: 304,
      name: "Elegant Men's Watch",
      title: "Elegant Men's Watch",
      price: 110,
      oldPrice: 140,
      image: watch4,
    },
    {
      id: 305,
      name: "Classic Premium Watch",
      title: "Classic Premium Watch",
      price: 135,
      oldPrice: 170,
      image: watch1,
    },
    {
      id: 306,
      name: "Elegant Leather Watch",
      title: "Elegant Leather Watch",
      price: 105,
      oldPrice: 135,
      image: watch2,
    },
    {
      id: 307,
      name: "Modern Smart Watch",
      title: "Modern Smart Watch",
      price: 175,
      oldPrice: 220,
      image: watch3,
    },
    {
      id: 308,
      name: "Classic Men's Watch",
      title: "Classic Men's Watch",
      price: 125,
      oldPrice: 160,
      image: watch4,
    },
    {
      id: 309,
      name: "Luxury Gold Watch",
      title: "Luxury Gold Watch",
      price: 220,
      oldPrice: 280,
      image: watch1,
    },
    {
      id: 310,
      name: "Premium Steel Watch",
      title: "Premium Steel Watch",
      price: 180,
      oldPrice: 230,
      image: watch2,
    },
    {
      id: 311,
      name: "Sport Smart Watch",
      title: "Sport Smart Watch",
      price: 160,
      oldPrice: 200,
      image: watch3,
    },
    {
      id: 312,
      name: "Elegant Luxury Watch",
      title: "Elegant Luxury Watch",
      price: 195,
      oldPrice: 250,
      image: watch4,
    },
  ];

  // ================= ADD TO CART =================

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      title: product.title,
      price: Number(product.price),
      oldPrice: Number(product.oldPrice),
      image: product.image,
      quantity: 1,
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
                Home / Watches
              </p>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4">
                Watches
              </h1>

              <p className="text-gray-500 text-lg mt-5 max-w-xl leading-relaxed">
                Explore elegant and premium watches designed with timeless
                style, modern features and exceptional craftsmanship for
                every occasion.
              </p>

              <button
                onClick={() => {
                  document
                    .getElementById("watch-products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="mt-7 inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
              >
                Shop Watches
              </button>
            </div>

            {/* Right Banner Image */}

            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-lg h-80 bg-white rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={watchBanner}
                  alt="Watch Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}

      <section
        id="watch-products"
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-10">

            <div>
              <span className="text-green-600 font-semibold uppercase tracking-wider">
                Our Collection
              </span>

              <h2 className="text-4xl font-bold text-gray-800 mt-2">
                Watch Collection
              </h2>

              <p className="text-gray-500 mt-3">
                Discover premium watches for every style and occasion.
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

export default Watches;