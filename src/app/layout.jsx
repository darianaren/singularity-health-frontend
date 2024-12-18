import React from "react";

import AuthProvider from "@/providers/AuthProvider";
import { ToastProvider } from "@/providers/ToastContext";

import "../styles/globals.css";

export const metadata = {
  title: "Fetch",
  description:
    "For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToastProvider>{children}</ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
