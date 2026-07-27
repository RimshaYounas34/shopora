import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WatchVideo() {
  return (
    <>
      <Navbar />

      <section className="bg-[#fff8f2] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold text-gray-800">
            Watch Our Video
          </h1>

          <p className="mt-5 text-gray-500">
            Learn more about Shopora and explore our products.
          </p>

          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">

            <iframe
              className="w-full h-[600px]"
              src="https://www.youtube.com/embed/9No-FiEInLA"
              title="Shopora Video"
              allowFullScreen
            ></iframe>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default WatchVideo;