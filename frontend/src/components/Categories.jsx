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

    <section className="py-20 bg-[#f8faf8]">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-12">

          <p className="text-green-600 font-semibold uppercase tracking-widest">
            Shop By Category
          </p>


          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Explore Our Categories
          </h2>


          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Find everything you need from our wide range of premium
            collections.
          </p>

        </div>



        {/* Small Category Cards */}


        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 mb-14">


          {categories.map((item, index) => (

            <Link

              key={index}

              to={item.path}

              className="
              bg-white
              rounded-2xl
              p-5
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-2
              transition
              cursor-pointer
              block
              "

            >


              <div
                className="
                w-14 h-14
                mx-auto
                flex
                items-center
                justify-center
                rounded-full
                bg-green-100
                text-green-600
                text-2xl
                "
              >

                {item.icon}

              </div>



              <h3 className="mt-3 text-sm font-semibold text-gray-800">

                {item.title}

              </h3>


            </Link>

          ))}


        </div>





        {/* Large Category Images */}


        <div className="grid md:grid-cols-4 gap-6">


          {categories.map((item, index) => (


            <Link

              key={index}

              to={item.path}

              className="
              group
              relative
              h-72
              rounded-3xl
              overflow-hidden
              cursor-pointer
              block
              "

            >


              <img

                src={item.image}

                alt={item.title}

                className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition
                duration-500
                "

              />



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



              <h3

                className="
                absolute
                bottom-6
                left-6
                text-white
                text-2xl
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