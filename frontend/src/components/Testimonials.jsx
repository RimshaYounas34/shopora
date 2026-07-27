import { FaStar, FaArrowRight } from "react-icons/fa";

import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

function Testimonials() {
  const reviews = [
    {
      image: user1,
      name: "Sarah Johnson",
      role: "Verified Purchase",
      review:
        "Amazing quality products and fast delivery! Very happy with my purchase.",
    },
    {
      image: user2,
      name: "Michael Brown",
      role: "Verified Purchase",
      review:
        "The store has the best collection and affordable prices. Highly recommended!",
    },
    {
      image: user3,
      name: "Emily Davis",
      role: "Verified Purchase",
      review:
        "Great customer service and super fast shipping. Will shop again!",
    },
    {
      image: user1,
      name: "Daniel Wilson",
      role: "Verified Purchase",
      review:
        "Excellent quality and amazing customer support. Definitely buying again!",
    },
    {
      image: user2,
      name: "Sophia Taylor",
      role: "Verified Purchase",
      review:
        "Very fast delivery and premium quality products. Worth every penny.",
    },
    {
      image: user3,
      name: "James Anderson",
      role: "Verified Purchase",
      review:
        "Highly satisfied with the service. Packaging and delivery were excellent.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <button className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition">
            View All Reviews
            <FaArrowRight className="text-sm" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 min-h-[220px] hover:shadow-md transition duration-300"
            >
              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mt-5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="mt-4 text-sm text-gray-500 leading-6">
                {item.review}
              </p>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;