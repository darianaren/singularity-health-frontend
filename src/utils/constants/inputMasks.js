export const INPUT_MASKS = Object.freeze({
  LOWER: Symbol("Applies lower case to input content"),
  UPPER: Symbol("Applies upper case to input content")
});

export const APPLY_MASK = {
  [INPUT_MASKS.LOWER]: (value) => value.toLowerCase(),
  [INPUT_MASKS.UPPER]: (value) => value.toUpperCase(),
  default: (value) => value
};
