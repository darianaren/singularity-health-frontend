import styles from "./styles.module.css";

export const TOAST_TYPE = Object.freeze({
  danger: Symbol("error message"),
  success: Symbol("success message"),
  warning: Symbol("warning message")
});

export const TOAST_STYLES = Object.freeze({
  [TOAST_TYPE.danger]: styles.danger,
  [TOAST_TYPE.success]: styles.success,
  [TOAST_TYPE.warning]: styles.warning
});
