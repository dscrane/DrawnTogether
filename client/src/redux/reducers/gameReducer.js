import {
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  RESET_FORM,
  NEXT_PLAYER,
  PREV_PLAYER,
  UPDATE_PLAYER,
  INITIALIZE_GAME,
  UPDATE_DISPLAY_GRID,
  UPDATE_PLAYER_CIRCLE,
  UPDATE_FINAL_CIRCLES,
  UPDATE_VIEW,
  FINAL_DISPLAY,
  RESIZE_PLAYER_CIRCLES,
  INITIAL_STATE,
} from "../types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

        centerPoint: {
          ...state.centerPoint,
        },
        display: {
          ...state.display,
        },
      };
    case "GENERATE_SESSION": {
      console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload.game,
      };
    }
    case "DISPLAY_CIRCLES":
      console.info(action.type, action.payload);
      return {
        ...state,
        circles: [...state.circles, ...action.payload.circleSvgs],
      };
    case INITIALIZE_GAME:
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
    case "SHOW_RESULTS":
      return {
        ...state,
        ...action.payload,
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
    case RESET_FORM:
      console.log(action.type, action.payload);
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
    case UPDATE_PLAYER:
      console.info(action.type, action.payload);
      return {
        ...state,
        circles: [
          ...state.circles.map((circle, i) => {
            return i !== action.payload.playerIndex ? circle : action.payload.circleSVG;
          }),
        ],
        players: {
          ...state.players,
          [action.payload.playerIndex]: {
            ...state.players[action.payload.playerIndex],
            ...action.payload.circles,
          },
        },
      };
    case UPDATE_PLAYER_CIRCLE:
      console.info(action.type, action.payload);
      return {
        ...state,
        circles: [
          ...state.circles.map((circle, i) => {
            return i !== action.payload.playerIndex ? circle : action.payload.circleSVG;
          }),
        ],
        players: {
          ...state.players,
          [action.payload.playerIndex]: {
            ...state.players[action.payload.playerIndex],
            ...action.payload.circles,
          },
        },
      };
    case RESIZE_PLAYER_CIRCLES:
      console.info(action.type, action.payload);
      return { ...state };
    case UPDATE_FINAL_CIRCLES:
      return {
        ...state,
        finalCircles: [...state.finalCircles, action.payload.initialCircleSVG],
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
    case UPDATE_DISPLAY_GRID:
      console.info(action.type, action.payload);
      return {
        ...state,
        resizeCircles: action.payload.resizeCircles,
        centerPoint: {
          ...state.centerPoint,
          x: Math.round(action.payload.grid.cx),
          y: Math.round(action.payload.grid.cy),
        },
        display: {
          ...state.display,
          ...action.payload.grid,
          resizeRatio: action.payload.resizeRatio,
        },
      };
    case "UPDATE_POLAR_GRID":
      console.info(action.type, action.payload);
      return {
        ...state,
        display: {
          ...state.display,
          polarGridPath: action.payload,
        },
      };
    // TODO change to 'updateDisplayDimensions'
    case UPDATE_VIEW:
      console.info(action.type, action.payload);
      return {
        ...state,
        display: {
          ...state.display,
          ...action.payload,
          yAxisCenter: parseFloat((action.payload.height / 2).toFixed(4)),
          xAxisCenter: parseFloat((action.payload.width / 2).toFixed(4)),
          oldHeight: state.display.height,
          oldWidth: state.display.width,
        },
      };
    default:
      return state;
  }
};
