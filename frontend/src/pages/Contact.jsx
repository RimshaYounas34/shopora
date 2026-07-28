
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

      {/* ================= CONTACT BANNER ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-white to-green-50 border-b">

        <div className="absolute -top-24 -left-24 w-56 sm:w-72 h-56 sm:h-72 bg-green-200/30 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-24 -right-24 w-56 sm:w-72 h-56 sm:h-72 bg-orange-200/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16 py-10 sm:py-14 lg:py-16">

            {/* Left Side */}

            <div className="text-center lg:text-left">

              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-semibold">
                📞 Contact Support
              </span>

              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Get In
                <span className="text-green-600"> Touch</span>
              </h1>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7 max-w-lg mx-auto lg:mx-0">
                We'd love to hear from you. Whether you have a question,
                feedback, or need support, our team is always here to help you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">

                <a
                  href="#contact-form"
                  className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  Contact Now
                </a>

                <div className="text-sm text-gray-500">
                  <span>Home</span>

                  <span className="mx-2">/</span>

                  <span className="font-semibold text-green-600">
                    Contact
                  </span>
                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="flex justify-center lg:justify-end">

              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md">

                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 text-center hover:-translate-y-2 transition">

                  <h3 className="text-2xl sm:text-3xl">📧</h3>

                  <p className="mt-2 font-semibold text-sm sm:text-base text-gray-800">
                    Email Us
                  </p>

                  <span className="text-xs sm:text-sm text-gray-500">
                    24/7 Support
                  </span>

                </div>

                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 text-center hover:-translate-y-2 transition">

                  <h3 className="text-2xl sm:text-3xl">💬</h3>

                  <p className="mt-2 font-semibold text-sm sm:text-base text-gray-800">
                    Live Chat
                  </p>

                  <span className="text-xs sm:text-sm text-gray-500">
                    Instant Help
                  </span>

                </div>

                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 text-center hover:-translate-y-2 transition">

                  <h3 className="text-2xl sm:text-3xl">📍</h3>

                  <p className="mt-2 font-semibold text-sm sm:text-base text-gray-800">
                    Our Office
                  </p>

                  <span className="text-xs sm:text-sm text-gray-500">
                    Lahore, Pakistan
                  </span>

                </div>

                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 text-center hover:-translate-y-2 transition">

                  <h3 className="text-2xl sm:text-3xl">⏰</h3>

                  <p className="mt-2 font-semibold text-sm sm:text-base text-gray-800">
                    Working Hours
                  </p>

                  <span className="text-xs sm:text-sm text-gray-500">
                    Mon - Sat
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="bg-[#f8faf8] py-12 sm:py-16 lg:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}

          <div className="text-center mb-10 sm:mb-14">

            <span className="text-green-600 uppercase tracking-[2px] sm:tracking-[3px] text-sm font-semibold">
              Contact Information
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight">
              Let's Start a Conversation
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
              Have any questions? Fill out the form and our team will get
              back to you within 24 hours.
            </p>

          </div>

          {/* Contact Info + Form */}

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

            {/* Contact Information */}

            <div
              id="contact-form"
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-green-100 p-6 sm:p-8 lg:p-10"
            >

              <h3 className="text-xl sm:text-2xl font-bold mb-7 sm:mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 sm:space-y-8">

                {/* Address */}

                <div className="flex gap-4 sm:gap-5">

                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-green-600 text-lg sm:text-xl" />
                  </div>

                  <div className="min-w-0">

                    <h4 className="font-bold text-base sm:text-lg">
                      Address
                    </h4>

                    <p className="text-gray-500 mt-1 text-sm sm:text-base">
                      Lahore, Pakistan
                    </p>

                  </div>

                </div>

                {/* Phone */}

                <div className="flex gap-4 sm:gap-5">

                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <FaPhoneAlt className="text-green-600 text-lg sm:text-xl" />
                  </div>

                  <div className="min-w-0">

                    <h4 className="font-bold text-base sm:text-lg">
                      Phone
                    </h4>

                    <p className="text-gray-500 mt-1 text-sm sm:text-base">
                      +92 300 1234567
                    </p>

                  </div>

                </div>

                {/* Email */}

                <div className="flex gap-4 sm:gap-5">

                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <FaEnvelope className="text-green-600 text-lg sm:text-xl" />
                  </div>

                  <div className="min-w-0">

                    <h4 className="font-bold text-base sm:text-lg">
                      Email
                    </h4>

                    <p className="text-gray-500 mt-1 text-sm sm:text-base break-all">
                      support@shopora.com
                    </p>

                  </div>

                </div>

                {/* Working Hours */}

                <div className="flex gap-4 sm:gap-5">

                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <FaClock className="text-green-600 text-lg sm:text-xl" />
                  </div>

                  <div>

                    <h4 className="font-bold text-base sm:text-lg">
                      Working Hours
                    </h4>

                    <p className="text-gray-500 mt-1 text-sm sm:text-base">
                      Monday - Saturday
                    </p>

                    <p className="text-gray-500 text-sm sm:text-base">
                      9:00 AM - 6:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Contact Form */}

            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-green-100 p-6 sm:p-8 lg:p-10">

              <h3 className="text-xl sm:text-2xl font-bold mb-7 sm:mb-8">
                Send Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6"
              >

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-200 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border border-gray-200 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border border-gray-200 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
                />

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full border border-gray-200 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3.5 sm:py-4 rounded-xl text-white font-semibold text-base sm:text-lg transition ${
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

          {/* ================= GOOGLE MAP ================= */}

          <div className="mt-10 sm:mt-14 lg:mt-16">

            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-green-100">

              <iframe
                title="Location Map"
                src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                className="w-full h-[280px] sm:h-[350px] lg:h-[420px] border-0"
                loading="lazy"
              ></iframe>

            </div>

          </div>

          {/* ================= EXTRA CONTACT CARDS ================= */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14 lg:mt-16">

            {/* WhatsApp */}

            <a
              href="https://wa.me/923111734194"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-green-100 shadow-lg p-5 sm:p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300 group"
            >

              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">

                <FaPhoneAlt className="text-green-600 text-xl sm:text-2xl group-hover:text-white transition" />

              </div>

              <h3 className="text-lg sm:text-xl font-bold mt-4 sm:mt-5">
                WhatsApp
              </h3>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                +92 311 1734194
              </p>

              <p className="text-green-600 font-medium mt-2 text-sm">
                Click to Chat
              </p>

            </a>

            {/* Email */}

            <a
              href="mailto:mahersaba441@gmail.com"
              className="bg-white rounded-2xl border border-green-100 shadow-lg p-5 sm:p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300 group"
            >

              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">

                <FaEnvelope className="text-green-600 text-xl sm:text-2xl group-hover:text-white transition" />

              </div>

              <h3 className="text-lg sm:text-xl font-bold mt-4 sm:mt-5">
                Email
              </h3>

              <p className="text-gray-500 mt-2 text-sm sm:text-base break-all">
                mahersaba441@gmail.com
              </p>

              <p className="text-green-600 font-medium mt-2 text-sm">
                Click to Send Email
              </p>

            </a>

            {/* Working Hours */}

            <details className="bg-white rounded-2xl border border-green-100 shadow-lg p-5 sm:p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300 cursor-pointer group sm:col-span-2 lg:col-span-1">

              <summary className="list-none text-center cursor-pointer">

                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">

                  <FaClock className="text-green-600 text-xl sm:text-2xl group-hover:text-white transition" />

                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-4 sm:mt-5">
                  Working Hours
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Click to View Details
                </p>

              </summary>

              <div className="mt-5 border-t pt-4 text-center space-y-2">

                <p className="text-gray-700 text-sm sm:text-base">
                  📅 <strong>Monday - Saturday</strong>
                </p>

                <p className="text-gray-700 text-sm sm:text-base">
                  🕘 9:00 AM - 6:00 PM
                </p>

                <p className="text-gray-700 text-sm sm:text-base">
                  🚫 Sunday - Closed
                </p>

                <p className="text-green-600 font-semibold pt-2 text-sm">
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
