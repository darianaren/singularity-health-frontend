import React from "react";

import Image from "next/image";
import dog from "public/icons/dog.svg";
import track from "public/icons/dog-track.svg";
import cat from "public/icons/cat.svg";
import house from "public/icons/house.svg";

import styles from "./styles.module.css";
import { CARDS } from "./constants";

import SubmitInput from "@/components/molecules/SubmitInput/SubmitInput";

const OurServicesSection = ({ title, body, subtitle, handleLocation }) => {
  const cards = CARDS({ dog, cat, house, track });

  return (
    <section className={styles["our-services-container"]}>
      <article className={styles["text-container"]}>
        <h2 className={styles.title}>
          {title || "Looking for information..."}
        </h2>
        <p className={styles.body}>{body}</p>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <SubmitInput placeholder="Zip Code" onSubmit={handleLocation} />
      </article>

      <div className={styles["cards-container"]}>
        {cards.map(({ image, text }) => (
          <div key={text} className={styles.card}>
            <Image src={image} alt={text} className={styles["card-image"]} />
            <p className={styles["text-image"]}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
