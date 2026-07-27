import ProductCard from "./ProductCard";

import headphone from "../assets/images/headphones.jpg";
import watch from "../assets/images/watch.jpg";
import bag from "../assets/images/bag.png";
import shoes from "../assets/images/shoes.jpg";
import perfume from "../assets/images/perfume.jpg";
import lamp from "../assets/images/lamp.jpg";
import speaker from "../assets/images/speaker.jpg";
import camera from "../assets/images/camera.jpg";
import glasses from "../assets/images/glases.jpg";

function DealProducts() {
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
      title: "Modern Table Lamp",
      price: 24.99,
      oldPrice: 39.99,
      rating: 5,
      reviews: 28,
      discount: "-40%",
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
      title: "Stylish Sunglasses",
      price: 31.99,
      oldPrice: 49.99,
      rating: 4,
      reviews: 42,
      discount: "-20%",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="text-green-600 uppercase tracking-widest font-semibold">
            Flash Sale
          </span>

          <h2 className="text-4xl font-bold mt-3 text-gray-800">
            Today's Best Deals
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Grab premium products at amazing discounts.
            Limited-time offers available while stock lasts.
          </p>

        </div>

        {/* Products */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default DealProducts;