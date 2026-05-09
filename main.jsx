import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthProvider>

    <CartProvider>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <App />

    </CartProvider>

  </AuthProvider>
);