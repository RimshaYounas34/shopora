import chair from "../assets/images/chair-banner.png";

function Banner() {
return ( <section className="py-5 sm:py-6 lg:py-8">


  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">

      {/* ================= TODAY BADGE ================= */}

      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm sm:text-base lg:text-xl font-bold text-center leading-tight border-2 sm:border-4 border-orange-300 shadow-md">
        Today
        <br />
        Only
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">

        {/* ================= LEFT CONTENT ================= */}

        <div className="text-center lg:text-left pt-8 sm:pt-4 lg:pt-0">

          <p className="text-orange-500 font-semibold mb-3 text-sm sm:text-base">
            Deal Of The Day
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Special Discount
            <br />
            Up To 45% Off
          </h2>

          {/* ================= TIMER ================= */}

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8">

            {[
              { num: "02", text: "Days" },
              { num: "14", text: "Hours" },
              { num: "32", text: "Mins" },
              { num: "45", text: "Secs" },
            ].map((item, index) => (

              <div
                key={index}
                className="w-[68px] h-[68px] sm:w-20 sm:h-20 rounded-lg sm:rounded-xl bg-white shadow flex flex-col items-center justify-center"
              >

                <h3 className="text-xl sm:text-2xl font-bold">
                  {item.num}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

          {/* ================= SHOP BUTTON ================= */}

          <button className="mt-6 sm:mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-7 sm:px-8 py-3 rounded-lg font-semibold transition duration-300">
            Shop Now
          </button>

        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="relative flex justify-center items-center">

          <img
            src={chair}
            alt="Featured Chair"
            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[430px] h-auto object-contain"
          />

        </div>

      </div>

    </div>

  </div>

</section>


);
}

export default Banner;
