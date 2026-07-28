
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import DealsBanner from "../components/DealsBanner";
import DealOffer from "../components/DealOffer";
import DealProducts from "../components/DealProducts";

function Deals() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= DEALS BANNER ================= */}

      <main>

        <DealsBanner />


        {/* ================= SPECIAL OFFER ================= */}

        <DealOffer />


        {/* ================= DEAL PRODUCTS ================= */}

        <DealProducts />

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default Deals;
