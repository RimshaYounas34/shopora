
import { Link } from "react-router-dom";

import electronics from "../assets/images/electronics.jpg";
import fashion from "../assets/images/fashion.jpg";
import grocery from "../assets/images/grocery.jpg";
import beauty from "../assets/images/beauty.jpg";
import furniture from "../assets/images/furniture.jpg";
import watch from "../assets/images/watch.jpg";
import sports from "../assets/images/sports.jpg";
import shoes from "../assets/images/shoes.jpg";

import {
  FaLaptop,
  FaTshirt,
  FaShoppingBasket,
  FaSpa,
  FaCouch,
  FaClock,
  FaFutbol,
  FaShoePrints,
} from "react-icons/fa";

function Categories() {
  const categories = [
    {
      title: "Electronics",
      icon: <FaLaptop />,
      image: electronics,
      path: "/electronics",
    },
    {
      title: "Fashion",
      icon: <FaTshirt />,
      image: fashion,
      path: "/fashion",
    },
    {
      title: "Groceries",
      icon: <FaShoppingBasket />,
      image: grocery,
      path: "/groceries",
    },
    {
      title: "Beauty",
      icon: <FaSpa />,
      image: beauty,
      path: "/beauty",
    },
    {
      title: "Furniture",
      icon: <FaCouch />,
      image: furniture,
      path: "/furniture",
    },
    {
      title: "Watches",
      icon: <FaClock />,
      image: watch,
      path: "/watches",
    },
    {
      title: "Sports",
      icon: <FaFutbol />,
      image: sports,
      path: "/sports",
    },
    {
      title: "Shoes",
      icon: <FaShoePrints />,
      image: shoes,
      path: "/shoes",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f8faf8] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-8 sm:mb-10 lg:mb-12">

          <p className="text-green-600 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            Shop By Category
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Explore Our Categories
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-6 sm:leading-7">
            Find everything you need from our wide range of premium
            collections.
          </p>

        </div>


        {/* ================= SMALL CATEGORY CARDS ================= */}

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-5 mb-10 sm:mb-12 lg:mb-14">

          {categories.map((item, index) => (

            <Link
              key={index}
              to={item.path}
              className="
                bg-white
                rounded-xl sm:rounded-2xl
                p-3 sm:p-4 lg:p-5
                text-center
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1 lg:hover:-translate-y-2
                transition
                duration-300
                cursor-pointer
                block
              "
            >

              {/* ICON */}

              <div
                className="
                  w-12 h-12
                  sm:w-14 sm:h-14
                  mx-auto
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-green-100
                  text-green-600
                  text-xl sm:text-2xl
                "
              >
                {item.icon}
              </div>


              {/* TITLE */}

              <h3 className="mt-3 text-xs sm:text-sm font-semibold text-gray-800 leading-5">
                {item.title}
              </h3>

            </Link>

          ))}

        </div>


        {/* ================= LARGE CATEGORY IMAGES ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">

          {categories.map((item, index) => (

            <Link
              key={index}
              to={item.path}
              className="
                group
                relative
                h-60
                sm:h-64
                lg:h-72
                rounded-2xl sm:rounded-3xl
                overflow-hidden
                cursor-pointer
                block
                shadow-sm
              "
            >

              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                "
              />


              {/* OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
              ></div>


              {/* CATEGORY TITLE */}

              <h3
                className="
                  absolute
                  bottom-4
                  left-4
                  sm:bottom-5
                  sm:left-5
                  lg:bottom-6
                  lg:left-6
                  text-white
                  text-xl
                  sm:text-2xl
                  font-bold
                "
              >
                {item.title}
              </h3>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;