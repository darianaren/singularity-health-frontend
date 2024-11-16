import React from "react";

import styles from "./styles.module.css";

const ReviewsSection = ({ title, body }) => {
  return (
    <section className={styles["about-us-container"]}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>Card: {body}</p>
      {/* usar https://reqres.in/api/users */}
    </section>
  );
};

export default ReviewsSection;
