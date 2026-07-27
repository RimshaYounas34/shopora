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

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <h2 className="text-center text-3xl font-bold py-20">
        Product Not Found
      </h2>
    );
  }

  const relatedProducts = products.filter(
    (item) => item.id !== product.id
  );

  return (
    <>
      <Navbar />

      <section className="py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4">

          {/* Product */}

          <div className="grid lg:grid-cols-2 gap-16">

            <ProductGallery product={product} />

            <ProductInfo product={product} />

          </div>
                    {/* Tabs */}

          <div className="bg-white rounded-2xl shadow-sm mt-16 p-8">

            <div className="flex gap-8 border-b pb-4">

              <button className="font-semibold text-emerald-600 border-b-2 border-emerald-600 pb-3">
                Description
              </button>

              <button className="font-semibold text-gray-500 hover:text-emerald-600">
                Additional Info
              </button>

              <button className="font-semibold text-gray-500 hover:text-emerald-600">
                Reviews ({product.reviews})
              </button>

            </div>

            <div className="mt-8 text-gray-600 leading-8">

              <p>
                {product.title} is a premium quality product designed with
                modern technology and durable materials. It delivers excellent
                performance, stylish design, and long-lasting reliability for
                everyday use.
              </p>

              <p className="mt-6">
                Enjoy fast delivery, secure payments, and trusted quality.
                Shop confidently with our premium collection and experience
                outstanding value for your money.
              </p>

            </div>

          </div>

          {/* Related Products */}

          <div className="mt-20">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                Related Products
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {relatedProducts.slice(0, 4).map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default ProductDetails;