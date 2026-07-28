
import React from "react";
import { Button } from "./ui/Button";
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../helpers/firebase";

export const GoogleLogin = () => {
  const handleLogin = async () => {
    try {
      // Google Login
      const googleResponse = await signInWithPopup(
        auth,
        provider
      );

      console.log("Google User:", googleResponse.user);

    } catch (error) {
      console.error("Google Login Error:", error);
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
