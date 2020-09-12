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
    payload: { interest }
  })
}
/* ----   ****    ---- */

/* ----   END_GAME ACTION CREATOR    ---- */
export const endGame = () => dispatch => {
  dispatch({type: END_GAME})
}
/* ----   ****    ---- */

/* ----   NEW_PLAYER ACTION CREATOR    ---- */
export const newPlayer = (formValues, id) => dispatch => {
  dispatch({
    type: NEW_PLAYER,
    payload: {
       id,
      data: {...formValues}
    }
  })
}
/* ----   ****    ---- */

/* ----   NEXT_PLAYER ACTION CREATOR    ---- */
export const nextPlayer = (formValues, id) =>  dispatch => {
  dispatch({
    type:NEXT_PLAYER,
    payload: {currentPlayer: id++}
  })
}
/* ----   ****    ---- */

/* ----    PREV_PLAYER ACTION CREATOR    ---- */
export const prevPlayer = id => dispatch => {
  dispatch({
    type: PREV_PLAYER,
    payload: {currentPlayer: id--}
  })
}
/* ----   ****    ---- */

/* ----    SUBMIT_FORM ACTION CREATOR    ---- */
export const submitForm = (formValues, id) => async dispatch => {
  const newCircle = await updateCircle(formValues);

  dispatch({
    type: UPDATE_PLAYER,
    payload: {
      id,
      responses: {...formValues},
      circle: {...newCircle}
    }
  })
}
/* ----   ****    ---- */

/* ----   NEXT_FORM ACTION CREATOR    ---- */
export const nextForm = (currentForm) => async dispatch => {

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

  await dispatch({
    type: NEXT_FORM,
    payload: {currentForm: currentForm++, updateCircles: false}
  })
}
/* ----   ****    ---- */

/* ----   PREV_FORM ACTION CREATOR    ---- */
export const prevForm = currentForm => dispatch => {
  dispatch({
    type: PREV_FORM,
    payload: {currentForm: currentForm--}
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
