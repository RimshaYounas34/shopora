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
    <div className="space-y-8">

      {/* Search */}

      <div className="bg-white p-6 rounded-3xl shadow-sm border">

        <h3 className="text-xl font-bold mb-5">
          Search
        </h3>

        <div className="relative">

          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-xl py-3 pl-4 pr-12 outline-none focus:border-green-600"
          />

          <FaSearch className="absolute right-4 top-4 text-gray-400" />

        </div>

      </div>

      {/* Categories */}

      <div className="bg-white p-6 rounded-3xl shadow-sm border">

        <h3 className="text-xl font-bold mb-5">
          Categories
        </h3>

        <div className="space-y-3">

          {categories.map((item, index) => (
            <button
              key={index}
              className="block w-full text-left hover:text-green-600 transition"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      {/* Recent Posts */}

      <div className="bg-white p-6 rounded-3xl shadow-sm border">

        <h3 className="text-xl font-bold mb-5">
          Recent Posts
        </h3>

        <div className="space-y-5">

          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="flex gap-4"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div>

                <h4 className="font-semibold text-sm hover:text-green-600 cursor-pointer transition">
                  {post.title}
                </h4>

                <p className="text-gray-500 text-sm mt-2">
                  {post.date}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default BlogSidebar;