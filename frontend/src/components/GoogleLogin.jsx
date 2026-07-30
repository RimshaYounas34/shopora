
import React from "react";
import { Button } from "./ui/Button";
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../helpers/firebase";

export const GoogleLogin = () => {
  const handleLogin = async () => {
    try {
      // ================= GOOGLE FIREBASE LOGIN =================

      const googleResponse = await signInWithPopup(
        auth,
        provider
      );

      const googleUser = googleResponse.user;

      console.log("Google User:", googleUser);

      // ================= BACKEND API URL =================

      const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:5000";

      // ================= SEND USER TO BACKEND =================

      const response = await fetch(
        `${API_URL}/api/users/google`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: googleUser.displayName,
            email: googleUser.email,
            image: googleUser.photoURL,
          }),
        }
      );

      const data = await response.json();

      // ================= BACKEND ERROR =================

      if (!response.ok) {
        throw new Error(
          data.message || "Google login failed"
        );
      }

      // ================= SAVE LOGIN DATA =================

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      console.log(
        "Google Login Successful:",
        data.user
      );

      // ================= REDIRECT =================

      if (data.user?.role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }

    } catch (error) {
      console.error(
        "Google Login Error:",
        error
      );
    }
  };

  return (
    <Button
      type="button"
      onClick={handleLogin}
      className="w-full flex items-center justify-center gap-3"
    >
      <FaGoogle className="text-red-500 text-lg" />

      Continue with Google
    </Button>
  );
};