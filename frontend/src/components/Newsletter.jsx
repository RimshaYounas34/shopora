import { useState } from "react";
import toast from "react-hot-toast";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      const response = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success("🎉 Thank you for subscribing!");

      setEmail("");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-3xl px-8 lg:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          {/* Left */}

          <div className="text-white max-w-xl">
            <span className="uppercase tracking-widest text-emerald-100 text-sm font-semibold">
              Newsletter
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold mt-2">
              Subscribe Our Newsletter
            </h2>

            <p className="mt-3 text-emerald-100 leading-relaxed">
              Get the latest updates, exclusive discounts, new arrivals and
              special offers delivered directly to your inbox.
            </p>

            {message && (
              <p className="mt-4 font-medium text-white">{message}</p>
            )}
          </div>

          {/* Right */}

          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-auto flex flex-col sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full sm:w-80 lg:w-96 px-5 py-4 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none outline-none text-gray-700"
            />

            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-4 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none text-white font-semibold transition whitespace-nowrap ${
                loading
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gray-900 hover:bg-black"
              }`}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
