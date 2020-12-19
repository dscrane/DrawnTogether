import { NEW_PLAYER, UPDATE_PLAYER } from "../types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_PLAYER:
      console.log("[NEW_PLAYER]: ", action.payload);
      return [
        ...state,
        {
          ...action.payload.responses,
          circle: { ...action.payload.circle },
        },
      ];

    case UPDATE_PLAYER:
      console.log("[UPDATE_PLAYER]: ", action.payload);
      return state.map((el, i) => {
        return i === action.payload.currentPlayer
          ? {
              ...el,
              ...action.payload.responses,
              ...action.payload.circle,
            }
          : el;
      });

    default:
      return state;
  }
};
