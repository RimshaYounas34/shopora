import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WatchVideo() {
return (
<> <Navbar />

  {/* ================= VIDEO SECTION ================= */}

  <section className="bg-[#fff8f2] py-12 sm:py-16 lg:py-20">

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      {/* Heading */}

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
        Watch Our Video
      </h1>

      {/* Description */}

      <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Learn more about Shopora and explore our products.
      </p>

      {/* Video */}

      <div className="mt-8 sm:mt-10 lg:mt-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-black">

        <div className="relative w-full aspect-video">

          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/9No-FiEInLA"
            title="Shopora Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </div>

  </section>

  <Footer />
</>


);
}

export default WatchVideo;
