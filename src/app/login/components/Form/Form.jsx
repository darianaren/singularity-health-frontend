import React from "react";

import styles from "./styles.module.css";

import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";

export default function Form({
  email,
  errors,
  onSubmit,
  password,
  register,
  isLoading,
  handleChange,
  blurValidator,
  recoverPassword
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
            onInput={handleChange}
            onBlur={blurValidator}
          />
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onInput={handleChange}
            onBlur={blurValidator}
            error={errors.password}
            placeholder="CONTRASEÑA"
          />
        </div>
        <span className={styles["forgot-password"]} onClick={recoverPassword}>
          ¿Olvidaste tu contraseña?
        </span>
        <Button
          onClick={onSubmit}
          isLoading={isLoading}
          disabled={!email || !password || errors.email || errors.password}
          aria-label="Inicia sesión con tus credenciales"
        >
          INICIAR SESIÓN
        </Button>
      </form>
      <p className={styles["register-text"]}>
        AÚN NO TENGO CUENTA{" "}
        <span className={styles["register-link"]} onClick={register}>
          REGISTRARSE
        </span>
      </p>
    </section>
  );
}
