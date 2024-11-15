"use client";

import React, { useCallback, useMemo, useState } from "react";

import dynamic from "next/dynamic";

import ToastContext from "@/context/ToastContext";
import { TOAST_TYPE } from "@/components/atoms/Toast/constants";

const Toast = dynamic(() => import("@/components/atoms/Toast/Toast"), {
  ssr: false
});

/**
 * Context provider for the Toast functionality.
 *
 * This component provides the Toast context to its children, allowing them to trigger toast notifications.
 * It should be used to wrap the root component of your application in `_app.js` or `_app.tsx`.
 *
 * @param {Object} props - The props for the provider.
 * @property {ReactNode} props.children - The child components or elements.
 */

export const ToastProvider = ({ children }) => {
  const [toastInfo, setToastInfo] = useState({
    show: false,
    message: "",
    type: TOAST_TYPE.success
  });

  const resetToast = useCallback(
    () => setToastInfo({ show: false, message: "", type: TOAST_TYPE.success }),
    []
  );

  const showToast = useCallback((message, type = TOAST_TYPE.success) => {
    setToastInfo({ show: true, message, type });
  }, []);

  const contextValue = useMemo(
    () => ({
      showToast
    }),
    [showToast]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {toastInfo.show ? (
        <Toast
          lifeTime={5000}
          type={toastInfo.type}
          resetToast={resetToast}
          message={toastInfo.message}
        />
      ) : null}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContext;
