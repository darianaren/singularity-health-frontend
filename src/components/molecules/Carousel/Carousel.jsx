import React, { useState } from "react";

import styles from "./styles.module.css";
import { SLIDE_POSITIONS } from "./constants";

import ArrowButton from "@/components/atoms/ArrowButton/ArrowButton";
import { ARROW_DIRECTION } from "@/components/atoms/ArrowButton/constants";
import Card from "@/components/atoms/Card/Card";
import {
  BACKGROUND_COLORS,
  CARD_SIZES
} from "@/components/atoms/Card/constants";

/**
 * @module Carousel
 *
 * @description
 *
 * @component
 * @param {Object} props - Properties passed to the Carousel component.
 *
 * @returns {React.Component}
 */
const Carousel = ({ cards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  if (!cards.length) return null;

  return (
    <section className={styles["carousel-container"]}>
      <ArrowButton direction={ARROW_DIRECTION.left} onClick={prevSlide} />
      <div className={styles["cards-container"]}>
        {cards.map(({ id, ...data }, index) => {
          const position = (index - currentIndex + cards.length) % cards.length;
          const slidePosition =
            SLIDE_POSITIONS[position] || SLIDE_POSITIONS.default;

          const bgColor =
            index % 2 === 0 ? BACKGROUND_COLORS.blue : BACKGROUND_COLORS.orange;

          return (
            <div
              key={id}
              className={`${styles.slide} ${position === cards.length - 1 ? styles["second-left"] : styles[slidePosition]}`}
            >
              <Card {...data} background={bgColor} size={CARD_SIZES.small} />
            </div>
          );
        })}
      </div>
      <ArrowButton direction={ARROW_DIRECTION.right} onClick={nextSlide} />
    </section>
  );
};

export default Carousel;
