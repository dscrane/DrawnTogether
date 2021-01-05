/* ----   NEW_PLAYER ACTION CREATOR    ---- */
import {
  NEW_PLAYER,
  NEXT_PLAYER,
  PREV_PLAYER,
  UPDATE_PLAYER_CIRCLE,
  UPDATE_PLAYER,
} from "../types";
import * as circleUtils from "../../utils/circleUtils";

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
  if (currentForm >= 3) {
    await dispatch({
      type: UPDATE_PLAYER,
      payload: {
        currentPlayer,
        responses: {
          ...responses,
        },
      },
    });
  }
};
/* ----   ****    ---- */

export const updatePlayerCircle = (currentPlayer) => (dispatch, getState) => {
  const { players, display, game } = getState();
  const circle = circleUtils.circleVariables(
    players[currentPlayer],
    display.grid,
    game.currentPlayer
  );
  dispatch({
    type: UPDATE_PLAYER_CIRCLE,
    payload: {
      currentPlayer,
      circle,
    },
  });
};
