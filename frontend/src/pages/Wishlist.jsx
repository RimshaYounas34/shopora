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

      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          {isWishlistEmpty ? (
            // <EmptyWishlist />
            <div className="text-center text-gray-500">
              Wishlist is Empty
            </div>
          ) : (
            <WishlistTable />
          )}

        </div>

      </section>

      {/* Footer */}

      <Footer />

    </>
  );
}

export default Wishlist;