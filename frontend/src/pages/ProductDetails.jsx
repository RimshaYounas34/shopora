
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductCard from "../components/ProductCard";

import headphone from "../assets/images/headphones.jpg";
import watch from "../assets/images/watch.jpg";
import bag from "../assets/images/bag.png";
import shoes from "../assets/images/shoes.jpg";
import perfume from "../assets/images/perfume.jpg";
import lamp from "../assets/images/lamp.jpg";
import speaker from "../assets/images/speaker.jpg";
import camera from "../assets/images/camera.jpg";
import glasses from "../assets/images/glases.jpg";

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      image: headphone,
      title: "Wireless Headphones",
      price: 59.99,
      oldPrice: 89.99,
      rating: 5,
      reviews: 120,
      discount: "-35%",
    },
    {
      id: 2,
      image: watch,
      title: "Smart Watch Series 8",
      price: 149.99,
      oldPrice: 199.99,
      rating: 5,
      reviews: 80,
      discount: "-25%",
    },
    {
      id: 3,
      image: bag,
      title: "Travel Backpack",
      price: 39.99,
      oldPrice: 59.99,
      rating: 4,
      reviews: 64,
      discount: "-30%",
    },
    {
      id: 4,
      image: shoes,
      title: "Running Shoes",
      price: 89.99,
      oldPrice: 120.99,
      rating: 5,
      reviews: 50,
      discount: "-20%",
    },
    {
      id: 5,
      image: perfume,
      title: "Luxury Perfume",
      price: 29.99,
      oldPrice: 39.99,
      rating: 4,
      reviews: 34,
      discount: "-15%",
    },
    {
      id: 6,
      image: lamp,
      title: "Table Lamp",
      price: 19.99,
      oldPrice: 29.99,
      rating: 5,
      reviews: 20,
      discount: "-10%",
    },
    {
      id: 7,
      image: speaker,
      title: "Bluetooth Speaker",
      price: 49.99,
      oldPrice: 69.99,
      rating: 5,
      reviews: 55,
      discount: "-28%",
    },
    {
      id: 8,
      image: camera,
      title: "Digital Camera",
      price: 499.99,
      oldPrice: 599.99,
      rating: 5,
      reviews: 19,
      discount: "-18%",
    },
    {
      id: 9,
      image: glasses,
      title: "Sunglasses",
      price: 31.99,
      oldPrice: 49.99,
      rating: 4,
      reviews: 42,
      discount: "-20%",
    },
  ];

  // ================= FIND PRODUCT =================

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // ================= PRODUCT NOT FOUND =================

  if (!product) {
    return (
      <>
        <Navbar />

        <section className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Product Not Found
            </h2>

            <p className="text-gray-500 mt-3">
              The product you are looking for does not exist.
            </p>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  // ================= RELATED PRODUCTS =================

  const relatedProducts = products.filter(
    (item) => item.id !== product.id
  );

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= PRODUCT DETAILS SECTION ================= */}

      <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= PRODUCT ================= */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">

            {/* Product Gallery */}

            <div className="w-full">
              <ProductGallery product={product} />
            </div>

            {/* Product Information */}

            <div className="w-full">
              <ProductInfo product={product} />
            </div>

          </div>

          {/* ================= TABS ================= */}

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm mt-10 sm:mt-14 lg:mt-16 p-4 sm:p-6 lg:p-8">

            {/* Tab Navigation */}

            <div className="overflow-x-auto scrollbar-hide">

              <div className="flex min-w-max gap-6 sm:gap-8 border-b pb-3 sm:pb-4">

                <button
                  type="button"
                  className="font-semibold text-emerald-600 border-b-2 border-emerald-600 pb-3 whitespace-nowrap text-sm sm:text-base"
                >
                  Description
                </button>

                <button
                  type="button"
                  className="font-semibold text-gray-500 hover:text-emerald-600 pb-3 whitespace-nowrap text-sm sm:text-base transition"
                >
                  Additional Info
                </button>

                <button
                  type="button"
                  className="font-semibold text-gray-500 hover:text-emerald-600 pb-3 whitespace-nowrap text-sm sm:text-base transition"
                >
                  Reviews ({product.reviews})
                </button>

              </div>

            </div>

            {/* Tab Content */}

            <div className="mt-6 sm:mt-8 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">

              <p>
                {product.title} is a premium quality product designed with
                modern technology and durable materials. It delivers excellent
                performance, stylish design, and long-lasting reliability for
                everyday use.
              </p>

              <p className="mt-4 sm:mt-6">
                Enjoy fast delivery, secure payments, and trusted quality.
                Shop confidently with our premium collection and experience
                outstanding value for your money.
              </p>

            </div>

          </div>

          {/* ================= RELATED PRODUCTS ================= */}

          <div className="mt-12 sm:mt-16 lg:mt-20">

            {/* Related Heading */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">

              <div>
                <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">
                  You May Also Like
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                  Related Products
                </h2>
              </div>

            </div>

            {/* Related Product Grid */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

              {relatedProducts.slice(0, 4).map((item) => (

                <div
                  key={item.id}
                  className="w-full"
                >
                  <ProductCard product={item} />
                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

    </>
  );
}

export default ProductDetails;
