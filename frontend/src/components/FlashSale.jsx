
import { Link } from "react-router-dom";

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
    <section className="py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {banners.map((item, index) => (
            <div
              key={index}
              className={`
                bg-gradient-to-r ${item.bg}
                rounded-2xl sm:rounded-3xl
                overflow-hidden
                p-5 sm:p-6 lg:p-8
                min-h-[240px] sm:min-h-[260px]
                flex items-center justify-between
                gap-4
                hover:scale-[1.02]
                transition-transform duration-300
              `}
            >
              {/* Content */}

              <div className="text-white flex-1 min-w-0">

                <p className="text-xs sm:text-sm uppercase tracking-wider opacity-90">
                  {item.title}
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold whitespace-pre-line mt-2 sm:mt-3 leading-tight">
                  {item.heading}
                </h2>

                {/* Shop Now Button */}

                <Link
                  to="/shop"
                  className="
                    mt-5 sm:mt-7
                    inline-flex
                    items-center
                    bg-white
                    text-gray-800
                    px-4 sm:px-6
                    py-2.5 sm:py-3
                    rounded-full
                    text-sm sm:text-base
                    font-semibold
                    hover:bg-gray-100
                    transition
                    whitespace-nowrap
                  "
                >
                  {item.btn}
                </Link>

              </div>

              {/* Image */}

              <div className="w-28 sm:w-32 lg:w-36 flex-shrink-0 flex justify-center">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-32 sm:h-36 lg:h-40
                    object-contain
                    transition-transform
                    duration-300
                  "
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FlashSale;
