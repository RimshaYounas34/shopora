import { Link } from "react-router-dom";

function BlogPostCard({ blog }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">

      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5">

        {/* Category */}
        <span className="text-sm font-medium text-emerald-600">
          {blog.category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-xl font-bold text-gray-900 leading-7 group-hover:text-emerald-600 transition">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-500 text-sm leading-6 line-clamp-2">
          {blog.description}
        </p>

        {/* Author & Date */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>

        {/* Read More */}
        <Link
          to={`/blog/${blog.id}`}
          className="inline-block mt-5 text-emerald-600 font-semibold hover:text-emerald-700 transition"
        >
          Read More →
        </Link>

      </div>

    </article>
  );
}

export default BlogPostCard;