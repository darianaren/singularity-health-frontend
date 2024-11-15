import { INPUT_MASKS } from "@/utils/constants/inputMasks";

export const INITIAL_STATE_FORM = Object.freeze({
  email: "",
  password: ""
});

export const FORM_VALIDATIONS = Object.freeze({
  email: {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "El correo electrónico no es válido."
  },
  password: {
    required: true,
    message: "Por favor, introduce una contraseña."
  }
});

export const FORM_MASKS = Object.freeze({
  email: INPUT_MASKS.LOWER
});

export const ERROR_MESSAGES = Object.freeze({
  "user not found": "Correo electrónico incorrecto",
  "Missing password": "Por favor, introduzca una contraseña",
  "Missing email": "Por favor, introduzca un correo electrónico",
  "Missing email or username": "Por favor, introduzca un correo electrónico",
  default: "Ha ocurrido un error al iniciar sesión"
});
