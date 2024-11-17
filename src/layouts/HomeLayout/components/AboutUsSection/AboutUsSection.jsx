import React from "react";

import dogFace from "public/icons/dog-face.svg";
import catGirl from "public/icons/cat-girl.svg";
import calendar from "public/icons/calendar.svg";

import { CARDS } from "./constants";
import styles from "./styles.module.css";

import Card from "@/components/atoms/Card/Card";
import { CARD_SIZES } from "@/components/atoms/Card/constants";
import SubmitInput from "@/components/molecules/SubmitInput/SubmitInput";

const AboutUsSection = ({ title, body, subtitle, handleLocation }) => {
  const cards = CARDS({ dogFace, catGirl, calendar });

  return (
    <section className={styles["about-us-container"]}>
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

      <article className={styles["text-container"]}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{body}</p>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <SubmitInput placeholder="Zip Code" onSubmit={handleLocation} />
      </article>
    </section>
  );
};

export default AboutUsSection;
