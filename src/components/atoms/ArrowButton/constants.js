export const ARROW_DIRECTION = Object.freeze({
  left: Symbol("The arrow points to the left"),
  right: Symbol("The arrow points to the right")
});

export const ARROW_DIRECTION_VALUE = Object.freeze({
  [ARROW_DIRECTION.left]: "left",
  [ARROW_DIRECTION.right]: "right"
});
