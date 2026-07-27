import girls from "../assets/images/girls.png";
import watch from "../assets/images/watch-banner.png";
import chair from "../assets/images/chair.png";

function FlashSale() {

  const banners = [

    {
      title: "Fashion Collection",
      heading: "New Arrivals\n50% Off",
      btn: "Shop Now →",
      image: girls,
      bg: "from-green-600 to-green-500",
    },

    {
      title: "Smart Watches",
      heading: "Mega Deal\nUp To 40% Off",
      btn: "Shop Now →",
      image: watch,
      bg: "from-orange-500 to-yellow-400",
    },

    {
      title: "Home Essentials",
      heading: "Special Offer\nUp To 30% Off",
      btn: "Shop Now →",
      image: chair,
      bg: "from-blue-600 to-cyan-500",
    },

  ];

  return (

    <section className="pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-6">

          {banners.map((item, index) => (

            <div
              key={index}
              className={`bg-gradient-to-r ${item.bg} rounded-3xl overflow-hidden p-8 flex justify-between items-center hover:scale-[1.02] duration-300`}
            >

              <div className="text-white">

                <p className="text-sm uppercase tracking-wider opacity-90">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold whitespace-pre-line mt-3">
                  {item.heading}
                </h2>

                <button className="mt-8 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
                  {item.btn}
                </button>

              </div>

              <img
                src={item.image}
                alt=""
                className="w-36 object-contain"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default FlashSale;