import React from "react";

import Image from "next/image";
import logo from "public/icons/logo.svg";

import styles from "./styles.module.css";

export default function Aside() {
  return (
    <div className={styles.aside}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div>
    </div>
  );
}
