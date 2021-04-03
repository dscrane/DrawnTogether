import {
  START_GAME,
  END_GAME,
  NEXT_FORM,
  PREV_FORM,
  UPDATE_CIRCLES,
  DISPLAY_CIRCLES,
  DISPLAY_GRID,
  SET_INTEREST,
  NEXT_PLAYER,
  PREV_PLAYER,
} from "../types";

/* ----   START_GAME ACTION CREATOR    ---- */
export const startGame = () => (dispatch) => {
  dispatch({
    type: START_GAME,
    payload: {
      inProgress: true,
      currentForm: 1,
      displayGrid: true,
    },
  });
};

/* ----   SET_INTEREST ACTION CREATOR    ---- */
export const setInterest = (interest) => (dispatch) => {
  dispatch({
    type: SET_INTEREST,
    payload: interest,
  });
};

/* ----   END_GAME ACTION CREATOR    ---- */
export const endGame = () => (dispatch) => {
  dispatch({ type: END_GAME, payload: "Game Ended" });
};

/* ----   NEXT_FORM ACTION CREATOR    ---- */
export const nextForm = (currentForm, currentPlayer) => async (dispatch) => {
  const newForm = currentForm + 1;
  if (currentForm === 2) {
    await dispatch({
      type: NEXT_FORM,
      payload: {
        currentPlayer: 0,
        currentForm: newForm,
        updateCircles: false,
        numPlayers: currentPlayer,
      },
    });
  }

  if (currentForm === 3) {
    await dispatch({
      type: DISPLAY_CIRCLES,
      payload: true,
    });
  }

  if (currentForm === 8) {
    await dispatch({
      type: DISPLAY_GRID,
      payload: { displayGrid: false, inProgress: false, finalDisplay: true },
    });
  }

  await dispatch({
    type: NEXT_FORM,
    payload: { currentPlayer: 0, currentForm: newForm, updateCircles: true },
  });

  if (currentForm > 2) {
    await dispatch({
      type: UPDATE_CIRCLES,
      payload: { displayCircles: true },
    });
  }
};

/* ----   PREV_FORM ACTION CREATOR    ---- */
export const prevForm = (currentForm) => (dispatch) => {
  const newForm = currentForm - 1;
  dispatch({
    type: PREV_FORM,
    payload: { currentForm: newForm },
  });
};

/* ----   NEXT_PLAYER ACTION CREATOR    ---- */
export const nextPlayer = (currentPlayer) => (dispatch) => {
  const nextPlayer = currentPlayer + 1;
  dispatch({
    type: NEXT_PLAYER,
    payload: nextPlayer,
  });
};

/* ----    PREV_PLAYER ACTION CREATOR    ---- */
export const prevPlayer = (currentPlayer) => (dispatch) => {
  const prevPlayer = currentPlayer - 1;
  dispatch({
    type: PREV_PLAYER,
    payload: prevPlayer,
  });
};
