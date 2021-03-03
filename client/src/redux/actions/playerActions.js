/* ----   NEW_PLAYER ACTION CREATOR    ---- */
import { NEW_PLAYER, UPDATE_PLAYER_CIRCLE, UPDATE_PLAYER } from "../types";
import * as circleUtils from "../../utilities/circleUtilities";

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
export const submitForm = (currentPlayer, currentForm, responses) => async (dispatch) => {
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

export const updatePlayerCircle = (currentPlayer, currentForm) => (dispatch, getState) => {
  console.log("currentPlayer", currentPlayer);
  const { players, display, game } = getState();
  let circle;
  switch (currentForm) {
    case 3:
      circle = circleUtils.initialCircleVariables(players[currentPlayer], display.grid, currentPlayer, currentForm);
      break;
    case 4:
      circle = circleUtils.circleAlterationOne(players[currentPlayer], game.currentPlayer, currentForm);
      break;
    case 5:
      circle = circleUtils.circleAlterationTwo(players[currentPlayer], game.currentPlayer, currentForm);
      break;
    case 6:
      circle = circleUtils.circleAlterationThree(players[currentPlayer], game.currentPlayer, currentForm);
      break;
    case 7:
      circle = circleUtils.circleAlterationFour(players[currentPlayer], game.currentPlayer, currentForm);
      console.log(circle);
      break;
    case 8:
      circle = circleUtils.circleAlterationFive(players[currentPlayer], game.currentPlayer, currentForm);
      break;
    default:
      console.info("%c[ERROR]: Switch - updatePlayerDisplay", "color: red");
  }

  dispatch({
    type: UPDATE_PLAYER_CIRCLE,
    payload: {
      currentPlayer,
      circle,
    },
  });
};
