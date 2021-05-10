import {
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  UPDATE_PLAYER,
  FINAL_DISPLAY,
  SET_INTEREST_AND_PLAYERS,
  NEXT_PLAYER,
  PREV_PLAYER,
  UPDATE_PLAYER_CIRCLE,
  RESIZE_PLAYER_CIRCLES,
  UPDATE_VIEW,
  UPDATE_DISPLAY_GRID,
} from "../types";
import { circleAlterations, handleGridUpdate } from "../../utils";
import axios from "axios";

/* ----   START_GAME ACTION CREATOR    ---- */
export const startGame = () => (dispatch) => {
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
/* ----   END_GAME ACTION CREATOR    ---- */
export const endGame = () => (dispatch) => {
  dispatch({ type: END_GAME });
};
/* ----   CREATE_PLAYERS ACTION CREATOR    ---- */
export const setInterestAndPlayers = ({ interest, ...responses }) => (dispatch) => {
  const numPlayers = Object.keys(responses).length;
  const circles = new Array(numPlayers).fill({});
  dispatch({
    type: SET_INTEREST_AND_PLAYERS,
    payload: { interest, responses, numPlayers, circles },
  });
};
/* ----   CREATE_PLAYERS ACTION CREATOR    ---- */
export const createPlayers = (responses) => {};
/* ----   NEXT_PLAYER ACTION CREATOR    ---- */
export const nextPlayer = (currentPlayer) => (dispatch) => {
  const newPlayer = currentPlayer + 1;
  dispatch({
    type: NEXT_PLAYER,
    payload: { currentPlayer: newPlayer },
  });
};
/* ----    PREV_PLAYER ACTION CREATOR    ---- */
export const prevPlayer = (currentPlayer) => (dispatch) => {
  const newPlayer = currentPlayer - 1;
  dispatch({
    type: PREV_PLAYER,
    payload: { currentPlayer: newPlayer },
  });
};
/* ----    UPDATE_PLAYER ACTION CREATOR    ---- */
export const updatePlayer = (currentPlayer, responses) => (dispatch) => {
  axios.post('http://localhost:5500/players/update', {_id: "THIS IS THE ID"})
  dispatch({
    type: UPDATE_PLAYER,
    payload: {
      responses,
      currentPlayer,
    },
  });
};
/* ----    UPDATE_PLAYER_CIRCLE ACTION CREATOR    ---- */
export const updatePlayerCircle = (player, currentPlayer, currentForm) => async (dispatch, getState) => {
  const { canvasDisplay } = getState().gameState;
  const updatedPlayerCircle = await circleAlterations[currentForm](player, currentPlayer, canvasDisplay.grid);

  dispatch({
    type: UPDATE_PLAYER_CIRCLE,
    payload: { currentPlayer, updatedPlayerCircle, updateCircles: true },
  });
};
/* ----    FINAL_DISPLAY ACTION CREATOR    ---- */
export const finalDisplay = (players) => (dispatch, getState) => {
  const allPlayerCircles = [...getState().gameState.circles];
  console.log(players);
  Object.keys(players).forEach((player) => {
    allPlayerCircles.push(players[player].initialCircleSVG);
  });
  dispatch({
    type: FINAL_DISPLAY,
    payload: { finalCircles: allPlayerCircles, displayGrid: false },
  });
};
/* ----   NEXT_FORM ACTION CREATOR    ---- */
export const nextForm = (currentForm) => async (dispatch, getState) => {
  const { players, currentPlayer } = getState().gameState;
  const newForm = currentForm + 1;
  const nextPlayer = players.length === 0 ? currentPlayer : 0;
  await dispatch({
    type: NEXT_FORM,
    payload: { currentPlayer: nextPlayer, currentForm: newForm },
  });
};
/* ----   PREV_FORM ACTION CREATOR    ---- */
export const prevForm = (currentForm) => async (dispatch, getState) => {
  const { numPlayers } = getState().gameState;
  const newForm = currentForm - 1;
  await dispatch({
    type: PREV_FORM,
    payload: { currentForm: newForm, currentPlayer: numPlayers },
  });
};
/* ----   RESIZE_PLAYER_CIRCLES ACTION CREATOR    ---- */
export const resizePlayerCircles = ({ cx, cy }) => (dispatch) => {
  console.log("hit");
  dispatch({
    type: RESIZE_PLAYER_CIRCLES,
    payload: { cx, cy },
  });
};
/* ----   UPDATE_VIEW ACTION CREATOR    ---- */
export const updateView = (dimensions) => (dispatch) => {
  dispatch({
    type: UPDATE_VIEW,
    payload: {
      height: Math.round(dimensions.height),
      width: Math.round(dimensions.width),
    },
  });
};
/* ----   UPDATE_DISPLAY_GRID ACTION CREATOR    ---- */
export const updateGridDisplay = (view) => async (dispatch, getState) => {
  const multiplier = getState().gameState.canvasDisplay.adjustmentMultiplier;
  const updatedGrid = await handleGridUpdate(view, multiplier);

  dispatch({
    type: UPDATE_DISPLAY_GRID,
    payload: { ...updatedGrid },
  });
};
