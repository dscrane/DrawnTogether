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
  SET_INTEREST_AND_PLAYERS,
  UPDATE_DISPLAY_GRID,
  UPDATE_PLAYER_CIRCLE,
  UPDATE_VIEW,
} from "../types";

const INITIAL_STATE = {
  inProgress: false,
  currentForm: 0,
  numPlayers: 0,
  currentPlayer: 0,
  interest: "",
  displayGrid: false,
  updateCircles: false,
  players: [],
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
  if (!action.type.startsWith("@@")) {
    console.info(action.type, action.payload);
  }

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
        ...action.payload,
      };
    case PREV_PLAYER:
      return {
        ...state,
        ...action.payload,
      };
    case SET_INTEREST_AND_PLAYERS:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_PLAYER:
      return state.players.map((el, i) => {
        return i === action.payload.currentPlayer
          ? {
              ...el,
              ...action.payload.responses,
            }
          : el;
      });
    case UPDATE_PLAYER_CIRCLE:
      return state.players.map((el, i) => {
        return i === action.payload.currentPlayer
          ? {
              ...el,
              circle: {
                ...action.payload.updatedCircle,
              },
            }
          : el;
      });
    case UPDATE_DISPLAY_GRID:
      return {
        ...state,
        canvasDisplay: {
          ...state.canvasDisplay,
          grid: {
            ...state.canvasDisplay.grid,
            ...action.payload,
          },
        },
      };
    case UPDATE_VIEW:
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
