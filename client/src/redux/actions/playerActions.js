/* ----   NEW_PLAYER ACTION CREATOR    ---- */
import { NEW_PLAYER, UPDATE_PLAYER_CIRCLE, UPDATE_PLAYER } from "../types";
import * as circleUtils from "../../utils/circleUtilities";

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
  const { players, display } = getState();
  let updatedCircle = { playerCircle: null, circleSVG: null };
  switch (currentForm) {
    case 3:
      updatedCircle = {
        ...circleUtils.initializeCircle(players[currentPlayer], display.grid, currentPlayer, currentForm),
      };
      break;
    case 4:
      updatedCircle = { ...circleUtils.circleAlterationOne(players[currentPlayer], currentPlayer, currentForm) };
      break;
    case 5:
      updatedCircle = { ...circleUtils.circleAlterationTwo(players[currentPlayer], currentPlayer, currentForm) };
      break;
    case 6:
      updatedCircle = { ...circleUtils.circleAlterationThree(players[currentPlayer], currentPlayer, currentForm) };
      break;
    case 7:
      updatedCircle = { ...circleUtils.circleAlterationFour(players[currentPlayer], currentPlayer, currentForm) };
      break;
    case 8:
      updatedCircle = { ...circleUtils.circleAlterationFive(players[currentPlayer], currentPlayer, currentForm) };
      break;
    default:
      console.info("%c[ERROR]: Switch - updatePlayerDisplay", "color: red");
  }

  dispatch({
    type: UPDATE_PLAYER_CIRCLE,
    payload: {
      currentPlayer,
      ...updatedCircle,
    },
  });
};
