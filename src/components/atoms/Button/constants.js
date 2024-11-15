export const INITIAL_STATE = {
  coords: { x: 0, y: 0 },
  isAnimating: false,
  animationKey: 0
};

export const ACTIONS_TYPES = Object.freeze({
  CLICK: Symbol("Click action"),
  ANIMATION_END: Symbol("Animation deadline")
});
