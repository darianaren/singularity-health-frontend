import React from "react";

import styles from "./styles.module.css";

import Navbar from "@/components/organisms/NavBar/NavBar";
import Button from "@/components/atoms/Button/Button";

const NotFoundLayout = ({ navContent, handleReturn }) => {
  return (
    <section className={styles["layout-container"]}>
      <Navbar {...navContent} />
      <div className={styles["bg-container"]}>
        <h2>Ooops! The page you are looking for does not exist.</h2>
        <Button
          style={{
            margin: 0,
            backgroundColor: "#ff6752"
          }}
          onClick={handleReturn}
        >
          RETURN TO HOME PAGE
        </Button>
      </div>
    </section>
  );
};

export default NotFoundLayout;
