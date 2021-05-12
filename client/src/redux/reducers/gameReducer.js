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
  UPDATE_PLAYER,
  INITIALIZE_GAME,
  UPDATE_DISPLAY_GRID,
  UPDATE_PLAYER_CIRCLE,
  UPDATE_VIEW,
  FINAL_DISPLAY,
  RESIZE_PLAYER_CIRCLES,
} from "../types";

const INITIAL_STATE = {
  inProgress: false,
  complete: false,
  numPlayers: 0,
  interest: "",
  currentForm: 0,
  currentPlayer: 0,
  displayGrid: false,
  updateCircles: false,
  players: {},
  playerIds: [],
  circles: [],
  finalCircles: [],
  canvasDisplay: {
    adjustmentMultiplier: 1,
    view: {
      height: 0,
      width: 0,
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
    },
  },
};

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
        ...state,
        ...INITIAL_STATE,
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
    case INITIALIZE_GAME:
      console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload.game,
        players: {
          ...state.players,
          ...action.payload.players /*to change to players*/,
        },
      };
    case UPDATE_PLAYER:
      console.info(action.type, action.payload);
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload.currentPlayer]: {
            ...state.players[action.payload.currentPlayer],
            ...action.payload.responses,
          },
        },
      };
    case UPDATE_PLAYER_CIRCLE:
      console.info(action.type, action.payload);
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
    case FINAL_DISPLAY:
      console.info(action.type, action.payload);
      return {
        ...state,
        displayGrid: action.payload.displayGrid,
        circles: action.payload.finalCircles,
      };
    case UPDATE_DISPLAY_GRID:
      console.info(action.type, action.payload);
      return {
        ...state,
        canvasDisplay: {
          ...state.canvasDisplay,
          adjustmentMultiplier: action.payload.adjustmentMultiplier,
          grid: { ...action.payload.grid },
        },
      };
    case RESIZE_PLAYER_CIRCLES:
      console.info(action.type, action.payload);
      return { ...state };
    case UPDATE_VIEW:
      console.info(action.type, action.payload);
      return {
        ...state,
        canvasDisplay: {
          ...state.canvasDisplay,
          view: {
            ...state.canvasDisplay.view,
            oldHeight: state.canvasDisplay.view.height,
            oldWidth: state.canvasDisplay.view.width,
            ...action.payload,
          },
        },
      };
    default:
      return state;
  }
};
