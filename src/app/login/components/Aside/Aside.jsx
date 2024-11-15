import React from "react";

import Image from "next/image";
import logo from "public/icons/logo.svg";
import bgLogin from "public/backgrounds/bg-login.svg";

import styles from "./styles.module.css";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Image
        fill
        alt="Background"
        src={bgLogin}
        style={{ objectFit: "cover" }}
        className={styles["bg-login"]}
      />

      <div className={styles["logo-container"]}>
        <Image
          src={logo}
          alt="Fetch: Pet Caretakers"
          width={250}
          height={250}
          className={styles.logo}
        />
      </div>
    </aside>
  );
}
