import { Link } from "react-router-dom";

function CartBanner() {
  return (
    <section
      className="relative h-[220px] sm:h-[250px] md:h-[280px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Shopping Cart
        </h1>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center gap-2 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">

          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-green-400">
            Cart
          </span>

        </div>

      </div>
    </section>
  );
}

export default CartBanner;