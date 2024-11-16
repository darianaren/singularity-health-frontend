import React, { useReducer } from "react";

import styles from "./styles.module.css";
import { buttonReducer } from "./reducer";
import { ACTIONS_TYPES, INITIAL_STATE } from "./constants";

/**
 * @module Button
 *
 * @description
 * Button component that implements a ripple effect on click.
 *
 * @component
 * @param {Object} props - Properties passed to the Button component.
 * @property {Function} props.onClick - Handler for the click event on the button.
 * @property {boolean} [props.ripple=true] - Controls if the ripple effect is enabled.
 * @property {React.ReactNode} props.children - Child elements to be rendered inside the button.
 * @property {boolean} [props.isLoading=false] - Indicates if the button should show a loading content.
 * @property {Object} props.opts - Additional options for the button element.
 * @returns {React.Component} A styled button element with ripple effects.
 */
const Button = ({
  opts,
  onClick,
  children,
  disabled,
  isLoading,
  ripple = true,
  "aria-label": ariaLabel
}) => {
  const [state, dispatch] = useReducer(buttonReducer, INITIAL_STATE);

  const handleButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();

    dispatch({
      type: ACTIONS_TYPES.CLICK,
      payload: { clientX, clientY, rect }
    });

    if (onClick) onClick(event);
  };

  const handleAnimationEnd = () => {
    dispatch({ type: ACTIONS_TYPES.ANIMATION_END });
  };

  return (
    <button
      role="button"
      tabIndex="0"
      aria-label={ariaLabel}
      className={styles.button}
      onClick={handleButtonClick}
      disabled={disabled || isLoading}
      {...opts}
    >
      {ripple ? (
        <div className={styles.ripple}>
          <span
            key={state.animationKey}
            className={`${styles["ripple-circle"]} ${
              state.isAnimating ? styles["is-active"] : ""
            }`}
            style={{
              top: `${state.coords.y}px`,
              left: `${state.coords.x}px`
            }}
            onAnimationEnd={handleAnimationEnd}
          />
        </div>
      ) : null}
      <p className={styles.content}>{!isLoading ? children : "Cargando..."}</p>
    </button>
  );
};

export default Button;
