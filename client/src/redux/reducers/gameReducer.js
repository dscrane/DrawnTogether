import {
  INITIAL_STATE,
  GENERATE_SESSION,
  INITIALIZE_PLAYERS,
  GENERATE_MOCKS,
  REINITIALIZE_PLAYERS,
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  NEXT_PLAYER,
  PREV_PLAYER,
  DISPLAY_CIRCLES,
  UPDATE_PLAYER_CIRCLE,
  TOGGLE_MODAL,
  UPDATE_POLAR_GRID,
  FINAL_DISPLAY,
  UPDATE_DISPLAY_DIMENSIONS,
  UPDATE_SCREENSHOT,
  ADD_PLAYER_CIRCLE,
  UPDATE_PLAYER_RESPONSES,
} from "../types";
import { createSlice } from "@reduxjs/toolkit";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENERATE_SESSION: {
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
    case GENERATE_MOCKS:
      return {
        ...state,
        players: {
          ...state.players,
          ...action.payload.mocks,
        },
      };
    case REINITIALIZE_PLAYERS:
      return {
        ...state,
        players: {
          ...state.players,
          ...action.payload,
        },
      };
    case START_GAME:
      return {
        ...state,
        ...action.payload,
      };
    case END_GAME:
      return {
        ...INITIAL_STATE,
        display: {
          ...state.display,
        },
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
    case DISPLAY_CIRCLES:
      return {
        ...state,
        circles: [...action.payload.circleSvgs],
      };
    case UPDATE_PLAYER_RESPONSES:
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
      return {
        ...state,
        circles: [
          ...state.circles.slice(0, action.payload.currentPlayer),
          action.payload.circleSvg,
          ...state.circles.slice(action.payload.currentPlayer + 1),
        ],
      };
    case UPDATE_PLAYER_CIRCLE:
      return {
        ...state,
        circles: state.circles.map((el, i) => (el.props.id === action.payload.props.id ? action.payload : el)),
      };
    case UPDATE_POLAR_GRID:
      return {
        ...state,
        display: {
          ...state.display,
          ...action.payload,
        },
      };
    case FINAL_DISPLAY:
      return {
        ...state,
        currentForm: action.payload.currentForm,
        displayGrid: action.payload.displayGrid,
        finalCircles: [...state.finalCircles, ...action.payload.finalCircles],
      };
    case UPDATE_DISPLAY_DIMENSIONS:
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
      return {
        ...state,
        screenshot: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    default:
      return state;
  }
};
