
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
    <section className="py-10 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <button
            type="button"
            className="self-start sm:self-auto flex items-center gap-2 text-emerald-600 font-semibold text-sm sm:text-base hover:text-emerald-700 transition"
          >
            View All Reviews
            <FaArrowRight className="text-sm" />
          </button>

        </div>


        {/* ================= REVIEW CARDS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {reviews.slice(0, 3).map((item, index) => (

            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 min-h-[210px] sm:min-h-[220px] hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >

              {/* User */}

              <div className="flex items-center gap-3 sm:gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                />

                <div className="min-w-0">

                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {item.role}
                  </p>

                </div>

              </div>


              {/* Stars */}

              <div className="flex items-center gap-1 mt-4 sm:mt-5 text-yellow-400 text-sm sm:text-base">

                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}

              </div>


              {/* Review */}

              <p className="mt-3 sm:mt-4 text-sm text-gray-500 leading-6">
                {item.review}
              </p>

            </div>

          ))}

        </div>


        {/* ================= SLIDER DOTS ================= */}

        <div className="flex justify-center items-center gap-2 mt-7 sm:mt-8">

          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-600"></span>

          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300"></span>

          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300"></span>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
