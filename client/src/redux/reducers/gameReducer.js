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
  SET_INTEREST, UPDATE_DISPLAY_GRID
} from '../types';

const INITIAL_STATE = {
  config: {
    interest: '',
    inProgress: false,
    currentForm: 0,
    currentPlayer: 0,
    numPlayers: 0,
    displayCircles: false,
    updateCircles: false,
  },
  players: [],
  display: {
    windowDimensions: {
      height: 0,
      width: 0
    },
    grid: {
      stage: 0,
      svgDim: 0,
      radius: 0,
      axis: 0,
      cross: 0,
      cx: 0,
      cy: 0,
      step: 0,
    }
  }
};
/* NOTES */
// change list of players to an array not object
// */


export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    /* --- GAME REDUCERS --- */
    case START_GAME:
      console.log('[START_GAME]: ', action.payload)
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload
        },
      }
    case END_GAME:
      console.log('[END_GAME]: ', action.payload)
      return {
        ...state,
        ...INITIAL_STATE
      }
    case SET_INTEREST:
      console.log('[SET_INTEREST]: ', action.payload)
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload
        }
      }
    case UPDATE_CIRCLES:
      console.log('[UPDATE_CIRCLES]: ', action.payload)
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload
        }
      }
    case DISPLAY_CIRCLES:
      console.log('[DISPLAY_CIRCLES]: ', action.payload)
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload
        }
      }
    case NEXT_FORM:
      console.log('[NEXT_FORM]: ', action.payload)
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload,
          currentPlayer: 0
        }
      }
    case PREV_FORM:
      console.log('[PREV_FORM]: ', action.payload)
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload
        }

      }
    /* --- END GAME REDUCERS ---*/
    /* *** */
    /* *** */
    /* *** */
    /* --- PLAYER REDUCERS --- */
    case NEW_PLAYER:
      console.log('[NEW_PLAYER]: ', action.payload)
      return {
        ...state,
        numPlayers: state.numPlayers + 1,
        players: [
          ...state.players,
          {
            id: action.payload.id,
            name: action.payload.name,
            responses: {
              association: parseInt(action.payload.association)
            },
            circle: {}
          }
        ]
      }
    case UPDATE_PLAYER:
      console.log('[UPDATE_PLAYER]: ', action.payload)
      return {
        ...state,
        players: [
          ...state.players,
          {
            id: action.payload.id,
            responses: {
              ...state.players[action.payload.id].responses,
              ...action.payload.responses
            },
            circle: {
              ...state.players[action.payload.id].circle,
              ...action.payload.circle
            }
          }
        ]
      }
    case NEXT_PLAYER:
      console.log('[NEXT_PLAYER]: ', action.payload)
      return {
        ...state,
        currentPlayer: action.payload
      }
    case PREV_PLAYER:
      console.log('[PREV_PLAYER]: ', action.payload)
      return {
        ...state,
        currentPlayer: action.payload
      }
    /* --- END PLAYER REDUCERS ---*/
    /* *** */
    /* *** */
    /* *** */
    /* --- DISPLAY REDUCERS --- */
    case UPDATE_DISPLAY_GRID:
      console.log(action.type)
      return {
        ...state,
        windowDimensions: {
          ...state.windowDimensions,
          ...action.payload.windowDimensions
        },
        grid: {
          ...state.grid,
          ...action.payload.grid
        }
      }
    /* --- END DISPLAY REDUCERS ---*/
    default:
      return state;
  }
}
