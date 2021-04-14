import {
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  UPDATE_PLAYER,
  DISPLAY_CIRCLES,
  DISPLAY_GRID,
  INITIALIZE_GROUP,
  SET_INTEREST_AND_PLAYERS,
  NEXT_PLAYER,
  PREV_PLAYER,
  UPDATE_PLAYER_CIRCLE,
} from "../types";
import { circleAlterations } from "../../utils";

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
  dispatch({
    type: SET_INTEREST_AND_PLAYERS,
    payload: { interest, responses, numPlayers: Object.keys(responses).length },
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
