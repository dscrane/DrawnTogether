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

/* ----   Game Actions    ---- */
// GENERATE_SESSION ACTION CREATOR
export const generateSession = () => async (dispatch) => {
  const { data } = await api.post("/games/generateSession", {});
  console.log(data);
  dispatch({
    type: GENERATE_SESSION,
    payload: { game: data.game },
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
  const { display } = getState().gameState;
  const circleSvgs = circles.map((circle) => createCircleDesign(circle, display.centerPoint));
  console.log(circleSvgs);
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
    payload: { finalCircles: finalCircles, displayGrid: false, inProgress: false, currentForm: finalForm },
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

// export const resizePlayerCircles =
//   ({ cx, cy }) =>
//   (dispatch) => {
//     //TODO:
//     // find new way to resize circles
//     // return the new circles and correctly resize the display
//     // have alteration be constant after a resize until the next resize
//
//     dispatch({
//       type: RESIZE_PLAYER_CIRCLES,
//       payload: { cx, cy },
//     });
//   };

// UPDATE_PLAYER_CIRCLE ACTION CREATOR
/*export const updatePlayerCircle = (player, currentPlayer, currentForm) => async (dispatch, getState) => {
  const { centerPoint } = getState().gameState;



  return;
  // dispatch({
  //   type: UPDATE_PLAYER_CIRCLE,
  //   payload: { currentPlayer, updatedPlayerCircle, updateCircles: true },
  // });
};*/
// UPDATE_PLAYER ACTION CREATOR
// export const updatePlayer =
//   (playerIndex, { playerId, circleData, initialCircleData }) =>
//   async (dispatch, getState) => {
//     const { centerPoint, players } = getState().gameState;
//     // const {
//     //   data: { data, error },
//     // } = await api.patch("/users/update", {
//     //   centerPoint,
//     //   _id: playerId,
//     //   responses: formData,
//     //   updateStep: currentForm,
//     // });
//
//     // if (error) {
//     //   await alert(error.message);
//     //   dispatch({
//     //     type: RESET_FORM,
//     //     payload: { currentPlayer: playerIndex },
//     //   });
//     //   return false;
//     // }
//
//     const circleSVG = createCircleDesign(circleData);
//     await dispatch({
//       type: UPDATE_PLAYER_CIRCLE,
//       payload: {
//         circleSVG,
//         circles: {
//           circleData: circleData,
//           initialCircleData: initialCircleData || players[playerIndex].initialCircleData,
//         },
//         playerIndex,
//       },
//     });
//     return true;
//   };
// // UPDATE_DISPLAY_GRID ACTION CREATOR
// export const updateGridDisplay = (view) => async (dispatch, getState) => {
//   const resizeRatio = getState().gameState.display.resizeRatio;
//   const updatedGrid = await handleGridUpdate(view, resizeRatio);
//
//   dispatch({
//     type: UPDATE_DISPLAY_GRID,
//     payload: { ...updatedGrid, resizeCircles: true },
//   });
// };
// RESIZE_PLAYER_CIRCLES ACTION CREATOR
