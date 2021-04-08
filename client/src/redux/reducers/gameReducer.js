import {
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  NEXT_PLAYER,
  PREV_PLAYER,
  UPDATE_CIRCLES,
  DISPLAY_CIRCLES,
  DISPLAY_GRID,
  INITIALIZE_GROUP,
} from "../types";

const INITIAL_STATE = {
  interest: "",
  inProgress: false,
  currentForm: 0,
  currentPlayer: 0,
  numPlayers: 0,
  displayGrid: false,
  displayCircles: false,
  updateCircles: false,
};
/* NOTES */
// change list of players to an array not object
// */

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        ...action.payload,
      };
    case END_GAME:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case INITIALIZE_GROUP:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_CIRCLES:
      return {
        ...state,
        ...action.payload,
      };
    case DISPLAY_CIRCLES:
      return {
        ...state,
        ...action.payload,
      };
    case DISPLAY_GRID:
      return {
        ...state,
        ...action.payload,
      };
    case NEXT_FORM:
      return {
        ...state,
        ...action.payload,
      };
    case PREV_FORM:
      return {
        ...state,
        ...action.payload,
      };
    case NEXT_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload,
      };
    case PREV_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload,
      };
    default:
      return state;
  }
};
