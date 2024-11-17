import React from "react";

import happyDog from "public/images/happy-dog.png";

import styles from "./styles.module.css";

import Card from "@/components/atoms/Card/Card";
import { CARD_SIZES } from "@/components/atoms/Card/constants";

const FranchiseSection = ({ title, body, handleFranchise }) => {
  const imageData = Object.freeze({
    src: happyDog,
    alt: "Make Fetch! Happen",
    width: 250,
    height: 270
  });

  const buttonData = Object.freeze({
    onClick: handleFranchise,
    label: "Join Now"
  });
  return (
    <section className={styles["franchise-container"]}>
      <Card
        title={title}
        body={body}
        image={imageData}
        button={buttonData}
        size={CARD_SIZES.large}
      />
    </section>
  );
};

export default FranchiseSection;
