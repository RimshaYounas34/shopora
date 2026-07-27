import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";

import { CartProvider } from "./components/context/CartContext";
import { WishlistProvider } from "./components/context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>

      {/* Auth Context */}
      <AuthProvider>

        {/* Cart Context */}
        <CartProvider>

          {/* Wishlist Context */}
          <WishlistProvider>

            <App />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
              }}
            />

          </WishlistProvider>

        </CartProvider>

      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>
);