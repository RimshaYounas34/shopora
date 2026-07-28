
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

// ================= BEST SELLER IMAGES =================
// Yahan apni images import kar lena

import best1 from "../assets/images/best1.jpg";
import best2 from "../assets/images/best2.jpg";
import best3 from "../assets/images/best3.jpg";
import best4 from "../assets/images/best4.jpg";
import best5 from "../assets/images/best5.jpg";
import best6 from "../assets/images/best6.jpg";
import best7 from "../assets/images/best7.jpg";
import best8 from "../assets/images/best8.jpg";


function BestSellers() {

  // ================= BEST SELLER PRODUCTS =================

  const bestSellerProducts = [
    {
      id: 401,
      title: "Premium Wireless Headphones",
      price: 59.99,
      oldPrice: 79.99,
      image: best1,
      rating: 5,
      reviews: 124,
      discount: "25% OFF",
      description:
        "Premium wireless headphones with excellent sound quality and comfortable design.",
    },

    {
      id: 402,
      title: "Smart Watch Series 5",
      price: 149.99,
      oldPrice: 199.99,
      image: best2,
      rating: 5,
      reviews: 98,
      discount: "25% OFF",
      description:
        "Modern smart watch with fitness tracking and stylish premium design.",
    },

    {
      id: 403,
      title: "Premium Travel Backpack",
      price: 79.99,
      oldPrice: 99.99,
      image: best3,
      rating: 4,
      reviews: 86,
      discount: "20% OFF",
      description:
        "Durable and spacious backpack perfect for travel, work and everyday use.",
    },

    {
      id: 404,
      title: "Classic Men's Watch",
      price: 119.99,
      oldPrice: 159.99,
      image: best4,
      rating: 5,
      reviews: 75,
      discount: "25% OFF",
      description:
        "Elegant classic watch designed for a premium and timeless appearance.",
    },

    {
      id: 405,
      title: "Premium Fashion Jacket",
      price: 89.99,
      oldPrice: 119.99,
      image: best5,
      rating: 4,
      reviews: 64,
      discount: "25% OFF",
      description:
        "Stylish premium jacket with comfortable fabric and modern design.",
    },

    {
      id: 406,
      title: "Modern Gaming Headset",
      price: 69.99,
      oldPrice: 89.99,
      image: best6,
      rating: 5,
      reviews: 112,
      discount: "22% OFF",
      description:
        "High-quality gaming headset with clear audio and comfortable ear cushions.",
    },

    {
      id: 407,
      title: "Elegant Leather Bag",
      price: 99.99,
      oldPrice: 129.99,
      image: best7,
      rating: 5,
      reviews: 91,
      discount: "23% OFF",
      description:
        "Elegant leather bag with premium finishing and spacious interior.",
    },

    {
      id: 408,
      title: "Premium Sports Shoes",
      price: 74.99,
      oldPrice: 99.99,
      image: best8,
      rating: 4,
      reviews: 103,
      discount: "25% OFF",
      description:
        "Comfortable sports shoes designed for daily wear and active lifestyles.",
    },
  ];


  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= PAGE BANNER ================= */}

      <section className="bg-gradient-to-r from-green-600 to-emerald-500 py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

          <p className="text-green-100 uppercase tracking-widest font-semibold text-sm sm:text-base">
            Customer Favorites
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3">
            Best Sellers
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-green-50 text-sm sm:text-base md:text-lg leading-relaxed">
            Discover our most popular products loved and trusted by
            thousands of customers.
          </p>

        </div>

      </section>


      {/* ================= BEST SELLER PRODUCTS ================= */}

      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">

          {/* ================= HEADER ================= */}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

            <div>

              <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                Top Products
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Our Best Selling Products
              </h2>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Shop the products our customers love the most.
              </p>

            </div>

          </div>


          {/* ================= PRODUCTS GRID ================= */}

          <div className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
            gap-3
            sm:gap-4
            md:gap-5
            lg:gap-6
          ">

            {bestSellerProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}

      <section className="py-12 sm:py-16 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="bg-green-600 rounded-2xl sm:rounded-3xl px-6 py-10 sm:px-10 md:py-14 text-center text-white">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Find Your Favorite Products
            </h2>

            <p className="mt-3 text-green-100 max-w-xl mx-auto text-sm sm:text-base">
              Explore our complete collection and discover more amazing
              products at the best prices.
            </p>

            <button
              type="button"
              onClick={() => {
                window.location.href = "/shop";
              }}
              className="
                mt-6
                bg-white
                text-green-600
                px-6
                sm:px-8
                py-3
                rounded-xl
                font-semibold
                hover:bg-gray-100
                transition
              "
            >
              Explore All Products
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <Footer />

    </>
  );
}

export default BestSellers;
