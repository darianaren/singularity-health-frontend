import React from "react";

import styles from "./styles.module.css";

const AboutUsSection = ({ title, body, subtitle }) => {
  return (
    <section className={styles["about-us-container"]}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </section>
  );
};

export default AboutUsSection;
