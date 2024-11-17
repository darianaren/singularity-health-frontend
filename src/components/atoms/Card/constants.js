export const CARD_SIZES = Object.freeze({
  small: Symbol("The card is small"),
  medium: Symbol("The card is medium"),
  large: Symbol("The card is large")
});

export const CARD_SIZES_VALUE = Object.freeze({
  [CARD_SIZES.small]: "small",
  [CARD_SIZES.medium]: "medium",
  [CARD_SIZES.large]: "large"
});

export const BACKGROUND_COLORS = Object.freeze({
  blue: Symbol("The background is blue"),
  orange: Symbol("The background is orange")
});

export const BACKGROUND_COLORS_VALUE = Object.freeze({
  [BACKGROUND_COLORS.blue]: "blue",
  [BACKGROUND_COLORS.orange]: "orange"
});
