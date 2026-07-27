import { useState } from "react";

function ShopSidebar() {
  const [price, setPrice] = useState(150);

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Toys",
    "Automotive",
    "Books",
  ];

  const brands = [
    "Apple",
    "Samsung",
    "Sony",
    "Nike",
    "Adidas",
    "Puma",
    " Wej",
    "Dell",
    " Hudabeauty",
    "j.",

  ];

  return (
    <aside className="w-full">

      {/* Categories */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">

        <h3 className="text-xl font-bold text-gray-800 mb-5">
          Categories
        </h3>

        <div className="space-y-4">

          {categories.map((item, index) => (
            <label
              key={index}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">

                <input
                  type="checkbox"
                  className="accent-emerald-600"
                />

                <span className="text-gray-600">
                  {item}
                </span>

              </div>

              <span className="text-gray-400 text-sm">
                ({Math.floor(Math.random() * 20 + 5)})
              </span>

            </label>
          ))}

        </div>

      </div>

      {/* Price */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">

        <h3 className="text-xl font-bold text-gray-800 mb-5">
          Price Range
        </h3>

        <input
          type="range"
          min="0"
          max="300"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full accent-emerald-600"
        />

        <div className="flex justify-between mt-4 text-gray-600">

          <span>$0</span>

          <span className="font-semibold text-emerald-600">
            ${price}
          </span>

        </div>

      </div>

      {/* Brands */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-gray-800 mb-5">
          Brands
        </h3>

        <div className="space-y-4">

          {brands.map((brand, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer"
            >

              <input
                type="checkbox"
                className="accent-emerald-600"
              />

              <span className="text-gray-600">
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