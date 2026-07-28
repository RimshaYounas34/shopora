
import { useState } from "react";

function ShopSidebar() {
  const [price, setPrice] = useState(150);

  const categories = [
    { name: "Electronics", count: 18 },
    { name: "Fashion", count: 15 },
    { name: "Home & Kitchen", count: 12 },
    { name: "Beauty", count: 9 },
    { name: "Sports", count: 14 },
    { name: "Toys", count: 8 },
    { name: "Automotive", count: 11 },
    { name: "Books", count: 7 },
  ];

  const brands = [
    "Apple",
    "Samsung",
    "Sony",
    "Nike",
    "Adidas",
    "Puma",
    "WEJ",
    "Dell",
    "Huda Beauty",
    "J.",
  ];

  return (
    <aside className="w-full">

      {/* ================= CATEGORIES ================= */}

      <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 lg:p-6 mb-5">

        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-5">
          Categories
        </h3>

        <div className="space-y-3 sm:space-y-4">

          {categories.map((item, index) => (
            <label
              key={index}
              className="flex items-center justify-between gap-3 cursor-pointer group"
            >

              <div className="flex items-center gap-3 min-w-0">

                <input
                  type="checkbox"
                  className="accent-emerald-600 w-4 h-4 flex-shrink-0 cursor-pointer"
                />

                <span className="text-sm sm:text-base text-gray-600 group-hover:text-emerald-600 transition truncate">
                  {item.name}
                </span>

              </div>

              <span className="text-gray-400 text-xs sm:text-sm flex-shrink-0">
                ({item.count})
              </span>

            </label>
          ))}

        </div>

      </div>


      {/* ================= PRICE RANGE ================= */}

      <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 lg:p-6 mb-5">

        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-5">
          Price Range
        </h3>

        <input
          type="range"
          min="0"
          max="300"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />

        <div className="flex items-center justify-between mt-4 text-sm sm:text-base text-gray-600">

          <span>
            $0
          </span>

          <span className="font-semibold text-emerald-600">
            ${price}
          </span>

        </div>

      </div>


      {/* ================= BRANDS ================= */}

      <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 lg:p-6">

        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-5">
          Brands
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">

          {brands.map((brand, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer group"
            >

              <input
                type="checkbox"
                className="accent-emerald-600 w-4 h-4 flex-shrink-0 cursor-pointer"
              />

              <span className="text-sm sm:text-base text-gray-600 group-hover:text-emerald-600 transition truncate">
                {brand}
              </span>

            </label>
          ))}

        </div>

      </div>

    </aside>
  );
}

export default ShopSidebar;
