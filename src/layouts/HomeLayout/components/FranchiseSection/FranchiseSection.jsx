import React from "react";

import styles from "./styles.module.css";

const FranchiseSection = ({ title, body, isLoading }) => {
  return (
    <section
      className={`${styles["franchise-container"]} ${isLoading ? styles.loading : ""}`}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
    </section>
  );
};

export default FranchiseSection;
