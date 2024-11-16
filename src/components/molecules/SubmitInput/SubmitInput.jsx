"use client";

import React, { useCallback, useState } from "react";

import styles from "./styles.module.css";

import ArrowButton from "@/components/atoms/ArrowButton/ArrowButton";
import { ARROW_DIRECTION } from "@/components/atoms/ArrowButton/constants";

/**
 * @module SubmitInput
 *
 * @description
 * The `SubmitInput` component is a controlled input field with a submit button. It allows users to enter text and submit it using the submit button, which is enabled only when there is text in the input field. The component uses state to manage the input value and provides a callback function to handle the submission.
 *
 * @component
 * @param {Object} props - Properties passed to the SubmitInput component.
 * @param {string} props.placeholder - The placeholder text displayed inside the input field.
 * @param {function} props.onSubmit - Callback function that is called when the user submits the form. It receives the input value as an argument.
 * @param {Object} [opts] - Additional props that are passed to the input element (e.g., for styling, events, etc.).
 *
 * @returns {React.Component} SubmitInput component with an input field and submit button.
 */
const SubmitInput = ({ placeholder, onSubmit, ...opts }) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    const { value } = event.target;

    setValue(value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (!value) return null;

      onSubmit(value);
      setValue("");
    },
    [value, onSubmit]
  );

  return (
    <div className={styles["input-container"]}>
      <input
        {...opts}
        value={value}
        onInput={handleChange}
        className={styles.input}
        placeholder={placeholder}
      />
      <ArrowButton
        disabled={!value}
        onClick={handleSubmit}
        direction={ARROW_DIRECTION.right}
      />
    </div>
  );
};

export default SubmitInput;
