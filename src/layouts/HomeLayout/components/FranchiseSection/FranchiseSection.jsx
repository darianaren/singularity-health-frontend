import React from "react";

import styles from "./styles.module.css";

import Button from "@/components/atoms/Button/Button";

const FranchiseSection = ({ title, body, handleFranchise }) => {
  return (
    <section className={styles["franchise-container"]}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <Button
        style={{
          margin: 0,
          color: "#ff6752",
          backgroundColor: "#fff"
        }}
        onClick={handleFranchise}
      >
        Join Now
      </Button>
    </section>
  );
};

export default FranchiseSection;
