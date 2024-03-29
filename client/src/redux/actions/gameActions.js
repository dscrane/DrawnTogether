import {
  GENERATE_SESSION,
  INITIALIZE_PLAYERS,
  REINITIALIZE_PLAYERS,
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  NEXT_PLAYER,
  PREV_PLAYER,
  DISPLAY_CIRCLES,
  ADD_PLAYER_CIRCLE,
  UPDATE_PLAYER_CIRCLE,
  UPDATE_POLAR_GRID,
  FINAL_DISPLAY,
  UPDATE_DISPLAY_DIMENSIONS,
  UPDATE_SCREENSHOT,
  UPDATE_PLAYER_RESPONSES,
  TOGGLE_MODAL,
  // RESIZE_PLAYER_CIRCLES,
} from "../types";
import { createCircleDesign, checkResponse } from "../../utils";
import { api } from "../../utils";
// TODO think about aspect ratio for resizing circles if that is possible
/* ----   Game Actions    ---- */
// GENERATE_SESSION ACTION CREATOR
export const generateSession = () => async (dispatch, getState) => {
  const { width, centerPoint } = getState().session.display;
  const { data } = await api.post("/games/generateSession", { centerPoint, width });
  dispatch({
    type: GENERATE_SESSION,
    payload: {
      session: { ...data.game, currentForm: 1, displayGrid: true, currentPlayer: 0 },
      display: {
        ...data.gridPaths,
      },
    },
  });
};
// INITIALIZE_PLAYERS ACTION CREATOR
export const initializePlayers = (gameId, values) => async (dispatch) => {
  const { data } = await api.post("/games/initializePlayers", {
    gameId,
    interest: values.interest,
    players: values.players,
  });
  await dispatch({
    type: INITIALIZE_PLAYERS,
    payload: { ...data },
  });
};
// REINITIALIZE_PLAYERS ACTION CREATOR
export const reinitializePlayers = (gameId, playerIds, values) => async (dispatch) => {
  const { data } = await api.post("/games/reinitializePlayers", {
    gameId,
    playerIds,
    values,
  });
  dispatch({ type: REINITIALIZE_PLAYERS, payload: { ...data } });
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
export const endGame = (gameId) => async (dispatch) => {
  await api.post("/games/endGame", { gameId });
  await dispatch({ type: END_GAME });
};
// NEXT_FORM ACTION CREATOR
export const nextForm = (currentForm) => async (dispatch, getState) => {
  const { players, currentPlayer } = getState().session;
  const newForm = currentForm + 1;
  const nextPlayer = players.length === 0 ? currentPlayer : 0;
  await dispatch({
    type: NEXT_FORM,
    payload: { currentPlayer: nextPlayer, currentForm: newForm },
  });
};
// PREV_FORM ACTION CREATOR
export const prevForm = (currentForm) => async (dispatch, getState) => {
  const { numPlayers } = getState().session;
  const newForm = currentForm - 1;
  await dispatch({
    type: PREV_FORM,
    payload: { currentForm: newForm, currentPlayer: numPlayers - 1 },
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
  const { display, currentForm } = getState().session;
  const circleSvgs = circles.map((circle) => createCircleDesign(circle, display.centerPoint, currentForm));

  dispatch({
    type: DISPLAY_CIRCLES,
    payload: {
      circleSvgs,
    },
  });
};
// ADD_PLAYER_CIRCLE
export const addPlayerCircle = (playerId, formData, currentForm, centerPoint) => async (dispatch, getState) => {
  const { display, _id, currentPlayer, players } = getState().session;
  const { isNewResponse, isUpdatedResponse, noUpdate } = checkResponse(formData, players[currentPlayer], currentForm);
  if (noUpdate) {
    return;
  }

  let data;
  if (isNewResponse) {
    const res = await api.post("/games/addPlayerCircle", {
      centerPoint,
      playerId,
      gameId: _id,
      responses: formData,
      updateStep: currentForm,
    });
    data = res.data;
  } else if (isUpdatedResponse) {
    dispatch(updatePlayerCircle(playerId, formData, currentForm, centerPoint));
    return;
  }
  await dispatch({
    type: UPDATE_PLAYER_RESPONSES,
    payload: { currentPlayer, responses: data.responses },
  });

  const circleSvg = createCircleDesign(data.circle, display.centerPoint, currentForm);
  await dispatch({
    type: ADD_PLAYER_CIRCLE,
    payload: { circleSvg, currentPlayer },
  });
  {
  }
};
// UPDATE_PLAYER_CIRCLE
export const updatePlayerCircle = (playerId, formData, currentForm, centerPoint) => async (dispatch, getState) => {
  const { display, currentForm, _id, currentPlayer, numPlayers, players } = getState().session;
  const { noUpdate } = checkResponse(formData, players[currentPlayer], currentForm);
  if (noUpdate) {
    return;
  }
  const { data } = await api.post("/games/updatePlayer", {
    centerPoint,
    playerId,
    currentPlayer,
    numPlayers,
    gameId: _id,
    responses: formData,
    updateStep: currentForm,
  });

  await dispatch({
    type: UPDATE_PLAYER_RESPONSES,
    payload: { currentPlayer, responses: data.responses },
  });

  const circleSvg = createCircleDesign(data.circle, display.centerPoint, currentForm);
  await dispatch({
    type: UPDATE_PLAYER_CIRCLE,
    payload: circleSvg,
  });
};
// UPDATE_POLAR_GRID ACTION CREATOR
export const updatePolarGrid = (width, centerPoint) => async (dispatch) => {
  const { data } = await api.post("/games/fetchPolarGrid", { width, centerPoint });
  dispatch({
    type: UPDATE_POLAR_GRID,
    payload: { ...data },
  });
};
// FINAL_DISPLAY ACTION CREATOR
export const finalDisplay = (gameId) => async (dispatch, getState) => {
  const { display, currentForm } = getState().session;
  const { data } = await api.post("/games/fetchCircleData", { gameId });
  const finalForm = currentForm + 1;
  const finalCircles = data.map((circle) => createCircleDesign(circle, display.centerPoint, currentForm));

  dispatch({
    type: FINAL_DISPLAY,
    payload: { finalCircles: finalCircles, displayGrid: false, currentForm: finalForm },
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
// UPDATE_SCREENSHOT ACTION CREATOR
export const updateScreenshot = (gameId, screenshotData) => async (dispatch) => {
  const { data } = await api.post("/games/updateScreenshot", { gameId, screenshotData });
  dispatch({
    type: UPDATE_SCREENSHOT,
    payload: data,
  });
};
/* ----  ***  ---- */
// TOGGLE_MODAL ACTION CREATOR
export const toggleModal = () => (dispatch, getState) => {
  const { showModal } = getState().session;
  dispatch({
    type: TOGGLE_MODAL,
    payload: !showModal,
  });
};
