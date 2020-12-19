import {
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  NEW_PLAYER,
  UPDATE_PLAYER,
  NEXT_PLAYER,
  PREV_PLAYER,
  UPDATE_CIRCLES,
  DISPLAY_CIRCLES,
  SET_INTEREST,
  UPDATE_DISPLAY_GRID,
} from "../types";

const INITIAL_STATE = {
  interest: "",
  inProgress: false,
  currentForm: 0,
  currentPlayer: 0,
  numPlayers: 0,
  displayCircles: false,
  updateCircles: false,
};
/* NOTES */
// change list of players to an array not object
// */

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* --- GAME REDUCERS --- */
    case START_GAME:
      console.log("[START_GAME]: ", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case END_GAME:
      console.log("[END_GAME]: ", action.payload);
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case SET_INTEREST:
      console.log("[SET_INTEREST]: ", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_CIRCLES:
      console.log("[UPDATE_CIRCLES]: ", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case DISPLAY_CIRCLES:
      console.log("[DISPLAY_CIRCLES]: ", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case NEXT_FORM:
      console.log("[NEXT_FORM]: ", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case PREV_FORM:
      console.log("[PREV_FORM]: ", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case NEXT_PLAYER:
      console.log("[NEXT_PLAYER]: ", action.payload);
      return {
        ...state,
        currentPlayer: action.payload,
      };
    case PREV_PLAYER:
      console.log("[PREV_PLAYER]: ", action.payload);
      return {
        ...state.config,
        currentPlayer: action.payload,
      };
    /* --- END GAME REDUCERS ---*/
    default:
      return state;
  }
};
