/* ----   NEW_PLAYER ACTION CREATOR    ---- */
import {
  NEW_PLAYER,
  NEXT_PLAYER,
  PREV_PLAYER,
  UPDATE_PLAYER_CIRCLE,
  UPDATE_PLAYER,
} from "../types";

export const newPlayer = (responses, id) => (dispatch) => {
  dispatch({
    type: NEW_PLAYER,
    payload: {
      id,
      ...responses,
    },
  });
};
/* ----   ****    ---- */

/* ----   NEXT_PLAYER ACTION CREATOR    ---- */
export const nextPlayer = (currentPlayer) => (dispatch) => {
  const nextPlayer = currentPlayer + 1;
  dispatch({
    type: NEXT_PLAYER,
    payload: nextPlayer,
  });
};
/* ----   ****    ---- */

/* ----    PREV_PLAYER ACTION CREATOR    ---- */
export const prevPlayer = (currentPlayer) => (dispatch) => {
  const prevPlayer = currentPlayer - 1;
  dispatch({
    type: PREV_PLAYER,
    payload: prevPlayer,
  });
};
/* ----   ****    ---- */

/* ----    SUBMIT_FORM ACTION CREATOR    ---- */
export const submitForm = (currentPlayer, currentForm, responses) => async (
  dispatch
) => {
  if (currentForm === 1) {
    return;
  }

  if (currentForm === 2) {
    console.log(responses);
    await dispatch({
      type: NEW_PLAYER,
      payload: {
        currentPlayer,
        responses: {
          id: currentPlayer,
          ...responses,
        },
      },
    });
    return;
  }
  await dispatch({
    type: UPDATE_PLAYER,
    payload: {
      currentPlayer,
      responses: {
        ...responses,
      },
    },
  });
};
/* ----   ****    ---- */

export const updatePlayerCircle = (circle, currentPlayer) => (dispatch) => {
  dispatch({
    type: UPDATE_PLAYER_CIRCLE,
    payload: {
      currentPlayer,
      circle: { ...circle },
    },
  });
};
