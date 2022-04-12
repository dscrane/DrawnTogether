import {
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
import { createCircleDesign } from "../../utils";
import { api } from "../../utils";
// TODO think about aspect ratio for resizing circles if that is possible
/* ----   Game Actions    ---- */
// GENERATE_SESSION ACTION CREATOR
export const generateSession = () => async (dispatch) => {
  const { data } = await api.post("/games/generateSession", {});
  console.log(data);
  dispatch({
    type: GENERATE_SESSION,
    payload: { ...data.game, currentForm: 1, displayGrid: true, currentPlayer: 0 },
  });
};
// CREATE_PLAYERS ACTION CREATOR
export const initializePlayers = (initialData) => async (dispatch) => {
  dispatch({
    type: INITIALIZE_PLAYERS,
    payload: { ...initialData },
  });
};
// START_GAME ACTION CREATOR
export const startGame = () => async (dispatch) => {
  dispatch({
    type: START_GAME,
    payload: {
      inProgress: true,
      currentForm: 1,
      displayGrid: true,
      currentPlayer: 0,
    },
  });
};
// END_GAME ACTION CREATOR
export const endGame = () => (dispatch) => {
  dispatch({ type: END_GAME });
};
// NEXT_FORM ACTION CREATOR
export const nextForm = (currentForm) => async (dispatch, getState) => {
  const { players, currentPlayer } = getState().gameState;
  const newForm = currentForm + 1;
  const nextPlayer = players.length === 0 ? currentPlayer : 0;
  await dispatch({
    type: NEXT_FORM,
    payload: { currentPlayer: nextPlayer, currentForm: newForm },
  });
};
// PREV_FORM ACTION CREATOR
export const prevForm = (currentForm) => async (dispatch, getState) => {
  const { numPlayers } = getState().gameState;
  const newForm = currentForm - 1;
  await dispatch({
    type: PREV_FORM,
    payload: { currentForm: newForm, currentPlayer: numPlayers, circles: [] },
  });
};
/* ----  ***  ---- */

/* ----   Player Actions    ---- */
// NEXT_PLAYER ACTION CREATOR
export const nextPlayer = (currentPlayer) => (dispatch) => {
  const newPlayer = currentPlayer + 1;
  dispatch({
    type: NEXT_PLAYER,
    payload: { currentPlayer: newPlayer },
  });
};
// PREV_PLAYER ACTION CREATOR
export const prevPlayer = (currentPlayer) => (dispatch) => {
  const newPlayer = currentPlayer - 1;
  dispatch({
    type: PREV_PLAYER,
    payload: { currentPlayer: newPlayer },
  });
};
/* ----  ***  ---- */

/* ----   Display Actions    ---- */
// DISPLAY_CIRCLES ACTION CREATOR
export const displayCircles = (circles) => (dispatch, getState) => {
  const { display, currentForm } = getState().gameState;
  const circleSvgs = circles.map((circle) => createCircleDesign(circle, display.centerPoint, currentForm));

  dispatch({
    type: DISPLAY_CIRCLES,
    payload: {
      circleSvgs,
    },
  });
};
// UPDATE_POLAR_GRID ACTION CREATOR
export const updatePolarGrid = (polarGridPath) => (dispatch) => {
  dispatch({
    type: UPDATE_POLAR_GRID,
    payload: polarGridPath,
  });
};
// FINAL_DISPLAY ACTION CREATOR
export const finalDisplay = (circles) => async (dispatch, getState) => {
  const { display, currentForm } = getState().gameState;
  const finalForm = currentForm + 1;
  const finalCircles = circles.map((circle) => createCircleDesign(circle, display.centerPoint));

  dispatch({
    type: FINAL_DISPLAY,
    payload: { finalCircles: finalCircles, displayGrid: false, currentForm: finalForm },
  });
};
export const updateScreenshot =
  ({ screenshot }) =>
  (dispatch) => {
    dispatch({
      type: "UPDATE_SCREENSHOT",
      payload: screenshot,
    });
  };
// UPDATE_DISPLAY_DIMENSIONS ACTION CREATOR
export const updateDisplayDimensions =
  ({ height, width }) =>
  (dispatch) => {
    dispatch({
      type: UPDATE_DISPLAY_DIMENSIONS,
      payload: {
        height: Math.round(height),
        width: Math.round(width),
      },
    });
  };
/* ----  ***  ---- */
