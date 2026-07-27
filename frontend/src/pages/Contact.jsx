import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Message sent successfully! 🎉");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
{/* Premium Contact Banner */}

<section className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-white to-green-50 border-b">

  {/* Background Blur */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-4">

    <div className="grid lg:grid-cols-2 items-center py-5">

      {/* Left Side */}

      <div>

        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
          📞 Contact Support
        </span>

        <h1 className="mt-4 text-5xl font-extrabold text-gray-900">
          Get In
          <span className="text-green-600"> Touch</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-lg">
          We'd love to hear from you. Whether you have a question, feedback,
          or need support, our team is always here to help you.
        </p>

        <div className="flex items-center gap-4 mt-6">

          <a
  href="#contact-form"
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
>
  Contact Now
</a>

          <div className="text-sm text-gray-500">

            <span className="hover:text-green-600 cursor-pointer">
              Home
            </span>

            <span className="mx-2">/</span>

            <span className="font-semibold text-green-600">
              Contact
            </span>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex justify-end">

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-2 transition">

            <h3 className="text-3xl">📧</h3>

            <p className="mt-2 font-semibold text-gray-800">
              Email Us
            </p>

            <span className="text-sm text-gray-500">
              24/7 Support
            </span>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-2 transition">

            <h3 className="text-3xl">💬</h3>

            <p className="mt-2 font-semibold text-gray-800">
              Live Chat
            </p>

            <span className="text-sm text-gray-500">
              Instant Help
            </span>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-2 transition">

            <h3 className="text-3xl">📍</h3>

            <p className="mt-2 font-semibold text-gray-800">
              Our Office
            </p>

            <span className="text-sm text-gray-500">
              Lahore, Pakistan
            </span>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-2 transition">

            <h3 className="text-3xl">⏰</h3>

            <p className="mt-2 font-semibold text-gray-800">
              Working Hours
            </p>

            <span className="text-sm text-gray-500">
              Mon - Sat
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Contact */}

      <section className="bg-[#f8faf8] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <span className="text-green-600 uppercase tracking-[3px] font-semibold">
              Contact Information
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Let's Start a Conversation
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Have any questions? Fill out the form and our team will get
              back to you within 24 hours.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left */}

<div
  id="contact-form"
  className="bg-white rounded-3xl shadow-xl border border-green-100 p-10"
>
              <h3 className="text-2xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                    <FaMapMarkerAlt className="text-green-600 text-xl" />

                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      Address
                    </h4>

                    <p className="text-gray-500 mt-1">
                      Lahore, Pakistan
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                    <FaPhoneAlt className="text-green-600 text-xl" />

                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      Phone
                    </h4>

                    <p className="text-gray-500 mt-1">
                      +92 300 1234567
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                    <FaEnvelope className="text-green-600 text-xl" />

                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      Email
                    </h4>

                    <p className="text-gray-500 mt-1">
                      support@shopora.com
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                    <FaClock className="text-green-600 text-xl" />

                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      Working Hours
                    </h4>

                    <p className="text-gray-500 mt-1">
                      Monday - Saturday
                    </p>

                    <p className="text-gray-500">
                      9:00 AM - 6:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-10">

              <h3 className="text-2xl font-bold mb-8">
                Send Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
                />
                                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl text-white font-semibold text-lg transition ${
                    loading
                      ? "bg-green-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {loading ? "Sending Message..." : "Send Message"}
                </button>

              </form>

            </div>

          </div>

          {/* Google Map */}

          <div className="mt-16">

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-green-100">

              <iframe
                title="Location Map"
                src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                className="w-full h-[420px] border-0"
                loading="lazy"
              ></iframe>

            </div>

          </div>

          {/* Extra Contact Cards */}

          {/* Extra Contact Cards */}

<div className="grid md:grid-cols-3 gap-6 mt-16">

  {/* WhatsApp */}

  <a
    href="https://wa.me/923111734194"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-2xl border border-green-100 shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300 group"
  >

    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">

      <FaPhoneAlt className="text-green-600 text-2xl group-hover:text-white transition" />

    </div>

    <h3 className="text-xl font-bold mt-5">
      WhatsApp
    </h3>

    <p className="text-gray-500 mt-2">
      +92 311 1734194
    </p>

    <p className="text-green-600 font-medium mt-2 text-sm">
      Click to Chat
    </p>

  </a>

  {/* Email */}

  <a
    href="mailto:mahersaba441@gmail.com"
    className="bg-white rounded-2xl border border-green-100 shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300 group"
  >

    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">

      <FaEnvelope className="text-green-600 text-2xl group-hover:text-white transition" />

    </div>

    <h3 className="text-xl font-bold mt-5">
      Email
    </h3>

    <p className="text-gray-500 mt-2 break-all">
      mahersaba441@gmail.com
    </p>

    <p className="text-green-600 font-medium mt-2 text-sm">
      Click to Send Email
    </p>

  </a>

  {/* Working Hours */}

  <details className="bg-white rounded-2xl border border-green-100 shadow-lg p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300 cursor-pointer group">

    <summary className="list-none text-center cursor-pointer">

      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">

        <FaClock className="text-green-600 text-2xl group-hover:text-white transition" />

      </div>

      <h3 className="text-xl font-bold mt-5">
        Working Hours
      </h3>

      <p className="text-gray-500 mt-2">
        Click to View Details
      </p>

    </summary>

    <div className="mt-6 border-t pt-4 text-center space-y-2">

      <p className="text-gray-700">
        📅 <strong>Monday - Saturday</strong>
      </p>

      <p className="text-gray-700">
        🕘 9:00 AM - 6:00 PM
      </p>

      <p className="text-gray-700">
        🚫 Sunday - Closed
      </p>

      <p className="text-green-600 font-semibold pt-2">
        Customer support is available during working hours.
      </p>

    </div>

  </details>
</div>
</div>
</section>

<Newsletter />

<Footer />


    </>
  );
}

export default Contact;