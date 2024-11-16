import React from "react";

import styles from "./styles.module.css";

/**
 * @module HamburgerMenu
 *
 * @description
 * The `HamburgerMenu` component represents a hamburger menu button that toggles its state (open or closed)
 * based on the `isOpen` property. This component is accessible and allows toggling the menu state through event handling.
 *
 * @component
 * @param {Object} props - Properties passed to the `HamburgerMenu` component.
 * @param {boolean} props.isOpen - Indicates whether the menu is open (`true`) or closed (`false`).
 * @param {function} props.handleClick - Function executed when the button is clicked to toggle the menu state.
 *
 * @returns {React.Component} Hamburger menu button.
 */

const HamburgerMenu = ({ isOpen, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      aria-expanded={isOpen ? "true" : "false"}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
};

export default HamburgerMenu;
