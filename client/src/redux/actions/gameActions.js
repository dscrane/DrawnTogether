import { io } from "socket.io-client";
import {
  START_GAME,
  START_GAME_EMITTER,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  RESET_FORM,
  UPDATE_PLAYER,
  FINAL_DISPLAY,
  INITIALIZE_GAME,
  NEXT_PLAYER,
  PREV_PLAYER,
  RESIZE_PLAYER_CIRCLES,
  UPDATE_VIEW,
  UPDATE_DISPLAY_GRID,
  UPDATE_FINAL_CIRCLES,
  UPDATE_PLAYER_CIRCLE,
  INITIALIZE_PLAYERS,
  INITIALIZE_PLAYERS_EMITTER,
} from "../types";
import { createCircleDesign, handleGridUpdate } from "../../utils";
import { api } from "../../utils";
import { createAction } from "@reduxjs/toolkit";

export const nextPlayer = createAction(NEXT_PLAYER);
export const prevPlayer = createAction(PREV_PLAYER);
export const nextForm = createAction(NEXT_FORM);
export const prevForm = createAction(PREV_FORM);
// export const startGame = createAction(START_GAME);
// export const initializeGame = createAction(INITIALIZE_GAME);
// export const initializePlayers = createAction(INITIALIZE_PLAYERS);

export const startGameEmitter = createAction(START_GAME_EMITTER, () => ({
  payload: {
    socket: true,
  },
}));
export const initializePlayersEmitter = createAction(INITIALIZE_PLAYERS_EMITTER, (formData) => ({
  payload: {
    formData,
    socket: true,
  },
}));
export const updateDisplayGrid = createAction(UPDATE_DISPLAY_GRID);
// export const updatePlayer = createAction(UPDATE_PLAYER);

/* ----    FINAL_DISPLAY ACTION CREATOR    ---- */
export const finalDisplay = (players, currentForm) => async (dispatch, getState) => {
  const { circles, centerPoint } = getState().gameState;
  const finalCircles = [...circles];
  const finalForm = currentForm + 1;
  for (let player in players) {
    finalCircles.push(createCircleDesign(players[player]._id, players[player].initialCircleData, centerPoint));
  }
  dispatch({
    type: FINAL_DISPLAY,
    payload: { finalCircles: finalCircles, displayGrid: false, inProgress: false, currentForm: finalForm },
  });
};

/* ----   INITIALIZE_GAME ACTION CREATOR    ---- */
export const initializeGame = () => async (dispatch) => {
  const { data } = await api.post("/games/initializeGame");
  dispatch({
    type: INITIALIZE_GAME,
    payload: { ...data },
  });
};
/* ----   INITIALIZE_PLAYERS ACTION CREATOR    ---- */
export const initializePlayers = (playerIds, playersObj) => async (dispatch) => {
  await dispatch({
    type: INITIALIZE_PLAYERS,
    payload: {
      playerIds,
      playersObj,
    },
  });
};

/* ----   START_GAME ACTION CREATOR    ---- */
export const startGame = () => async (dispatch) => {
  // TODO get the display grid information
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
/* ----   UPDATE_PLAYER ACTION CREATOR   ---- */
export const updatePlayer = (playerIndex, playerId, formData, currentForm) => async (dispatch, getState) => {
  const { xAxisCenter, yAxisCenter } = getState().gameState;
  dispatch({
    type: UPDATE_PLAYER,
    payload: {
      centerPoint: {
        xAxisCenter,
        yAxisCenter,
      },
      _id: playerId,
      responses: formData,
      updateStep: currentForm,
    },
  });
};

export const updatePolarGrid = (polarGridPath) => async (dispatch) => {
  dispatch({
    type: UPDATE_DISPLAY_GRID,
    payload: { ...polarGridPath },
  });
};
/* ----    UPDATE_PLAYER ACTION CREATOR    ---- */
// TODO make UPDATE_PLAYER into a socket emitter
// export const updatePlayer2 = (playerIndex, playerId, formData, currentForm) => async (dispatch, getState) => {
//   const { centerPoint, players } = getState().gameState;
//   const {
//     data: { data, error },
//   } = await api.patch("/users/update", {
//     centerPoint,
//     _id: playerId,
//     responses: formData,
//     updateStep: currentForm,
//   });
//
//   if (error) {
//     await alert(error.message);
//     dispatch({
//       type: RESET_FORM,
//       payload: { currentPlayer: playerIndex },
//     });
//     return false;
//   }
//
//   const circleSVG = createCircleDesign(playerId, data.circleData, centerPoint);
//   dispatch({
//     type: UPDATE_PLAYER_CIRCLE,
//     payload: {
//       circleSVG,
//       circles: {
//         circleData: data.circleData,
//         initialCircleData: data.initialCircleData || players[playerIndex].initialCircleData,
//       },
//       playerIndex,
//     },
//   });
//   return true;
// };

/* ----   CREATE_PLAYERS ACTION CREATOR    ---- */
// TODO make CREATE_PLAYERS into a socket emitter
// export const initializeGame = () => async (dispatch) => {
//   const { data } = await api.post("/games/initializeGame");
//   console.log(data);
//
//   INITIALIZE_GAME();
// };

/* ----   UPDATE_VIEW ACTION CREATOR    ---- */
// TODO make UPDATE_VIEW into a socket emitter
export const updateView =
  ({ height, width }) =>
  (dispatch) => {
    dispatch({
      type: UPDATE_VIEW,
      payload: {
        height: Math.round(height),
        width: Math.round(width),
      },
    });
  };
/* ----   UPDATE_DISPLAY_GRID ACTION CREATOR    ---- */
// TODO make UPDATE_DISPLAY into a socket emitter
// export const updateGridDisplay = (view) => async (dispatch, getState) => {
//   const resizeRatio = getState().gameState.displayGrid.resizeRatio;
//   const updatedGrid = handleGridUpdate(view, resizeRatio);
//
//   dispatch({
//     type: UPDATE_DISPLAY_GRID,
//     payload: { ...updatedGrid },
//   });
// };
/* ----   END_GAME ACTION CREATOR    ---- */
// TODO make END_GAME into socket emitter
export const endGame = () => (dispatch) => {
  dispatch({ type: END_GAME });
};

/* ----   RESIZE_PLAYER_CIRCLES ACTION CREATOR    ---- */
// TODO implement RESIZE_PLAYER_CIRCLES as socket emitter
export const resizePlayerCircles =
  ({ xAxisCenter, yAxisCenter }) =>
  (dispatch) => {
    //TODO:
    // find new way to resize circles
    // return the new circles and correctly resize the display
    // have alteration be constant after a resize until the next resize

    dispatch({
      type: RESIZE_PLAYER_CIRCLES,
      payload: { xAxisCenter, yAxisCenter },
    });
  };
/* ----    UPDATE_PLAYER_CIRCLE ACTION CREATOR    ---- */
/*export const updatePlayerCircle = (player, currentPlayer, currentForm) => async (dispatch, getState) => {
  const { centerPoint } = getState().gameState;



  return;
  // dispatch({
  //   type: UPDATE_PLAYER_CIRCLE,
  //   payload: { currentPlayer, updatedPlayerCircle, updateCircles: true },
  // });
};*/

/* ----   NEXT_PLAYER ACTION CREATOR    ---- */
// export const nextPlayer = (currentPlayer) => (dispatch) => {
//   const newPlayer = currentPlayer + 1;
//   dispatch({
//     type: NEXT_PLAYER,
//     payload: { currentPlayer: newPlayer },
//   });
// };
/* ----    PREV_PLAYER ACTION CREATOR    ---- */
// export const prevPlayer = (currentPlayer) => (dispatch) => {
//   const newPlayer = currentPlayer - 1;
//   dispatch({
//     type: PREV_PLAYER,
//     payload: { currentPlayer: newPlayer },
//   });
// };
/* ----   NEXT_FORM ACTION CREATOR    ---- */
// export const nextForm = (currentForm) => async (dispatch, getState) => {
//   const { players, currentPlayer } = getState().gameState;
//   const newForm = currentForm + 1;
//   const nextPlayer = players.length === 0 ? currentPlayer : 0;
//   await dispatch({
//     type: NEXT_FORM,
//     payload: { currentPlayer: nextPlayer, currentForm: newForm },
//   });
// };
/* ----   PREV_FORM ACTION CREATOR    ---- */
// export const prevForm = (currentForm) => async (dispatch, getState) => {
//   const { numPlayers } = getState().gameState;
//   const newForm = currentForm - 1;
//   await dispatch({
//     type: PREV_FORM,
//     payload: { currentForm: newForm, currentPlayer: numPlayers },
//   });
// };
