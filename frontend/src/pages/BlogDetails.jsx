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
<> <Navbar />

    <section className="min-h-[60vh] sm:min-h-[65vh] bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12">

      <div className="text-center max-w-md">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Blog Not Found
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-500 leading-6">
          Sorry, the blog you are looking for does not exist.
        </p>

        <Link
          to="/blog"
          className="inline-block mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition"
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
<> <Navbar />


  {/* ================= BLOG DETAILS ================= */}

  <main className="bg-gray-50 py-8 sm:py-10 md:py-12">

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ================= BREADCRUMB ================= */}

      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">

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

        <span className="text-emerald-600 font-medium max-w-full truncate">
          {blog.title}
        </span>

      </div>


      {/* ================= BLOG ARTICLE ================= */}

      <article className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">


        {/* ================= BLOG IMAGE ================= */}

        <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />

        </div>


        {/* ================= BLOG CONTENT ================= */}

        <div className="p-5 sm:p-7 md:p-10 lg:p-12">


          {/* Category */}

          <span className="inline-block px-3 sm:px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-xs sm:text-sm font-semibold">
            {blog.category}
          </span>


          {/* Title */}

          <h1 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            {blog.title}
          </h1>


          {/* Author & Date */}

          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-gray-500 border-b pb-5 sm:pb-6">

            <span>
              By{" "}
              <strong className="text-gray-800">
                {blog.author}
              </strong>
            </span>

            <span className="hidden sm:block">
              |
            </span>

            <span>
              {blog.date}
            </span>

          </div>


          {/* Description */}

          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 leading-7 sm:leading-8 font-medium">
            {blog.description}
          </p>


          {/* Full Blog Content */}

          <div className="mt-6 sm:mt-8">

            {blog.content
              ?.trim()
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mb-5 sm:mb-6"
                >
                  {paragraph.trim()}
                </p>
              ))}

          </div>


          {/* Back To Blog */}

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t">

            <Link
              to="/blog"
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition"
            >
              ← Back to Blog
            </Link>

          </div>

        </div>

      </article>

    </div>

  </main>


  {/* ================= NEWSLETTER ================= */}

  <Newsletter />


  {/* ================= FOOTER ================= */}

  <Footer />
</>


);
}

export default BlogDetails;
