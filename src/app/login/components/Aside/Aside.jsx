import React from "react";

import Image from "next/image";
import logo from "public/icons/logo.svg";
import bgLogin from "public/backgrounds/bg-login.svg";

import styles from "./styles.module.css";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Image
        alt="Logo"
        layout="fill"
        src={bgLogin}
        objectFit="cover"
        className={styles["bg-login"]}
      />

      <div className={styles["logo-container"]}>
        <Image
          src={logo}
          alt="Logo"
          width={250}
          height={250}
          className={styles.logo}
        />
      </div>
    </aside>
  );
}
