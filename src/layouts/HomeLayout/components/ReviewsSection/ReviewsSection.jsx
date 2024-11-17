import React from "react";

import styles from "./styles.module.css";
import { parsedCards } from "./utils";

import Carousel from "@/components/molecules/Carousel/Carousel";

const ReviewsSection = ({ title, body, reviewers = [] }) => {
  const cards = parsedCards({ reviewers, body });
  return (
    <section className={styles["reviews-container"]}>
      <h2 className={styles.title}>
        {title || "Looking for opinions from our users..."}
      </h2>
      <Carousel cards={cards} />
    </section>
  );
};

export default ReviewsSection;
