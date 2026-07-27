import chair from "../assets/images/chair-banner.png";

function Banner() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 px-12 py-12">

          {/* Today Badge */}
          <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold border-4 border-orange-300">
            Today
            <br />
            Only
          </div>

          <div className="grid lg:grid-cols-2 items-center gap-10">

            {/* Left */}
            <div>

              <p className="text-orange-500 font-semibold mb-3">
                Deal Of The Day
              </p>

              <h2 className="text-5xl font-bold leading-tight text-gray-900">
                Special Discount
                <br />
                Up To 45% Off
              </h2>

              {/* Timer */}
              <div className="flex gap-4 mt-8">

                {[
                  { num: "02", text: "Days" },
                  { num: "14", text: "Hours" },
                  { num: "32", text: "Mins" },
                  { num: "45", text: "Secs" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 rounded-xl bg-white shadow flex flex-col items-center justify-center"
                  >
                    <h3 className="text-2xl font-bold">
                      {item.num}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>

              <button className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Shop Now
              </button>

            </div>

            {/* Right */}
            <div className="relative flex justify-center">

              <img
                src={chair}
                alt=""
                className="w-[430px] object-contain"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Banner;