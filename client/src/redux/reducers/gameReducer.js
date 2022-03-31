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
  INITIALIZE_PLAYERS,
  UPDATE_DISPLAY_GRID,
  UPDATE_PLAYER_CIRCLE,
  UPDATE_FINAL_CIRCLES,
  UPDATE_VIEW,
  FINAL_DISPLAY,
  RESIZE_PLAYER_CIRCLES,
  INITIAL_STATE,
} from "../types";
import { createReducer } from "@reduxjs/toolkit";

export const reducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(START_GAME, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(INITIALIZE_GAME, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(UPDATE_VIEW, (state, action) => {
      return {
        ...state,
        gridDisplay: {
          ...state.gridDisplay,
          previousHeight: state.gridDisplay.height,
          previousWidth: state.gridDisplay.width,
          yAxisCenter: parseFloat((action.payload.height / 2).toFixed(4)),
          xAxisCenter: parseFloat((action.payload.width / 2).toFixed(4)),
          ...action.payload,
        },
      };
    })
    .addCase(END_GAME, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(NEXT_PLAYER, (state, action) => {
      state.currentPlayer++;
    })
    .addCase(PREV_PLAYER, (state, action) => {
      state.currentPlayer--;
    })
    .addCase(NEXT_FORM, (state, action) => {
      state.currentPlayer = 0;
      state.currentForm++;
    })
    .addCase(PREV_FORM, (state, action) => {
      state.currentPlayer = state.playerIds.length - 1;
      state.currentForm--;
    })
    .addCase(UPDATE_DISPLAY_GRID, (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        gridDisplay: {
          ...state.gridDisplay,
          ...action.payload,
        },
      };
    })
    .addCase(INITIALIZE_PLAYERS, (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        players: {
          ...state.players,
          ...action.payload.playersObj,
        },
        playerIds: [...state.playerIds, ...action.payload.playerIds],
      };
    })
    .addCase(UPDATE_PLAYER, (state, action) => {});
});

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
        ...INITIAL_STATE,
        centerPoint: {
          ...state.centerPoint,
        },
        gridDisplay: {
          ...state.gridDisplay,
        },
      };
    case INITIALIZE_GAME:
      // console.info(action.type, action.payload);
      return {
        ...state,
        ...action.payload.game,
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
        inProgress: action.payload.inProgress,
        currentForm: action.payload.currentForm,
        displayGrid: action.payload.displayGrid,
        finalCircles: [...state.finalCircles, ...action.payload.finalCircles],
      };
    // TODO have the grid updates handled on the server
    case UPDATE_DISPLAY_GRID:
      // console.info(action.type, action.payload);
      return {
        ...state,
        resizeCircles: action.payload.resizeCircles,
        centerPoint: {
          ...state.centerPoint,
          x: Math.round(action.payload.xAxisCenter),
          y: Math.round(action.payload.yAxisCenter),
        },
        gridDisplay: {
          ...state.gridDisplay,
          ...action.payload,
        },
      };
    case UPDATE_VIEW:
      console.info(action.type, action.payload);
      return {
        ...state,
        gridDisplay: {
          ...state.gridDisplay,
          oldHeight: state.gridDisplay.height,
          oldWidth: state.gridDisplay.width,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
