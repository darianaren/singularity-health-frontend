import React from "react";

import styles from "./styles.module.css";

const FranchiseSection = ({ title, body, handleFranchise }) => {
  return (
    <section className={styles["franchise-container"]}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <button onClick={handleFranchise}>Join Now</button>
    </section>
  );
};

export default FranchiseSection;
