import React from "react";

import styles from "./styles.module.css";

export default function Form() {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.welcomeTitle}>BIENVENIDO</h2>
      <form className={styles.form}>
        <input type="email" placeholder="EMAIL" className={styles.input} />
        <input
          type="password"
          placeholder="CONTRASEÑA"
          className={styles.input}
        />
        <a href="#" className={styles.forgotPassword}>
          ¿Olvidaste tu contraseña?
        </a>
        <button type="submit" className={styles.loginButton}>
          INICIAR SESIÓN
        </button>
      </form>
      <p className={styles.registerText}>
        AÚN NO TENGO CUENTA{" "}
        <a href="#" className={styles.registerLink}>
          REGISTRARSE
        </a>
      </p>
    </div>
  );
}
