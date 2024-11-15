import React, { useEffect, useState, useCallback } from "react";

import PropTypes from "prop-types";

import Portal from "../Portal/Portal";

import styles from "./styles.module.css";

const Toast = ({
  message,
  resetToast,
  lifeTime = 6000,
  type = "success",
  showRetryText = true
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(resetToast, 500);
    }, lifeTime);

    return () => clearTimeout(timeout);
  }, [lifeTime, resetToast]);

  const toastStyle = useCallback((toastType) => {
    const toastStyles = Object.freeze({
      danger: styles.danger,
      success: styles.success,
      warning: styles.warning
    });

    return toastStyles[toastType] ?? toastStyles.success;
  }, []);

  const renderErrorTryAgain = useCallback(
    (type) =>
      type === "danger" && showRetryText ? (
        <span className={styles.lightenText}>intenta nuevamente</span>
      ) : null,
    [showRetryText]
  );

  const renderWarningText = useCallback(
    (type) =>
      type === "warning" && showRetryText ? (
        <span className={styles.lightenText}>advertencia. </span>
      ) : null,
    [showRetryText]
  );

  if (!message || !resetToast) return null;

  return (
    <Portal containerId="toast">
      <div
        role="alert"
        tabIndex="0"
        aria-live="polite"
        onClick={resetToast}
        aria-label="Cerrar alerta"
        className={`${styles.toast} ${toastStyle(type)} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        <p className={styles.message}>
          {renderWarningText(type)}
          {message}
          {renderErrorTryAgain(type)}
        </p>
      </div>
    </Portal>
  );
};

Toast.propTypes = {
  type: PropTypes.string,
  lifeTime: PropTypes.number,
  message: PropTypes.string.isRequired,
  resetToast: PropTypes.func.isRequired
};

export default Toast;
