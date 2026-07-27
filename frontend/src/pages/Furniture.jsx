
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

// Furniture Images
import sofa from "../assets/images/furniture/sofa.jpg";
import diningTable from "../assets/images/furniture/dining-table.jpg";
import officeChair from "../assets/images/furniture/office-chair.jpg";
import bed from "../assets/images/furniture/bed.jpg";
import wardrobe from "../assets/images/furniture/wardrobe.jpg";
import coffeeTable from "../assets/images/furniture/coffee-table.jpg";
import bookshelf from "../assets/images/furniture/bookshelf.jpg";
import tvStand from "../assets/images/furniture/tv-stand.jpg";
import bedsideTable from "../assets/images/furniture/bedside-table.jpg";
import armchair from "../assets/images/furniture/armchair.jpg";
import desk from "../assets/images/furniture/desk.jpg";
import stool from "../assets/images/furniture/stool.jpg";

// Furniture Banner
import furnitureBanner from "../assets/images/furniture/furniture-banner.jpg";

function Furniture() {
  const { addToCart } = useCart();

  const products = [
    {
      id: "furniture-1",
      name: "Modern Living Room Sofa",
      price: 499,
      oldPrice: 599,
      image: sofa,
    },
    {
      id: "furniture-2",
      name: "Elegant Dining Table",
      price: 399,
      oldPrice: 499,
      image: diningTable,
    },
    {
      id: "furniture-3",
      name: "Comfortable Office Chair",
      price: 149,
      oldPrice: 199,
      image: officeChair,
    },
    {
      id: "furniture-4",
      name: "Luxury King Size Bed",
      price: 699,
      oldPrice: 799,
      image: bed,
    },
    {
      id: "furniture-5",
      name: "Modern Wooden Wardrobe",
      price: 549,
      oldPrice: 649,
      image: wardrobe,
    },
    {
      id: "furniture-6",
      name: "Stylish Coffee Table",
      price: 179,
      oldPrice: 229,
      image: coffeeTable,
    },
    {
      id: "furniture-7",
      name: "Wooden Bookshelf",
      price: 199,
      oldPrice: 249,
      image: bookshelf,
    },
    {
      id: "furniture-8",
      name: "Modern TV Stand",
      price: 229,
      oldPrice: 299,
      image: tvStand,
    },
    {
      id: "furniture-9",
      name: "Bedside Table",
      price: 99,
      oldPrice: 129,
      image: bedsideTable,
    },
    {
      id: "furniture-10",
      name: "Luxury Armchair",
      price: 249,
      oldPrice: 299,
      image: armchair,
    },
    {
      id: "furniture-11",
      name: "Modern Office Desk",
      price: 299,
      oldPrice: 379,
      image: desk,
    },
    {
      id: "furniture-12",
      name: "Wooden Bar Stool",
      price: 79,
      oldPrice: 99,
      image: stool,
    },
  ];

  // Add product to cart
  const handleAddToCart = (product) => {
    const cartProduct = {
      id: product.id,
      title: product.name,
      name: product.name,
      image: product.image,
      price: product.price,
      oldPrice: product.oldPrice,
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
                Home / Furniture
              </p>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4">
                Furniture
              </h1>

              <p className="text-gray-500 text-lg mt-5 max-w-xl leading-relaxed">
                Transform your home with stylish, comfortable and high-quality
                furniture designed to bring beauty and comfort to every space.
              </p>

              <Link
                to="/shop"
                className="mt-7 inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
              >
                Shop Furniture
              </Link>
            </div>

            {/* Right Banner Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-lg h-80 bg-white rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={furnitureBanner}
                  alt="Furniture Collection"
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
                Furniture Products
              </h2>

              <p className="text-gray-500 mt-3">
                Discover modern furniture pieces for your home and office.
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
                    className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
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

export default Furniture;
