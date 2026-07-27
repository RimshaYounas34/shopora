import {
  LuBadgeCheck,
  LuBadgeDollarSign,
  LuTruck,
  LuShieldCheck,
} from "react-icons/lu";
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
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-xl overflow-hidden">

          {services.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-6 bg-white hover:bg-gray-50 transition
              ${
                index !== services.length - 1
                  ? "lg:border-r border-gray-200"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="text-2xl text-emerald-600 flex-shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-gray-800 text-base">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
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