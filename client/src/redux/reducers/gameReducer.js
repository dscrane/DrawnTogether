import {
  INITIAL_STATE,
  GENERATE_SESSION,
  INITIALIZE_PLAYERS,
  REINITIALIZE_PLAYERS,
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  NEXT_PLAYER,
  PREV_PLAYER,
  DISPLAY_CIRCLES,
  UPDATE_PLAYER_CIRCLE,
  UPDATE_POLAR_GRID,
  FINAL_DISPLAY,
  UPDATE_DISPLAY_DIMENSIONS,
  UPDATE_SCREENSHOT,
  ADD_PLAYER_CIRCLE,
  UPDATE_PLAYER_RESPONSES,
} from "../types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENERATE_SESSION: {
      console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload.session,
        display: {
          ...state.display,
          ...action.payload.display,
        },
      };
    }
    case INITIALIZE_PLAYERS:
      console.info(action.type, action.payload);
      return {
        ...state,
        interest: action.payload.interest,
        numPlayers: action.payload.numPlayers,
        players: {
          ...state.players,
          ...action.payload.playersObj,
        },
        playerIds: [...state.playerIds, ...action.payload.playerIds],
      };
    case REINITIALIZE_PLAYERS:
      console.info(action.type, action.payload);
      return {
        ...state,
        players: {
          ...state.players,
          ...action.payload,
        },
      };
    case START_GAME:
      console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case END_GAME:
      console.info(action.type, action.payload);
      return {
        ...INITIAL_STATE,
        display: {
          ...state.display,
        },
      };
    case NEXT_FORM:
      console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case PREV_FORM:
      console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case NEXT_PLAYER:
      console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case PREV_PLAYER:
      console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case DISPLAY_CIRCLES:
      console.info(action.type, action.payload);
      return {
        ...state,
        circles: [...action.payload.circleSvgs],
      };
    case UPDATE_PLAYER_RESPONSES:
      console.info(action.type, action.payload);
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload.currentPlayer]: {
            ...state.players[action.payload.currentPlayer],
            responses: {
              ...state.players[action.payload.currentPlayer].responses,
              ...action.payload.responses,
            },
          },
        },
      };
    case ADD_PLAYER_CIRCLE:
      console.info(action.type, action.payload, state.circles);
      return {
        ...state,
        circles: [
          ...state.circles.slice(0, action.payload.currentPlayer),
          action.payload.circleSvg,
          ...state.circles.slice(action.payload.currentPlayer + 1),
        ],
      };
    case UPDATE_PLAYER_CIRCLE:
      console.info(action.type, action.payload);
      return {
        ...state,
        circles: state.circles.map((el, i) => (el.props.id === action.payload.props.id ? action.payload : el)),
      };
    case UPDATE_POLAR_GRID:
      console.info(action.type, Object.keys(action.payload));
      return {
        ...state,
        display: {
          ...state.display,
          ...action.payload,
        },
      };
    case FINAL_DISPLAY:
      console.info(action.type, action.payload);
      return {
        ...state,
        currentForm: action.payload.currentForm,
        displayGrid: action.payload.displayGrid,
        finalCircles: [...state.finalCircles, ...action.payload.finalCircles],
      };
    case UPDATE_DISPLAY_DIMENSIONS:
      console.info(action.type, action.payload);
      return {
        ...state,
        display: {
          ...state.display,
          ...action.payload,
          centerPoint: {
            y: parseFloat((action.payload.height / 2).toFixed(4)),
            x: parseFloat((action.payload.width / 2).toFixed(4)),
          },
          oldHeight: state.display.height,
          oldWidth: state.display.width,
        },
      };
    case UPDATE_SCREENSHOT:
      console.info(action.type, action.payload);
      return {
        ...state,
        screenshot: action.payload,
      };
    default:
      return state;
  }
};
