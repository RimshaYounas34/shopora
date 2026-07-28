import { FaSearch } from "react-icons/fa";

import headphone from "../assets/images/headphones.jpg";
import watch from "../assets/images/watch.jpg";
import shoes from "../assets/images/shoes.jpg";

function BlogSidebar() {
  const categories = [
    "Electronics",
    "Fashion",
    "Accessories",
    "Lifestyle",
    "Technology",
    "Shopping",
  ];

  const recentPosts = [
    {
      title: "Top Wireless Headphones in 2026",
      image: headphone,
      date: "20 July 2026",
    },
    {
      title: "Smart Watches Buying Guide",
      image: watch,
      date: "18 July 2026",
    },
    {
      title: "Best Running Shoes for Men",
      image: shoes,
      date: "15 July 2026",
    },
  ];

  return (
    <aside className="w-full space-y-5 sm:space-y-6 lg:space-y-8">

      {/* ================= SEARCH ================= */}

      <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">
          Search
        </h3>

        <div className="relative">

          <input
            type="text"
            placeholder="Search..."
            className="w-full h-11 sm:h-12 border border-gray-200 rounded-xl py-3 pl-4 pr-11 text-sm sm:text-base text-gray-700 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition"
          />

          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />

        </div>

      </div>


      {/* ================= CATEGORIES ================= */}

      <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">
          Categories
        </h3>

        <div className="space-y-2 sm:space-y-3">

          {categories.map((item, index) => (
            <button
              key={index}
              className="block w-full text-left py-1 text-sm sm:text-base text-gray-600 hover:text-green-600 hover:translate-x-1 transition-all duration-200"
            >
              {item}
            </button>
          ))}

        </div>

      </div>


      {/* ================= RECENT POSTS ================= */}

      <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">
          Recent Posts
        </h3>

        <div className="space-y-4 sm:space-y-5">

          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 group"
            >

              {/* Image */}

              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-xl object-cover group-hover:scale-105 transition duration-300"
              />


              {/* Content */}

              <div className="min-w-0">

                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 leading-5 group-hover:text-green-600 transition line-clamp-2">
                  {post.title}
                </h4>

                <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
                  {post.date}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </aside>
  );
}

export default BlogSidebar;