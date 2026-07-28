import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

import BlogBanner from "../components/BlogBanner";
import BlogSidebar from "../components/BlogSidebar";
import BlogGrid from "../components/BlogGrid";
import Pagination from "../components/Pagination";

function Blog() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= BLOG BANNER ================= */}

      <BlogBanner />

      {/* ================= BLOG SECTION ================= */}

      <section className="bg-gray-50 py-10 sm:py-12 md:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">

            {/* ================= BLOG CONTENT ================= */}

            <div className="lg:col-span-3 min-w-0">

              <BlogGrid />

              {/* Pagination */}

              <div className="mt-10 sm:mt-12 md:mt-14 flex justify-center">
                <Pagination />
              </div>

            </div>


            {/* ================= SIDEBAR ================= */}

            <aside className="w-full">

              <BlogSidebar />

            </aside>

          </div>

        </div>

      </section>


      {/* ================= NEWSLETTER ================= */}

      <Newsletter />


      {/* ================= FOOTER ================= */}

      <Footer />

    </>
  );
}

export default Blog;