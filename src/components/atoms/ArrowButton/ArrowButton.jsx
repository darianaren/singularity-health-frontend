import React from "react";

import styles from "./styles.module.css";
import { ARROW_DIRECTION, ARROW_DIRECTION_VALUE } from "./constants";

/**
 * @module ArrowButton
 *
 * @description
 * The `ArrowButton` component renders a button with an arrow icon, which can be directed to the left or right based on the `direction` prop. The button is customizable with a `disabled` state, and it triggers a callback function (`onClick`) when clicked. The direction of the arrow is determined by the `direction` prop, with a default value of `right`.
 *
 * @component
 * @param {Object} props - Properties passed to the ArrowButton component.
 * @param {function} props.onClick - Callback function that is executed when the button is clicked.
 * @param {boolean} props.disabled - Indicates if the button is disabled (cannot be clicked).
 * @param {string} [props.direction=ARROW_DIRECTION.right] - The direction of the arrow. Can be either `left` or `right`. Defaults to `right` if not provided.
 *
 * @returns {React.Component} A button element with an arrow icon that can trigger a callback when clicked.
 */
const ArrowButton = ({
  onClick,
  disabled,
  direction = ARROW_DIRECTION.right
}) => {
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick}>
      <span
        className={`${styles.arrow} ${styles[ARROW_DIRECTION_VALUE[direction]]}`}
      ></span>
    </button>
  );
};

export default ArrowButton;
