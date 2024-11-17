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
 * A component that renders a carousel of cards (Cards).
 * The carousel allows navigation between cards using arrows to move forward or backward.
 * The cards are displayed with a sliding animation between items.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.cards - A list of objects representing the cards to be displayed in the carousel.
 * Each card object should include a unique `id` property, as well as other attributes that will be passed as `props` to the `Card` component.
 *
 * @returns {React.Component} The Carousel component.
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
              <Card {...data} background={bgColor} size={CARD_SIZES.medium} />
            </div>
          );
        })}
      </div>
      <ArrowButton direction={ARROW_DIRECTION.right} onClick={nextSlide} />
    </section>
  );
};

export default Carousel;
