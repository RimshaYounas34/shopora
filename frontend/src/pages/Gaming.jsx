import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

// Gaming Images
import gamingLaptop from "../assets/images/gaming/gaming-laptop.jpg";
import gamingPC from "../assets/images/gaming/gaming-pc.jpg";
import gamingConsole from "../assets/images/gaming/gaming-console.jpg";
import controller from "../assets/images/gaming/gaming-controller.jpg";
import headset from "../assets/images/gaming/gaming-headset.jpg";
import gamingKeyboard from "../assets/images/gaming/gaming-keyboard.jpg";
import gamingMouse from "../assets/images/gaming/gaming-mouse.jpg";
import gamingMonitor from "../assets/images/gaming/gaming-monitor.jpg";
import gamingChair from "../assets/images/gaming/gaming-chair.jpg";
import mousepad from "../assets/images/gaming/gaming-mousepad.jpg";
import steering from "../assets/images/gaming/gaming-steering.jpg";
import vr from "../assets/images/gaming/gaming-vr.jpg";

// Gaming Banner
import gamingBanner from "../assets/images/gaming/gaming-banner.jpeg";

function Gaming() {
  const { addToCart } = useCart();

  const products = [
    {
      id: "gaming-201",
      name: "High Performance Gaming Laptop",
      title: "High Performance Gaming Laptop",
      price: 1299,
      oldPrice: 1499,
      image: gamingLaptop,
    },
    {
      id: "gaming-202",
      name: "Ultimate Gaming PC",
      title: "Ultimate Gaming PC",
      price: 1599,
      oldPrice: 1799,
      image: gamingPC,
    },
    {
      id: "gaming-203",
      name: "Next-Gen Gaming Console",
      title: "Next-Gen Gaming Console",
      price: 499,
      oldPrice: 599,
      image: gamingConsole,
    },
    {
      id: "gaming-204",
      name: "Wireless Gaming Controller",
      title: "Wireless Gaming Controller",
      price: 69,
      oldPrice: 89,
      image: controller,
    },
    {
      id: "gaming-205",
      name: "Pro Gaming Headset",
      title: "Pro Gaming Headset",
      price: 99,
      oldPrice: 129,
      image: headset,
    },
    {
      id: "gaming-206",
      name: "RGB Gaming Keyboard",
      title: "RGB Gaming Keyboard",
      price: 89,
      oldPrice: 119,
      image: gamingKeyboard,
    },
    {
      id: "gaming-207",
      name: "High Precision Gaming Mouse",
      title: "High Precision Gaming Mouse",
      price: 59,
      oldPrice: 79,
      image: gamingMouse,
    },
    {
      id: "gaming-208",
      name: "144Hz Gaming Monitor",
      title: "144Hz Gaming Monitor",
      price: 299,
      oldPrice: 399,
      image: gamingMonitor,
    },
    {
      id: "gaming-209",
      name: "Ergonomic Gaming Chair",
      title: "Ergonomic Gaming Chair",
      price: 249,
      oldPrice: 329,
      image: gamingChair,
    },
    {
      id: "gaming-210",
      name: "RGB Gaming Mouse Pad",
      title: "RGB Gaming Mouse Pad",
      price: 39,
      oldPrice: 49,
      image: mousepad,
    },
    {
      id: "gaming-211",
      name: "Racing Gaming Steering Wheel",
      title: "Racing Gaming Steering Wheel",
      price: 199,
      oldPrice: 249,
      image: steering,
    },
    {
      id: "gaming-212",
      name: "Virtual Reality Gaming Headset",
      title: "Virtual Reality Gaming Headset",
      price: 399,
      oldPrice: 499,
      image: vr,
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
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= CATEGORY HERO ================= */}
      <section className="bg-gradient-to-r from-[#fff8f2] via-[#fffaf6] to-[#eef9f2] py-20 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <p className="text-green-600 font-semibold uppercase tracking-wider">
                Home / Gaming
              </p>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4">
                Gaming
              </h1>

              <p className="text-gray-500 text-lg mt-5 max-w-xl leading-relaxed">
                Level up your gaming experience with powerful gaming devices,
                accessories and equipment designed for every gamer.
              </p>

              <Link
                to="/shop"
                className="mt-7 inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
              >
                Shop Gaming
              </Link>
            </div>

            {/* Right Banner Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-lg h-80 bg-white rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={gamingBanner}
                  alt="Gaming Collection"
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
                Gaming Products
              </h2>

              <p className="text-gray-500 mt-3">
                Explore premium gaming gear and accessories for the ultimate
                gaming experience.
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

export default Gaming;