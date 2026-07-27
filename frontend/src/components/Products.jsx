import ProductCard from "./ProductCard";
import products from "../data/products";

function Products() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

          <h2 className="text-3xl font-bold">
            Featured Products
          </h2>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="bg-green-600 text-white px-4 py-2 rounded-full">
              All
            </button>

            <button className="text-gray-600 hover:text-green-600">
              Best Sellers
            </button>

            <button className="text-gray-600 hover:text-green-600">
              Top Rated
            </button>

            <button className="text-gray-600 hover:text-green-600">
              New Arrivals
            </button>
          </div>

          <button className="text-green-600 font-semibold mt-4 md:mt-0">
            View All Products →
          </button>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>s
    </section>
  );
}

export default Products;