import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaArrowRight,
} from "react-icons/fa";

import { HiShoppingBag } from "react-icons/hi2";
import toast from "react-hot-toast";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../helpers/firebase";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ================= NORMAL REGISTER =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!formData.agree) {
      toast.error("Please accept Terms & Conditions.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(
          data.message || "Registration failed."
        );
        return;
      }

      toast.success("Registration Successful!");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      console.error(
        "Registration Error:",
        error
      );

      toast.error(
        "Unable to connect with server. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  // ================= GOOGLE SIGNUP =================

  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);

      // Firebase Google Login
      const result = await signInWithPopup(
        auth,
        provider
      );

      const googleUser = result.user;

      console.log(
        "Firebase Google User:",
        googleUser
      );

      // Send Google User Data to Backend
      // IMPORTANT:
      // Your backend route is /api/user/google
      const response = await fetch(
        "http://localhost:5000/api/user/google",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name:
              googleUser.displayName ||
              "Google User",

            email:
              googleUser.email,

            image:
              googleUser.photoURL ||
              "",
          }),
        }
      );

      const data = await response.json();

      // Backend error
      if (!response.ok) {
        toast.error(
          data.message ||
            "Google signup failed."
        );
        return;
      }

      // Save JWT Token
      localStorage.setItem(
        "token",
        data.token
      );

      // Save User Data
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Success Popup
      toast.success(
        `Welcome ${
          data.user?.name ||
          googleUser.displayName ||
          "User"
        }!`
      );

      // Go to Home
      setTimeout(() => {
        navigate("/");
      }, 1200);

    } catch (error) {
      console.error(
        "Google Login Error:",
        error
      );

      if (
        error.code ===
        "auth/popup-closed-by-user"
      ) {
        toast.error(
          "Google sign-up was cancelled."
        );

      } else if (
        error.code ===
        "auth/popup-blocked"
      ) {
        toast.error(
          "Please allow popups in your browser."
        );

      } else if (
        error.code ===
        "auth/unauthorized-domain"
      ) {
        toast.error(
          "This domain is not authorized in Firebase."
        );

      } else if (
        error.code ===
        "auth/account-exists-with-different-credential"
      ) {
        toast.error(
          "An account already exists with this email."
        );

      } else {
        toast.error(
          "Google sign-up failed. Please try again."
        );
      }

    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">

      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <div className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white p-12 flex flex-col justify-between">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl">

                <HiShoppingBag className="text-emerald-600 text-4xl" />

              </div>

              <div>

                <h1 className="text-4xl font-extrabold">
                  Shopora
                </h1>

                <p className="uppercase tracking-[6px] text-sm text-green-100">
                  Online Store
                </p>

              </div>

            </div>

          </div>

          {/* Main Content */}

          <div className="my-16">

            <h2 className="text-5xl font-bold leading-tight">
              Create
              <br />
              Account 🚀
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-100 max-w-md">
              Join Shopora today and explore thousands of amazing products with
              secure checkout and exclusive member discounts.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <p>Premium Products</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <p>Exclusive Offers</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <p>Secure Shopping</p>
              </div>

            </div>

          </div>

          {/* Testimonial */}

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">

            <p className="italic leading-7">
              "Create your free account and start shopping smarter today."
            </p>

            <div className="mt-5 flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-white text-emerald-600 font-bold flex items-center justify-center">
                J
              </div>

              <div>

                <h3 className="font-semibold">
                  James Wilson
                </h3>

                <p className="text-green-100 text-sm">
                  Premium Member
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center justify-center p-8 lg:p-14">

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md"
          >

            <h2 className="text-4xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-3">
              Join Shopora and start shopping today.
            </p>

            {/* Full Name */}

            <div className="mt-8">

              <label className="font-medium text-gray-700">
                Full Name
              </label>

              <div className="relative mt-2">

                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  disabled={
                    loading ||
                    googleLoading
                  }
                  className="w-full h-14 rounded-xl border border-gray-300 pl-14 pr-4 outline-none focus:border-emerald-600 disabled:bg-gray-100"
                />

              </div>

            </div>

            {/* Email */}

            <div className="mt-6">

              <label className="font-medium text-gray-700">
                Email Address
              </label>

              <div className="relative mt-2">

                <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled={
                    loading ||
                    googleLoading
                  }
                  className="w-full h-14 rounded-xl border border-gray-300 pl-14 pr-4 outline-none focus:border-emerald-600 disabled:bg-gray-100"
                />

              </div>

            </div>

            {/* Password */}

            <div className="mt-6">

              <label className="font-medium text-gray-700">
                Password
              </label>

              <div className="relative mt-2">

                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  disabled={
                    loading ||
                    googleLoading
                  }
                  className="w-full h-14 rounded-xl border border-gray-300 pl-14 pr-14 outline-none focus:border-emerald-600 disabled:bg-gray-100"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  disabled={
                    loading ||
                    googleLoading
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* Confirm Password */}

            <div className="mt-6">

              <label className="font-medium text-gray-700">
                Confirm Password
              </label>

              <div className="relative mt-2">

                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={
                    showConfirm
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={
                    formData.confirmPassword
                  }
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  disabled={
                    loading ||
                    googleLoading
                  }
                  className="w-full h-14 rounded-xl border border-gray-300 pl-14 pr-14 outline-none focus:border-emerald-600 disabled:bg-gray-100"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirm(
                      !showConfirm
                    )
                  }
                  disabled={
                    loading ||
                    googleLoading
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showConfirm ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* Terms */}

            <div className="mt-6 flex items-start gap-3">

              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                disabled={
                  loading ||
                  googleLoading
                }
                className="accent-emerald-600 mt-1 cursor-pointer"
              />

              <p className="text-sm text-gray-600">

                I agree to the

                <span className="text-emerald-600 font-medium cursor-pointer">
                  {" "}
                  Terms & Conditions
                </span>

                {" "}and{" "}

                <span className="text-emerald-600 font-medium cursor-pointer">
                  Privacy Policy
                </span>

              </p>

            </div>

            {/* Register Button */}

            <button
              type="submit"
              disabled={
                loading ||
                googleLoading
              }
              className="w-full h-14 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold mt-8 flex items-center justify-center gap-3 transition cursor-pointer disabled:cursor-not-allowed"
            >

              {loading
                ? "Creating Account..."
                : "Create Account"}

              {!loading && (
                <FaArrowRight />
              )}

            </button>

            {/* Divider */}

            <div className="flex items-center my-8">

              <div className="flex-1 h-px bg-gray-300"></div>

              <span className="mx-4 text-gray-500">
                OR
              </span>

              <div className="flex-1 h-px bg-gray-300"></div>

            </div>

            {/* Google */}

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={
                loading ||
                googleLoading
              }
              className="w-full h-14 border border-gray-300 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 disabled:bg-gray-100 transition cursor-pointer disabled:cursor-not-allowed"
            >

              <FaGoogle className="text-red-500 text-xl" />

              {googleLoading
                ? "Connecting..."
                : "Sign up with Google"}

            </button>

            {/* Login */}

            <p className="text-center mt-8 text-gray-600">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-emerald-600 font-semibold hover:underline"
              >
                Sign In
              </Link>

            </p>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Register;