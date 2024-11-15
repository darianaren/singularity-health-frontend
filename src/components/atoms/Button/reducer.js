import { ACTIONS_TYPES } from "./constants";

export const buttonReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.CLICK: {
      const { clientX, clientY, rect } = action.payload;
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      return {
        ...state,
        coords: { x, y },
        isAnimating: true,
        animationKey: state.animationKey + 1
      };
    }
    case ACTIONS_TYPES.ANIMATION_END:
      return {
        ...state,
        isAnimating: false
      };

    default:
      return state;
  }
};
