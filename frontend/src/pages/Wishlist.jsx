import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WishlistBanner from "../components/WishlistBanner";
import WishlistTable from "../components/WishlistTable";
// import EmptyWishlist from "../components/EmptyWishlist";

function Wishlist() {
  // false = products available
  // true = empty wishlist
  const isWishlistEmpty = false;

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <WishlistBanner />

      {/* Wishlist Section */}
      <section className="bg-gray-50 py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {isWishlistEmpty ? (
            // <EmptyWishlist />
            <div className="text-center text-gray-500 py-10 sm:py-16">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Wishlist is Empty
              </h2>

              <p className="mt-2 text-sm sm:text-base text-gray-400">
                You haven't added any products to your wishlist yet.
              </p>
            </div>
          ) : (
            <div className="w-full overflow-x-auto">
              <WishlistTable />
            </div>
          )}

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Wishlist;