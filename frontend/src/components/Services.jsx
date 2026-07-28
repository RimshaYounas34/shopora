
import {
  FaMedal,
  FaTags,
  FaShippingFast,
  FaShieldAlt,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaMedal />,
      title: "Best Quality",
      desc: "Premium quality products",
    },
    {
      icon: <FaTags />,
      title: "Best Prices",
      desc: "Best deals on every purchase",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      desc: "Fast and reliable delivery",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Store",
      desc: "Trusted by thousands of customers",
    },
  ];

  return (
    <section className="py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">

        <div className="
          grid
          grid-cols-1
          xs:grid-cols-2
          sm:grid-cols-2
          lg:grid-cols-4
          border
          border-gray-200
          rounded-xl
          overflow-hidden
        ">

          {services.map((item, index) => (
            <div
              key={index}
              className={`
                flex
                items-center
                gap-3
                sm:gap-4
                p-4
                sm:p-5
                lg:p-6
                bg-white
                hover:bg-gray-50
                transition

                ${
                  index !== services.length - 1
                    ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                    : ""
                }

                ${
                  index === services.length - 2
                    ? "sm:border-b-0 lg:border-b-0"
                    : ""
                }
              `}
            >

              {/* Icon */}

              <div className="
                text-xl
                sm:text-2xl
                text-emerald-600
                flex-shrink-0
              ">
                {item.icon}
              </div>

              {/* Text */}

              <div className="min-w-0">

                <h3 className="
                  font-semibold
                  text-gray-800
                  text-sm
                  sm:text-base
                  truncate
                ">
                  {item.title}
                </h3>

                <p className="
                  text-xs
                  sm:text-sm
                  text-gray-500
                  mt-1
                  leading-5
                ">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;
