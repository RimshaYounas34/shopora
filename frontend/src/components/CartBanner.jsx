import { Link } from "react-router-dom";

function CartBanner() {
  return (
    <section
      className="relative h-[280px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10">
        <h1 className="text-5xl font-bold">Shopping Cart</h1>

        <div className="flex justify-center items-center gap-2 mt-4 text-lg">
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