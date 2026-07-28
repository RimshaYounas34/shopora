
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
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

import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  // ================= AUTH CONTEXT =================

  const { login } = useAuth();

  // ================= STATES =================

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);


  // ================= NORMAL LOGIN =================

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check fields
    if (!email || !password) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      // ================= SEND LOGIN REQUEST =================

      const response = await fetch(
        "https://shopora-scs5.vercel.app/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            password,
          }),
        }
      );

      const data = await response.json();


      // ================= BACKEND ERROR =================

      if (!response.ok) {
        toast.error(
          data.message ||
            "Invalid email or password."
        );

        return;
      }


      // ================= SAVE USER + TOKEN =================

      login(
        data.user,
        data.token
      );


      // ================= SUCCESS =================

      toast.success(
        "Login Successful! 🎉"
      );


      // ================= CLEAR FIELDS =================

      setEmail("");
      setPassword("");


      // ================= REDIRECT =================

      setTimeout(() => {
        navigate("/");
      }, 1500);


    } catch (error) {

      console.error(
        "Login Error:",
        error
      );

      toast.error(
        "Unable to connect with server. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  // ================= GOOGLE LOGIN =================

  const handleGoogleLogin = async () => {

    try {

      setGoogleLoading(true);


      // ================= OPEN GOOGLE LOGIN =================

      const result = await signInWithPopup(
        auth,
        provider
      );


      const googleUser = result.user;


      console.log(
        "Google User:",
        googleUser
      );


      // ================= SEND GOOGLE USER TO BACKEND =================

      const response = await fetch(
        "https://shopora-scs5.vercel.app/api/user/google",
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


      // ================= BACKEND ERROR =================

      if (!response.ok) {

        toast.error(
          data.message ||
            "Google login failed."
        );

        return;
      }


      // ================= SAVE GOOGLE USER + TOKEN =================

      login(
        data.user,
        data.token
      );


      // ================= SUCCESS =================

      toast.success(
        "Google Login Successful! 🎉"
      );


      // ================= REDIRECT =================

      setTimeout(() => {
        navigate("/");
      }, 1500);


    } catch (error) {

      console.error(
        "Google Login Error:",
        error
      );


      // ================= POPUP CLOSED =================

      if (
        error.code ===
        "auth/popup-closed-by-user"
      ) {

        toast.error(
          "Google login popup was closed."
        );

      }


      // ================= POPUP BLOCKED =================

      else if (
        error.code ===
        "auth/popup-blocked"
      ) {

        toast.error(
          "Google popup was blocked. Please allow popups."
        );

      }


      // ================= UNAUTHORIZED DOMAIN =================

      else if (
        error.code ===
        "auth/unauthorized-domain"
      ) {

        toast.error(
          "This domain is not authorized in Firebase."
        );

      }


      // ================= NETWORK ERROR =================

      else if (
        error.message?.includes(
          "Failed to fetch"
        )
      ) {

        toast.error(
          "Unable to connect with server."
        );

      }


      // ================= OTHER ERRORS =================

      else {

        toast.error(
          "Google login failed. Please try again."
        );

      }

    } finally {

      setGoogleLoading(false);

    }

  };


  // ================= UI =================

  return (

    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">

      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">


        {/* ================= LEFT SIDE ================= */}

        <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white p-12 flex flex-col justify-between">


          {/* ================= LOGO ================= */}

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


          {/* ================= WELCOME CONTENT ================= */}

          <div>

            <h2 className="text-5xl font-bold leading-tight">

              Welcome
              <br />
              Back 👋

            </h2>


            <p className="mt-6 text-lg leading-8 text-green-100">

              Login to continue shopping premium products with
              exclusive discounts, secure checkout and fast delivery.

            </p>


            <div className="mt-10 space-y-5">


              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <span>
                  Premium Products
                </span>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <span>
                  Fast Delivery
                </span>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <span>
                  Secure Payments
                </span>

              </div>


            </div>

          </div>


          {/* ================= TESTIMONIAL ================= */}

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">

            <p className="italic">

              "Shop smarter with thousands of quality products at unbeatable prices."

            </p>


            <div className="flex items-center gap-3 mt-5">

              <div className="w-12 h-12 rounded-full bg-white text-emerald-600 font-bold flex items-center justify-center">

                S

              </div>


              <div>

                <h3 className="font-semibold">
                  Sarah Johnson
                </h3>

                <p className="text-sm text-green-100">
                  Happy Customer
                </p>

              </div>

            </div>

          </div>


        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center justify-center p-10">

          <div className="w-full max-w-md">


            <h2 className="text-4xl font-bold text-gray-800">
              Sign In
            </h2>


            <p className="text-gray-500 mt-3">
              Login to access your Shopora account.
            </p>


            {/* ================= LOGIN FORM ================= */}

            <form onSubmit={handleLogin}>


              {/* ================= EMAIL ================= */}

              <div className="mt-8">

                <label className="font-medium">
                  Email Address
                </label>


                <div className="relative mt-2">

                  <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />


                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter your email"
                    disabled={
                      loading ||
                      googleLoading
                    }
                    className="w-full h-14 rounded-xl border border-gray-300 pl-14 pr-4 outline-none focus:border-emerald-600 disabled:bg-gray-100"
                  />

                </div>

              </div>


              {/* ================= PASSWORD ================= */}

              <div className="mt-6">

                <label className="font-medium">
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
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter your password"
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


              {/* ================= REMEMBER & FORGOT ================= */}

              <div className="flex items-center justify-between mt-6">

                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">

                  <input
                    type="checkbox"
                    className="accent-emerald-600 cursor-pointer"
                  />

                  Remember Me

                </label>


                <button
                  type="button"
                  className="text-emerald-600 hover:underline font-medium cursor-pointer"
                >

                  Forgot Password?

                </button>

              </div>


              {/* ================= SIGN IN BUTTON ================= */}

              <button
                type="submit"
                disabled={
                  loading ||
                  googleLoading
                }
                className="w-full h-14 mt-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold flex items-center justify-center gap-3 transition cursor-pointer disabled:cursor-not-allowed"
              >

                {loading
                  ? "Signing In..."
                  : "Sign In"
                }


                {!loading && (
                  <FaArrowRight />
                )}

              </button>


            </form>


            {/* ================= CREATE ACCOUNT ================= */}

            <p className="text-center mt-6 text-gray-600">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-emerald-600 font-semibold hover:underline cursor-pointer"
              >

                Create Account

              </Link>

            </p>


            {/* ================= DIVIDER ================= */}

            <div className="flex items-center my-8">

              <div className="flex-1 h-px bg-gray-300"></div>


              <span className="mx-4 text-gray-500 font-medium">
                OR
              </span>


              <div className="flex-1 h-px bg-gray-300"></div>

            </div>


            {/* ================= GOOGLE LOGIN ================= */}

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={
                loading ||
                googleLoading
              }
              className="w-full h-14 rounded-xl border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 transition flex items-center justify-center gap-3 cursor-pointer disabled:cursor-not-allowed"
            >

              <FaGoogle className="text-red-500 text-xl" />


              {googleLoading
                ? "Connecting with Google..."
                : "Continue with Google"
              }

            </button>


          </div>

        </div>

      </div>

    </section>

  );

}

export default Login;