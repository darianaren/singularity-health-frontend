"use client";

import { createContext, useContext } from "react";

const ToastContext = createContext();

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export default ToastContext;
