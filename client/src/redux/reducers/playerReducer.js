import { NEW_PLAYER, UPDATE_PLAYER_CIRCLE, UPDATE_PLAYER, RESIZE_PLAYER_CIRCLES } from "../types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_PLAYER:
      console.info("%c[NEW_PLAYER]: ", "color: yellow", action.payload);
      return [
        ...state,
        {
          ...action.payload.responses,
          circle: { ...action.payload.circle },
        },
      ];

    case UPDATE_PLAYER:
      console.info("%c[UPDATE_PLAYER]: ", "color: yellow", action.payload);
      return state.map((el, i) => {
        return i === action.payload.currentPlayer
          ? {
              ...el,
              ...action.payload.responses,
            }
          : el;
      });

    case UPDATE_PLAYER_CIRCLE:
      return state.map((el, i) => {
        return i === action.payload.currentPlayer
          ? {
              ...el,
              circle: {
                ...action.payload.circle,
              },
            }
          : el;
      });

    case RESIZE_PLAYER_CIRCLES:
      console.info("%c[RESIZE_PLAYER_CIRCLES]: ", "color: yellow", action.payload);
      return {
        ...state,
      };

    default:
      return state;
  }
};
