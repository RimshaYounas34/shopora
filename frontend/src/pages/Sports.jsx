import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../components/context/CartContext";

// Sports Images
import football from "../assets/images/sports/football.jpg";
import basketball from "../assets/images/sports/basketball.jpg";
import cricketBat from "../assets/images/sports/cricket-bat.jpg";
import cricketBall from "../assets/images/sports/cricket-ball.jpg";
import tennisRacket from "../assets/images/sports/tennis-racket.jpg";
import badmintonRacket from "../assets/images/sports/badminton-racket.jpg";
import volleyball from "../assets/images/sports/volleyball.jpg";
import baseballGlove from "../assets/images/sports/baseball-glove.jpg";
import sportsShoes from "../assets/images/sports/sports-shoes.jpg";
import gymDumbbells from "../assets/images/sports/gym-dumbbells.jpg";
import yogaMat from "../assets/images/sports/yoga-mat.jpg";
import boxingGloves from "../assets/images/sports/boxing-gloves.jpg";

// Sports Banner
import sportsBanner from "../assets/images/sports/sports-banner.jpg";

function Sports() {
const { addToCart } = useCart();

const products = [
{
id: 501,
name: "Professional Football",
title: "Professional Football",
price: 39,
oldPrice: 49,
image: football,
},
{
id: 502,
name: "Premium Basketball",
title: "Premium Basketball",
price: 35,
oldPrice: 45,
image: basketball,
},
{
id: 503,
name: "Professional Cricket Bat",
title: "Professional Cricket Bat",
price: 129,
oldPrice: 159,
image: cricketBat,
},
{
id: 504,
name: "Leather Cricket Ball",
title: "Leather Cricket Ball",
price: 19,
oldPrice: 29,
image: cricketBall,
},
{
id: 505,
name: "Professional Tennis Racket",
title: "Professional Tennis Racket",
price: 89,
oldPrice: 119,
image: tennisRacket,
},
{
id: 506,
name: "Badminton Racket",
title: "Badminton Racket",
price: 59,
oldPrice: 79,
image: badmintonRacket,
},
{
id: 507,
name: "Premium Volleyball",
title: "Premium Volleyball",
price: 29,
oldPrice: 39,
image: volleyball,
},
{
id: 508,
name: "Professional Baseball Glove",
title: "Professional Baseball Glove",
price: 69,
oldPrice: 89,
image: baseballGlove,
},
{
id: 509,
name: "Performance Sports Shoes",
title: "Performance Sports Shoes",
price: 79,
oldPrice: 99,
image: sportsShoes,
},
{
id: 510,
name: "Adjustable Gym Dumbbells",
title: "Adjustable Gym Dumbbells",
price: 99,
oldPrice: 129,
image: gymDumbbells,
},
{
id: 511,
name: "Premium Yoga Mat",
title: "Premium Yoga Mat",
price: 29,
oldPrice: 39,
image: yogaMat,
},
{
id: 512,
name: "Professional Boxing Gloves",
title: "Professional Boxing Gloves",
price: 49,
oldPrice: 69,
image: boxingGloves,
},
];

// ================= ADD TO CART =================

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* Left Content */}

        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <p className="text-green-600 font-semibold uppercase tracking-wider text-sm sm:text-base">
            Home / Sports
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mt-4">
            Sports
          </h1>

          <p className="text-gray-500 text-base sm:text-lg mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Stay active and achieve your fitness goals with our premium
            collection of sports equipment, fitness gear and accessories
            designed for every athlete.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-7 sm:px-8 py-3 rounded-xl font-semibold transition duration-300"
          >
            Shop Sports
          </Link>

        </div>

        {/* Right Banner Image */}

        <div className="w-full lg:w-1/2 flex justify-center">

          <div className="w-full max-w-lg h-56 sm:h-72 md:h-80 bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">

            <img
              src={sportsBanner}
              alt="Sports Collection"
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

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 sm:mb-10">

        <div className="w-full md:w-auto">

          <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
            Our Collection
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
            Sports Products
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl">
            Explore premium sports equipment and fitness accessories for
            your active lifestyle.
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

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">

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
                onClick={() => handleAddToCart(product)}
                className="w-full mt-4 sm:mt-5 bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition duration-300"
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

        <div className="flex flex-col sm:flex-row w-full lg:w-auto max-w-xl">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-72 lg:w-96 h-14 rounded-xl sm:rounded-l-xl sm:rounded-r-none px-5 outline-none"
          />

          <button
            type="button"
            className="mt-2 sm:mt-0 h-14 bg-gray-900 hover:bg-black text-white px-6 sm:px-8 rounded-xl sm:rounded-r-xl sm:rounded-l-none transition"
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

export default Sports;
