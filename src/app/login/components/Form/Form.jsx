import React from "react";

import styles from "./styles.module.css";

import Input from "@/components/atoms/Input/Input";

export default function Form({
  email,
  errors,
  onSubmit,
  password,
  resetErrors,
  changeHandler
}) {
  return (
    <section className={styles["form-container"]}>
      <h2 className={styles["welcome-title"]}>BIENVENIDO</h2>
      <form className={styles.form}>
        <div className={styles["input-container"]}>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="EMAIL"
            error={"errors.email"}
            onClick={resetErrors}
            onInput={changeHandler}
          />
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onClick={resetErrors}
            error={errors.password}
            placeholder="CONTRASEÑA"
            onInput={changeHandler}
          />
        </div>
        <a href="#" className={styles["forgot-password"]}>
          ¿Olvidaste tu contraseña?
        </a>
        <button className={styles.loginButton} onClick={onSubmit}>
          INICIAR SESIÓN
        </button>
      </form>
      <p className={styles["register-text"]}>
        AÚN NO TENGO CUENTA{" "}
        <a href="#" className={styles["register-link"]}>
          REGISTRARSE
        </a>
      </p>
    </section>
  );
}
