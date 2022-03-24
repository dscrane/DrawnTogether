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
      // console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case END_GAME:
      // console.info(action.type, action.payload);
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case INITIALIZE_GAME:
      // console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload.game,
        players: {
          ...state.players,
          ...action.payload.players /*to change to players*/,
        },
      };
    case "SHOW_RESULTS":
      return {
        ...state,
        ...action.payload,
      };
    case NEXT_FORM:
      // console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case PREV_FORM:
      // console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case RESET_FORM:
      // console.log(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case NEXT_PLAYER:
      // console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case PREV_PLAYER:
      // console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_PLAYER:
      // console.info(action.type, action.payload);
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
      // console.info(action.type, action.payload);
      return {
        ...state,
        circles: [
          ...state.circles.map((circle, i) => {
            return i !== action.payload.currentPlayer ? circle : action.payload.updatedPlayerCircle.circleSVG;
          }),
        ],
        players: {
          ...state.players,
          [action.payload.currentPlayer]: {
            ...state.players[action.payload.currentPlayer],
            ...action.payload.updatedPlayerCircle,
          },
        },
      };
    case RESIZE_PLAYER_CIRCLES:
      // console.info(action.type, action.payload);
      return { ...state };
    case UPDATE_FINAL_CIRCLES:
      return {
        ...state,
        finalCircles: [...state.finalCircles, action.payload.initialCircleSVG],
      };
    case FINAL_DISPLAY:
      // console.info(action.type, action.payload);
      return {
        ...state,
        displayGrid: action.payload.displayGrid,
        finalCircles: [...state.finalCircles, ...action.payload.completeCircles],
      };
    case UPDATE_DISPLAY_GRID:
      // console.info(action.type, action.payload);
      return {
        ...state,
        resizeCircles: action.payload.resizeCircles,
        centerPoint: {
          ...state.centerPoint,
          x: Math.round(action.payload.grid.cx),
          y: Math.round(action.payload.grid.cy),
        },
        canvasDisplay: {
          ...state.canvasDisplay,
          resizeRatio: action.payload.resizeRatio,
          grid: { ...action.payload.grid },
        },
      };
    case UPDATE_VIEW:
      // console.info(action.type, action.payload);
      return {
        ...state,
        resizeCircles: action.payload.resizeCircles,
        canvasDisplay: {
          ...state.canvasDisplay,
          view: {
            ...state.canvasDisplay.view,
            oldHeight: state.canvasDisplay.view.height,
            oldWidth: state.canvasDisplay.view.width,
            ...action.payload.view,
          },
        },
      };
    default:
      return state;
  }
};
