
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../data/products";

function Products() {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">

        {/* ================= HEADER ================= */}

        <div className="mb-7 sm:mb-8">

          {/* Title + View All */}

          <div className="flex items-center justify-between gap-3 mb-5">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Featured Products
            </h2>

            {/* View All Products */}

            <Link
              to="/shop"
              className="text-green-600 font-semibold text-sm sm:text-base whitespace-nowrap hover:text-green-700 transition"
            >
              View All Products →
            </Link>

          </div>


          {/* ================= CATEGORY BUTTONS ================= */}

          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">

            {/* All */}

            <Link
              to="/shop"
              className="
                bg-green-600
                text-white
                px-4 sm:px-5
                py-2.5
                rounded-full
                text-sm sm:text-base
                font-medium
                whitespace-nowrap
                flex-shrink-0
                transition
                hover:bg-green-700
              "
            >
              All
            </Link>


            {/* Best Sellers */}

            <Link
              to="/best-sellers"
              className="
                text-gray-600
                hover:text-green-600
                px-2.5 sm:px-4
                py-2.5
                rounded-full
                text-sm sm:text-base
                font-medium
                whitespace-nowrap
                flex-shrink-0
                transition
              "
            >
              Best Sellers
            </Link>


            {/* Top Rated */}

            <Link
              to="/top-rated"
              className="
                text-gray-600
                hover:text-green-600
                px-2.5 sm:px-4
                py-2.5
                rounded-full
                text-sm sm:text-base
                font-medium
                whitespace-nowrap
                flex-shrink-0
                transition
              "
            >
              Top Rated
            </Link>


            {/* New Arrivals */}

            <Link
              to="/new-arrivals"
              className="
                text-gray-600
                hover:text-green-600
                px-2.5 sm:px-4
                py-2.5
                rounded-full
                text-sm sm:text-base
                font-medium
                whitespace-nowrap
                flex-shrink-0
                transition
              "
            >
              New Arrivals
            </Link>

          </div>

        </div>


        {/* ================= PRODUCTS GRID ================= */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;
