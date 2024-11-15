import React from "react";

import styles from "./styles.module.css";

/**
 * @module Input
 *
 * @description A customizable input component with optional masking and error handling.
 *
 * @component
 * @param {Object} props - The props object containing the necessary data.
 *   @property {string} error - Error message to display when the input has an error.
 *   @property {string} label - Label for the input field.
 *   @property {string} className - Additional CSS class names for the input container.
 *   @property {object} opts - Additional attributes for the input element.
 *
 * @returns {React.Component} The Input component.
 *
 */

const Input = ({ error, label, className, ...opts }) => {
  return (
    <div className={`${styles["input-container"]} ${className}`}>
      {label ? <label htmlFor={opts?.id || ""}>{label}</label> : null}
      <input
        aria-invalid={!!error}
        className={`${styles.input} ${error ? styles.error : ""}`}
        {...opts}
      />
      {error ? (
        <span role="alert" aria-live="polite" className={styles["error-text"]}>
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
