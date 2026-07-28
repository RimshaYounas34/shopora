import { useState } from "react";
import toast from "react-hot-toast";

function Newsletter() {
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault();

if (!email.trim()) {
  toast.error("Please enter your email address.");
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  toast.error("Please enter a valid email address.");
  return;
}

try {
  setLoading(true);

  const response = await fetch(
    "http://localhost:5000/api/newsletter",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong"
    );
  }

  toast.success("🎉 Thank you for subscribing!");

  setEmail("");

} catch (error) {
  toast.error(
    error.message || "Something went wrong"
  );

} finally {
  setLoading(false);
}


};

return ( <section className="py-10 sm:py-12 lg:py-16 bg-white">


  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl sm:rounded-3xl px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 shadow-xl">

      {/* ================= LEFT CONTENT ================= */}

      <div className="text-white w-full lg:max-w-xl">

        <span className="uppercase tracking-[3px] sm:tracking-widest text-emerald-100 text-xs sm:text-sm font-semibold">
          Newsletter
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-tight">
          Subscribe Our Newsletter
        </h2>

        <p className="mt-3 text-sm sm:text-base text-emerald-100 leading-6 sm:leading-relaxed max-w-lg">
          Get the latest updates, exclusive discounts, new arrivals and
          special offers delivered directly to your inbox.
        </p>

      </div>


      {/* ================= RIGHT FORM ================= */}

      <form
        onSubmit={handleSubmit}
        className="w-full lg:max-w-xl"
      >

        <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0">

          {/* Email Input */}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={loading}
            className="w-full sm:flex-1 min-w-0 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none outline-none text-gray-700 text-sm sm:text-base disabled:bg-gray-100"
          />


          {/* Subscribe Button */}

          <button
            type="submit"
            disabled={loading}
            className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-r-xl sm:rounded-l-none text-white font-semibold transition whitespace-nowrap ${
              loading
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-gray-900 hover:bg-black"
            }`}
          >
            {loading
              ? "Subscribing..."
              : "Subscribe"}
          </button>

        </div>

      </form>

    </div>

  </div>

</section>


);
}

export default Newsletter;
