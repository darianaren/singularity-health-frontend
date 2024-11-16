import React from "react";

import Image from "next/image";
import golden from "public/images/golden-retriever@2x.png";

import styles from "./styles.module.css";

import Button from "@/components/atoms/Button/Button";

const GreetingSection = ({ title, body, handleSchedule }) => {
  return (
    <section className={styles["greeting-container"]}>
      <article className={styles["text-container"]}>
        <h1 className={styles.title}>{title || "Loading..."}</h1>
        <p className={styles.body}>{body || "Please wait a moment."}</p>
        <div className={styles.footer}>
          <Button style={{ margin: "0" }} onClick={handleSchedule}>
            Schedule Service
          </Button>
          <label className={styles.text}>Or Call 866.338.2463</label>
        </div>
      </article>
      <div className={styles["circle-container"]}>
        <Image
          src={golden}
          alt="Welcome to Fetch!"
          className={styles["dog-image"]}
        />
      </div>
    </section>
  );
};

export default GreetingSection;
