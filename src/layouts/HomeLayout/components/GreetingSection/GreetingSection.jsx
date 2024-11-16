import React from "react";

import styles from "./styles.module.css";

const GreetingSection = ({ title, body, isLoading }) => {
  return (
    <section
      className={`${styles["greeting-container"]} ${isLoading ? styles.loading : ""}`}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <button>Schedule Service</button>
      <label>Or Call 866.338.2463</label>
    </section>
  );
};

export default GreetingSection;
