import { Link } from "react-router-dom";

function BlogPostCard({ blog }) {
return ( <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

  {/* ================= BLOG IMAGE ================= */}

  <div className="relative overflow-hidden shrink-0">

    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-44 sm:h-48 md:h-52 lg:h-48 xl:h-52 object-cover group-hover:scale-105 transition duration-500"
    />

  </div>


  {/* ================= BLOG CONTENT ================= */}

  <div className="p-4 sm:p-5 flex flex-col flex-1">

    {/* Category */}

    <span className="text-xs sm:text-sm font-medium text-emerald-600">
      {blog.category}
    </span>


    {/* Title */}

    <h3 className="mt-2 text-lg sm:text-xl font-bold text-gray-900 leading-6 sm:leading-7 line-clamp-2 group-hover:text-emerald-600 transition">
      {blog.title}
    </h3>


    {/* Description */}

    <p className="mt-3 text-gray-500 text-sm leading-6 line-clamp-2">
      {blog.description}
    </p>


    {/* Author & Date */}

    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-gray-400">

      <span className="truncate max-w-[50%]">
        {blog.author}
      </span>

      <span className="whitespace-nowrap">
        {blog.date}
      </span>

    </div>


    {/* Read More */}

    <Link
      to={`/blog/${blog.id}`}
      className="inline-flex items-center mt-auto pt-5 text-sm sm:text-base text-emerald-600 font-semibold hover:text-emerald-700 transition"
    >
      Read More →
    </Link>

  </div>

</article>

);
}

export default BlogPostCard;
