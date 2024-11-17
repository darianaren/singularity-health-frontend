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
 *
 * @component
 * @param {Object} props - Properties passed to the Card component.
 *
 * @returns {React.Component}
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
          width={100}
          height={100}
          src={image.src}
          alt={image.alt}
          className={styles.image}
        />
      ) : null}
      <h3 className={styles.title}>
        {title || "We are looking for information"}
      </h3>
      <p className={styles.body}>&ldquo;{body}&rdquo;</p>
      {button ? (
        <Button
          style={{
            margin: 0,
            color: "#ff6752",
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
