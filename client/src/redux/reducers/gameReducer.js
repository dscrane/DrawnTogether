import {
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  NEXT_PLAYER,
  PREV_PLAYER,
  UPDATE_CIRCLES,
  DISPLAY_CIRCLES,
  SET_INTEREST,
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
      console.info("%c[START_GAME]: ", "color: yellow", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case END_GAME:
      console.info("%c[END_GAME]: ", "color: yellow", action.payload);
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case SET_INTEREST:
      console.info("%c[SET_INTEREST]: ", "color: yellow", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_CIRCLES:
      console.info("%c[UPDATE_CIRCLES]: ", "color: yellow", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case DISPLAY_CIRCLES:
      console.info("%c[DISPLAY_CIRCLES]: ", "color: yellow", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case NEXT_FORM:
      console.info("%c[NEXT_FORM]: ", "color: yellow", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case PREV_FORM:
      console.info("%c[PREV_FORM]: ", "color: yellow", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case NEXT_PLAYER:
      console.info("%c[NEXT_PLAYER]: ", "color: yellow", action.payload);
      return {
        ...state,
        currentPlayer: action.payload,
      };
    case PREV_PLAYER:
      console.info("%c[PREV_PLAYER]: ", "color: yellow", action.payload);
      return {
        ...state,
        currentPlayer: action.payload,
      };
    /* --- END GAME REDUCERS ---*/
    default:
      return state;
  }
};
