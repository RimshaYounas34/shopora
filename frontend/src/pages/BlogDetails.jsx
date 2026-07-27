import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

import blogs from "../data/blogs";

function BlogDetails() {
  const { id } = useParams();

  // Selected blog find karo
  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  // Agar blog nahi mila
  if (!blog) {
    return (
      <>
        <Navbar />

        <section className="min-h-[60vh] bg-gray-50 flex items-center justify-center px-6">
          <div className="text-center">

            <h1 className="text-4xl font-bold text-gray-800">
              Blog Not Found
            </h1>

            <p className="mt-4 text-gray-500">
              Sorry, the blog you are looking for does not exist.
            </p>

            <Link
              to="/blog"
              className="inline-block mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Back to Blog
            </Link>

          </div>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* ================= BLOG DETAILS ================= */}

      <main className="bg-gray-50 py-12">

        <div className="max-w-5xl mx-auto px-6">

          {/* Breadcrumb */}

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8">

            <Link
              to="/"
              className="hover:text-emerald-600 transition"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/blog"
              className="hover:text-emerald-600 transition"
            >
              Blog
            </Link>

            <span>/</span>

            <span className="text-emerald-600 font-medium">
              {blog.title}
            </span>

          </div>

          {/* Blog Article */}

          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">

            {/* Blog Image */}

            <div className="w-full h-[300px] md:h-[450px] overflow-hidden">

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />

            </div>

            {/* Blog Content */}

            <div className="p-6 md:p-12">

              {/* Category */}

              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold">
                {blog.category}
              </span>

              {/* Title */}

              <h1 className="mt-5 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                {blog.title}
              </h1>

              {/* Author & Date */}

              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b pb-6">

                <span>
                  By{" "}
                  <strong className="text-gray-800">
                    {blog.author}
                  </strong>
                </span>

                <span>
                  {blog.date}
                </span>

              </div>

              {/* Description */}

              <p className="mt-8 text-xl text-gray-600 leading-8 font-medium">
                {blog.description}
              </p>

              {/* Full Blog Content */}

              <div className="mt-8">

                {blog.content
                  ?.trim()
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-600 text-lg leading-8 mb-6"
                    >
                      {paragraph.trim()}
                    </p>
                  ))}

              </div>

              {/* Back To Blog */}

              <div className="mt-10 pt-8 border-t">

                <Link
                  to="/blog"
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  ← Back to Blog
                </Link>

              </div>

            </div>

          </article>

        </div>

      </main>

      <Newsletter />

      <Footer />
    </>
  );
}

export default BlogDetails;