import React from "react";

import styles from "./styles.module.css";

import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";

export default function Form({
  email,
  errors,
  onSubmit,
  password,
  isLoading,
  resetErrors,
  handleChange,
  blurValidator
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
            error={errors.email}
            onClick={resetErrors}
            onInput={handleChange}
            onBlur={blurValidator}
          />
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onClick={resetErrors}
            onInput={handleChange}
            onBlur={blurValidator}
            error={errors.password}
            placeholder="CONTRASEÑA"
          />
        </div>
        <a href="#" className={styles["forgot-password"]}>
          ¿Olvidaste tu contraseña?
        </a>
        <Button
          onClick={onSubmit}
          isLoading={isLoading}
          disabled={!email || !password}
          aria-label="Inicia sesión con tus credenciales"
        >
          INICIAR SESIÓN
        </Button>
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
