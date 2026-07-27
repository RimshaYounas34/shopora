import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

// Mobile Images
import iphone from "../assets/images/mobiles/iphone.png";
import samsung from "../assets/images/mobiles/samsung.jpg";
import googlePixel from "../assets/images/mobiles/google-pixel.jpg";
import oneplus from "../assets/images/mobiles/oneplus.jpg";
import xiaomi from "../assets/images/mobiles/xiaomi.jpg";
import oppo from "../assets/images/mobiles/oppo.png";
import vivo from "../assets/images/mobiles/vivo.png";
import realme from "../assets/images/mobiles/realme.jpg";
import infinix from "../assets/images/mobiles/infinix.jpg";
import tecno from "../assets/images/mobiles/tecno.jpg";
import nokia from "../assets/images/mobiles/nokia.jpg";
import motorola from "../assets/images/mobiles/motorola.jpg";

// Mobile Banner
import mobileBanner from "../assets/images/mobiles/mobiles-banner.jpg";

function Mobiles() {
const { addToCart } = useCart();

const products = [
{
id: 101,
name: "Apple iPhone",
title: "Apple iPhone",
price: 999,
oldPrice: 1099,
image: iphone,
},
{
id: 102,
name: "Samsung Galaxy",
title: "Samsung Galaxy",
price: 799,
oldPrice: 899,
image: samsung,
},
{
id: 103,
name: "Google Pixel",
title: "Google Pixel",
price: 699,
oldPrice: 799,
image: googlePixel,
},
{
id: 104,
name: "OnePlus Smartphone",
title: "OnePlus Smartphone",
price: 599,
oldPrice: 699,
image: oneplus,
},
{
id: 105,
name: "Xiaomi Smartphone",
title: "Xiaomi Smartphone",
price: 449,
oldPrice: 499,
image: xiaomi,
},
{
id: 106,
name: "OPPO Smartphone",
title: "OPPO Smartphone",
price: 399,
oldPrice: 449,
image: oppo,
},
{
id: 107,
name: "Vivo Smartphone",
title: "Vivo Smartphone",
price: 429,
oldPrice: 499,
image: vivo,
},
{
id: 108,
name: "Realme Smartphone",
title: "Realme Smartphone",
price: 299,
oldPrice: 349,
image: realme,
},
{
id: 109,
name: "Infinix Smartphone",
title: "Infinix Smartphone",
price: 229,
oldPrice: 279,
image: infinix,
},
{
id: 110,
name: "Tecno Smartphone",
title: "Tecno Smartphone",
price: 249,
oldPrice: 299,
image: tecno,
},
{
id: 111,
name: "Nokia Smartphone",
title: "Nokia Smartphone",
price: 199,
oldPrice: 249,
image: nokia,
},
{
id: 112,
name: "Motorola Smartphone",
title: "Motorola Smartphone",
price: 349,
oldPrice: 399,
image: motorola,
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

```
  <Navbar />

  {/* ================= CATEGORY HERO ================= */}

  <section className="bg-gradient-to-r from-[#fff8f2] via-[#fffaf6] to-[#eef9f2] py-20 border-b">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}

        <div className="lg:w-1/2">

          <p className="text-green-600 font-semibold uppercase tracking-wider">
            Home / Mobiles
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4">
            Mobiles
          </h1>

          <p className="text-gray-500 text-lg mt-5 max-w-xl leading-relaxed">
            Discover the latest smartphones with powerful performance,
            stunning cameras and innovative features designed for your
            everyday life.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
          >
            Shop Mobiles
          </Link>

        </div>

        {/* Right Banner Image */}

        <div className="lg:w-1/2 flex justify-center">

          <div className="w-full max-w-lg h-80 bg-white rounded-3xl shadow-lg overflow-hidden">

            <img
              src={mobileBanner}
              alt="Mobile Collection"
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
            Mobile Products
          </h2>

          <p className="text-gray-500 mt-3">
            Explore the latest smartphones from popular brands.
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

export default Mobiles;
