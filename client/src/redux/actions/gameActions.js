import { updateCircle } from "../../utils/circleUtils";
import {
  START_GAME,
  END_GAME,
  NEW_PLAYER,
  UPDATE_PLAYER,
  NEXT_PLAYER,
  PREV_PLAYER,
  NEXT_FORM,
  PREV_FORM,
  UPDATE_CIRCLES,
  DISPLAY_CIRCLES,
  SET_INTEREST
} from '../types';

/* ----   START_GAME ACTION CREATOR    ---- */
export const startGame = () => dispatch => {
  dispatch({
    type: START_GAME,
    payload: {
      inProgress: true,
      currentForm: 1
    }
  })
}
/* ----   ****    ---- */

/* ----   SET_INTEREST ACTION CREATOR    ---- */
export const setInterest = interest => dispatch => {
  dispatch({
    type: SET_INTEREST,
    payload: interest
  })
}
/* ----   ****    ---- */

/* ----   END_GAME ACTION CREATOR    ---- */
export const endGame = () => dispatch => {
  dispatch({type: END_GAME})
}
/* ----   ****    ---- */

/* ----   NEXT_FORM ACTION CREATOR    ---- */
export const nextForm = (currentForm) => async dispatch => {
  console.log('currentForm', currentForm, '[nextform]')
  if (currentForm === 3) {
    await dispatch({
      type: DISPLAY_CIRCLES,
      payload: true
    })
  }

  await dispatch({
    type: UPDATE_CIRCLES,
    payload: {updateCircles: true}
  })

  const newForm = currentForm + 1;
  await dispatch({
    type: NEXT_FORM,
    payload: {currentForm: newForm, updateCircles: false}
  })
}
/* ----   ****    ---- */

/* ----   PREV_FORM ACTION CREATOR    ---- */
export const prevForm = currentForm => dispatch => {
  const newForm = currentForm - 1;
  dispatch({
    type: PREV_FORM,
    payload: {currentForm: newForm}
  })
}
/* ----   ****    ---- */

/* ----   App component styles    ---- */
/* ----   ****    ---- */

/* ----   App component styles    ---- */
/* ----   ****    ---- */

/* ----   App component styles    ---- */
/* ----   ****    ---- */

/* ----   App component styles    ---- */
/* ----   ****    ---- */
