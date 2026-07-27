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
      <Navbar />

      <BlogBanner />

      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-10">

            {/* Blog Grid */}

            <div className="lg:col-span-3">

              <BlogGrid />

              <div className="mt-14 flex justify-center">
                <Pagination />
              </div>

            </div>

            {/* Sidebar */}

            <div>

              <BlogSidebar />

            </div>

          </div>

        </div>

      </section>

      <Newsletter />

      <Footer />
    </>
  );
}

export default Blog;