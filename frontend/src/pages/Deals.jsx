import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DealsBanner from "../components/DealsBanner";
import DealOffer from "../components/DealOffer";
import DealProducts from "../components/DealProducts";

function Deals() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <DealsBanner />

      {/* Offer Section */}
      <DealOffer />

      {/* Deal Products */}
      <DealProducts />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Deals;