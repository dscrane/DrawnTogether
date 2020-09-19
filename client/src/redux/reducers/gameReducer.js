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
  SET_INTEREST
} from '../types';

const INITIAL_STATE = {
  interest: null,
  inProgress: false,
  currentForm: 0,
  currentPlayer: null,
  players: {},
  displayCircles: false,
  updateCircles: false,
};
/* NOTES */
// change list of players to an array not object
// */


export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case START_GAME:
      return {
        ...state,
        ...action.payload
      }
    case END_GAME:
      return {
        ...state,
        ...INITIAL_STATE
      }
    case SET_INTEREST:
      return {
        ...state,
        ...action.payload
      }
    case NEW_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload.id]: {
            id: action.payload.id,
            responses:{},
            circle: {}
          }
        }
      }
    case UPDATE_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload.id]: {
            ...state.players[action.payload.id],
            responses: {
              ...state.players[action.payload.id].responses,
              ...action.payload.responses
            },
            circle: {
              ...state.players[action.payload.id].circle,
              ...action.payload.circle
            }
          }
        }
      }
    case NEXT_PLAYER:
      return {
        ...state,
        ...action.payload
      }
    case PREV_PLAYER:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_CIRCLES:
      return {
        ...state,
        ...action.payload
      }
    case DISPLAY_CIRCLES:
      return {
        ...state,
        ...action.payload
      }
    case NEXT_FORM:
      console.log('[NEXT_FORM]', action.payload)
      return {
        ...state,
        ...action.payload
      }
    case PREV_FORM:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}