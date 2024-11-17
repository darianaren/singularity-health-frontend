import React from "react";

import Image from "next/image";

import Button from "../Button/Button";

import styles from "./styles.module.css";
import {
  BACKGROUND_COLORS,
  BACKGROUND_COLORS_VALUE,
  CARD_SIZES,
  CARD_SIZES_VALUE
} from "./constants";

/**
 * @module Card
 *
 * @description
 * The `Card` component renders a card-like UI element with an optional image, title, body text, and button.
 * It is highly customizable through props, allowing for different card sizes, background colors, and the addition of a button.
 * The component is designed to be flexible for various use cases like displaying information, articles, or product details.
 *
 * @component
 * @param {Object} props - The properties passed to the Card component.
 * @param {string} props.body - The content of the card (typically text).
 * @param {Object} props.image - An object representing the image to be displayed in the card.
 *    - `src` (string): The source URL of the image.
 *    - `alt` (string): The alt text for the image (for accessibility).
 *    - `width` (number): The width of the image (optional).
 *    - `height` (number): The height of the image (optional).
 * @param {string} props.title - The title of the card (typically a heading).
 * @param {Object} props.button - An optional button to display inside the card.
 *    - `label` (string): The label to display on the button.
 *    - `onClick` (function): The click handler function for the button (optional).
 *    - Additional button props can be passed to the `Button` component.
 * @param {string} [props.size=CARD_SIZES.small] - The size of the card. Can be one of `small`, `medium`, or `large`.
 * @param {string} [props.background=BACKGROUND_COLORS.blue] - The background color of the card. Can be one of `blue`, `orange`, etc.
 *
 * @returns {React.Component} The Card component.
 */
const Card = ({
  body,
  image,
  title,
  button,
  size = CARD_SIZES.small,
  background = BACKGROUND_COLORS.blue
}) => {
  return (
    <article
      className={`${styles.card} ${styles[CARD_SIZES_VALUE[size]]} ${styles[BACKGROUND_COLORS_VALUE[background]]}`}
    >
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          className={styles.image}
          width={image.width || 100}
          height={image.height || 100}
        />
      ) : null}
      {title ? (
        <h2 className={styles.title}>
          {title || "We are looking for information"}
        </h2>
      ) : null}
      <p className={styles.body}>{body}</p>
      {button ? (
        <Button
          colorText="#ff6752"
          style={{
            margin: 0,
            gridArea: "button",
            backgroundColor: "#fff"
          }}
          {...button}
        >
          {button.label}
        </Button>
      ) : null}
    </article>
  );
};

export default Card;
