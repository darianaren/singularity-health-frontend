import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import Portal from "../Portal/Portal";

import styles from "./styles.module.css";
import { TOAST_STYLES, TOAST_TYPE } from "./constants";

const Toast = ({
  message,
  resetToast,
  lifeTime = 6000,
  showRetryText = true,
  type = TOAST_TYPE.success
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timerIn = setTimeout(() => setIsVisible(true), 10);

    const timerOut = setTimeout(() => {
      setIsVisible(false);
      setTimeout(resetToast, 500);
    }, lifeTime);

    return () => {
      clearTimeout(timerIn);
      clearTimeout(timerOut);
    };
  }, [lifeTime, resetToast]);

  const toastStyle = TOAST_STYLES[type] || TOAST_STYLES.success;

  const renderErrorTryAgain =
    type === TOAST_TYPE.danger && showRetryText ? (
      <span className={`${styles.message} ${styles.lightenText}`}>
        . intenta nuevamente
      </span>
    ) : null;

  const renderWarningText =
    type === TOAST_TYPE.warning && showRetryText ? (
      <span className={`${styles.message} ${styles.lightenText}`}>
        advertencia.{" "}
      </span>
    ) : null;

  if (!message || !resetToast) return null;

  return (
    <Portal containerId="toast">
      <div
        role="alert"
        tabIndex="0"
        aria-live="polite"
        onClick={resetToast}
        aria-label="Cerrar alerta"
        className={`${styles.toast} ${toastStyle} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        <p className={styles.message}>
          {renderWarningText}
          {message}
          {renderErrorTryAgain}
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
