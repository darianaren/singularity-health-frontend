import React from "react";

import styles from "./styles.module.css";

import SubmitInput from "@/components/molecules/SubmitInput/SubmitInput";

const OurServicesSection = ({ title, body, subtitle, handleLocation }) => {
  return (
    <section className={styles["our-services-container"]}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <SubmitInput placeholder="Zip Code" onSubmit={handleLocation} />
    </section>
  );
};

export default OurServicesSection;
