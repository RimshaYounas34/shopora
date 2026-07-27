import { useState, useEffect } from "react";

function ProductGallery({ product }) {

  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const [active, setActive] = useState(product.image);

  useEffect(() => {
    setActive(product.image);
  }, [product]);

  return (
    <div>

      {/* Main Image */}

      <div className="border rounded-2xl p-8 bg-white">

        <img
          src={active}
          alt={product.title}
          className="w-full h-[420px] object-contain"
        />

      </div>

      {/* Thumbnails */}

      <div className="grid grid-cols-4 gap-4 mt-5">

        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActive(img)}
            className={`border rounded-xl p-3 transition hover:border-emerald-600 ${
              active === img
                ? "border-emerald-600"
                : ""
            }`}
          >
            <img
              src={img}
              alt={product.title}
              className="h-20 mx-auto object-contain"
            />
          </button>
        ))}
              </div>

    </div>
  );
}

export default ProductGallery;