import {
  INITIAL_STATE,
  GENERATE_SESSION,
  INITIALIZE_PLAYERS,
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  DISPLAY_CIRCLES,
  UPDATE_POLAR_GRID,
  FINAL_DISPLAY,
  UPDATE_DISPLAY_DIMENSIONS,
  NEXT_PLAYER,
  PREV_PLAYER,
  // RESIZE_PLAYER_CIRCLES,
} from "../types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENERATE_SESSION: {
      console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload.game,
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
          ...action.payload.playersObj /*to change to players*/,
        },
        playerIds: [...state.playerIds, ...action.payload.playerIds],
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

    case DISPLAY_CIRCLES:
      console.info(action.type, action.payload);
      return {
        ...state,
        circles: [...action.payload.circleSvgs],
      };

    // case RESET_FORM:
    //   console.log(action.type, action.payload);
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
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

    case FINAL_DISPLAY:
      console.info(action.type, action.payload);
      return {
        ...state,
        inProgress: action.payload.inProgress,
        currentForm: action.payload.currentForm,
        displayGrid: action.payload.displayGrid,
        finalCircles: [...state.finalCircles, ...action.payload.finalCircles],
      };

    case UPDATE_POLAR_GRID:
      console.info(action.type, action.payload);
      return {
        ...state,
        display: {
          ...state.display,
          polarGridPath: action.payload,
        },
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
    default:
      return state;
  }
};
