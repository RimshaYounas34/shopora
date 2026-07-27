import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";
import blog4 from "../assets/images/blog4.jpg";

function BlogCard() {
const blogs = [
{
image: blog1,
badge: "Shopping Tips",
badgeColor: "bg-green-100 text-green-600",
title: "10 Tips for Smart Online Shopping",
date: "May 20, 2024",
},
{
image: blog2,
badge: "Trends",
badgeColor: "bg-orange-100 text-orange-500",
title: "Top Fashion Trends Summer 2024",
date: "May 18, 2024",
},
{
image: blog3,
badge: "Guides",
badgeColor: "bg-green-100 text-green-600",
title: "How to Choose the Best Smartwatch",
date: "May 15, 2024",
},
{
image: blog4,
badge: "Lifestyle",
badgeColor: "bg-cyan-100 text-cyan-600",
title: "Best Home Decor Ideas on a Budget",
date: "May 12, 2024",
},
];

return ( <section className="py-12 bg-white">

```
  <div className="max-w-7xl mx-auto px-4">

    {/* ================= HEADER ================= */}

    <div className="flex items-center justify-between mb-8">

      <h2 className="text-3xl font-bold text-gray-900">
        Latest News & Blogs
      </h2>

      {/* View All Posts */}

      <Link
        to="/blog"
        className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition"
      >
        View All Posts

        <FaArrowRight className="text-xs" />
      </Link>

    </div>


    {/* ================= BLOG CARDS ================= */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {blogs.map((blog, index) => (

        <div
          key={index}
          className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
        >

          {/* ================= IMAGE ================= */}

          <div className="overflow-hidden">

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
            />

          </div>


          {/* ================= CONTENT ================= */}

          <div className="p-5">

            {/* Badge */}

            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${blog.badgeColor}`}
            >
              {blog.badge}
            </span>


            {/* Title */}

            <h3 className="mt-3 text-lg font-semibold text-gray-900 leading-7 line-clamp-2 min-h-[56px]">
              {blog.title}
            </h3>


            {/* Date + Read More */}

            <div className="mt-5 flex items-center justify-between">

              <span className="text-sm text-gray-500">
                {blog.date}
              </span>


              {/* Read More */}

              <Link
                to="/blog"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition"
              >
                Read More →
              </Link>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

);
}

export default BlogCard;
