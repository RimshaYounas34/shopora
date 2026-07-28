
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function NewArrivals() {
  // New Arrivals products
  const newArrivals = products.filter(
    (product) => product.newArrival === true
  );

  return (
    <>
      <Navbar />

      {/* ================= BANNER ================= */}

      <section className="bg-gradient-to-r from-green-600 to-emerald-500 py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

          <p className="text-green-100 font-semibold uppercase tracking-wider text-sm sm:text-base">
            Shopora Collection
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3">
            New Arrivals
          </h1>

          <p className="max-w-2xl mx-auto mt-4 text-green-50 text-sm sm:text-base md:text-lg leading-relaxed">
            Explore our latest products and discover fresh new styles,
            trends and collections added to Shopora.
          </p>

        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">

          {/* Heading */}

          <div className="mb-8 sm:mb-10">

            <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
              Just Arrived
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Latest Products
            </h2>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Check out our newest products and latest arrivals.
            </p>

          </div>

          {/* Product Grid */}

          {newArrivals.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">

              {newArrivals.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-700">
                No new arrivals found.
              </h3>

              <p className="text-gray-500 mt-2">
                Add newArrival: true to your new products.
              </p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default NewArrivals;
