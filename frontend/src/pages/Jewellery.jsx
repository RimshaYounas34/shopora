
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

// Jewellery Images
import goldNecklace from "../assets/images/jewellery/gold-necklace.jpg";
import diamondRing from "../assets/images/jewellery/diamond-ring.jpg";
import earrings from "../assets/images/jewellery/earrings.jpg";
import bracelet from "../assets/images/jewellery/bracelet.jpg";
import goldBangle from "../assets/images/jewellery/gold-bangle.jpg";
import pearlNecklace from "../assets/images/jewellery/pearl-necklace.jpg";
import pendant from "../assets/images/jewellery/pendant.jpg";
import anklet from "../assets/images/jewellery/anklet.jpg";
import brooch from "../assets/images/jewellery/brooch.jpg";
import jewellerySet from "../assets/images/jewellery/jewellery-set.jpg";
import nosePin from "../assets/images/jewellery/nose-pin.jpg";
import chain from "../assets/images/jewellery/chain.jpg";

// Jewellery Banner
import jewelleryBanner from "../assets/images/jewellery/jewellery-banner.jpg";

function Jewellery() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 401,
      name: "Elegant Gold Necklace",
      title: "Elegant Gold Necklace",
      price: 299,
      oldPrice: 399,
      image: goldNecklace,
    },
    {
      id: 402,
      name: "Classic Diamond Ring",
      title: "Classic Diamond Ring",
      price: 499,
      oldPrice: 599,
      image: diamondRing,
    },
    {
      id: 403,
      name: "Elegant Gold Earrings",
      title: "Elegant Gold Earrings",
      price: 149,
      oldPrice: 199,
      image: earrings,
    },
    {
      id: 404,
      name: "Luxury Charm Bracelet",
      title: "Luxury Charm Bracelet",
      price: 179,
      oldPrice: 229,
      image: bracelet,
    },
    {
      id: 405,
      name: "Classic Gold Bangle",
      title: "Classic Gold Bangle",
      price: 249,
      oldPrice: 299,
      image: goldBangle,
    },
    {
      id: 406,
      name: "Premium Pearl Necklace",
      title: "Premium Pearl Necklace",
      price: 199,
      oldPrice: 259,
      image: pearlNecklace,
    },
    {
      id: 407,
      name: "Beautiful Gold Pendant",
      title: "Beautiful Gold Pendant",
      price: 129,
      oldPrice: 169,
      image: pendant,
    },
    {
      id: 408,
      name: "Elegant Silver Anklet",
      title: "Elegant Silver Anklet",
      price: 79,
      oldPrice: 99,
      image: anklet,
    },
    {
      id: 409,
      name: "Designer Jewellery Brooch",
      title: "Designer Jewellery Brooch",
      price: 69,
      oldPrice: 89,
      image: brooch,
    },
    {
      id: 410,
      name: "Luxury Jewellery Set",
      title: "Luxury Jewellery Set",
      price: 399,
      oldPrice: 499,
      image: jewellerySet,
    },
    {
      id: 411,
      name: "Delicate Gold Nose Pin",
      title: "Delicate Gold Nose Pin",
      price: 49,
      oldPrice: 69,
      image: nosePin,
    },
    {
      id: 412,
      name: "Classic Gold Chain",
      title: "Classic Gold Chain",
      price: 229,
      oldPrice: 299,
      image: chain,
    },
  ];

  // Add Product To Cart
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      title: product.title || product.name,
      price: Number(product.price),
      oldPrice: Number(product.oldPrice),
      quantity: 1,
    });

    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= CATEGORY HERO ================= */}

      <section className="bg-gradient-to-r from-[#fff8f2] via-[#fffaf6] to-[#eef9f2] py-12 sm:py-16 lg:py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

            {/* Left Content */}

            <div className="w-full lg:w-1/2 text-center lg:text-left">

              <p className="text-green-600 font-semibold uppercase tracking-wider text-sm sm:text-base">
                Home / Jewellery
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mt-4">
                Jewellery
              </h1>

              <p className="text-gray-500 text-base sm:text-lg mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover elegant and timeless jewellery pieces designed to add
                beauty, style and sophistication to every special occasion.
              </p>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("jewellery-products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="mt-7 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition duration-300 w-full sm:w-auto"
              >
                Shop Jewellery
              </button>

            </div>

            {/* Right Banner Image */}

            <div className="w-full lg:w-1/2 flex justify-center">

              <div className="w-full max-w-lg h-64 sm:h-80 md:h-96 lg:h-80 bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">

                <img
                  src={jewelleryBanner}
                  alt="Jewellery Collection"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}

      <section
        id="jewellery-products"
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">

            <div className="w-full md:w-auto">

              <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                Our Collection
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
                Jewellery Collection
              </h2>

              <p className="text-gray-500 mt-3 text-sm sm:text-base">
                Explore our beautiful collection of jewellery for every
                occasion.
              </p>

            </div>

            {/* Sort */}

            <select className="w-full md:w-auto border border-gray-200 bg-white px-5 py-3 rounded-xl outline-none text-gray-600 cursor-pointer">
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

                <div className="h-56 sm:h-60 md:h-56 bg-gray-100 overflow-hidden">

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
                    className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm sm:text-base transition duration-300"
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

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

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
                className="w-full sm:w-auto h-14 bg-gray-900 hover:bg-black text-white px-8 rounded-xl sm:rounded-r-xl sm:rounded-l-none transition"
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

export default Jewellery;
