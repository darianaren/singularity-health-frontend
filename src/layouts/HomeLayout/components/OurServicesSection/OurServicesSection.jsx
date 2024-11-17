import React from "react";

import dog from "public/icons/dog.svg";
import cat from "public/icons/cat.svg";
import house from "public/icons/house.svg";
import track from "public/icons/dog-track.svg";

import { CARDS } from "./constants";
import styles from "./styles.module.css";

import Card from "@/components/atoms/Card/Card";
import { CARD_SIZES } from "@/components/atoms/Card/constants";
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

      <aside className={styles["cards-container"]}>
        {cards.map(({ image, text }) => (
          <Card
            key={text}
            body={text}
            image={{
              src: image,
              alt: text
            }}
            size={CARD_SIZES.small}
          />
        ))}
      </aside>
    </section>
  );
};

export default OurServicesSection;
