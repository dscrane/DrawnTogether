/* ----   NEW_PLAYER ACTION CREATOR    ---- */
import {NEW_PLAYER, NEXT_PLAYER, PREV_PLAYER} from "../types";

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
export const nextPlayer = (response, id) =>  dispatch => {
  const nextPlayer = id + 1
  dispatch({
             type: NEXT_PLAYER,
             payload: nextPlayer
           })
}
/* ----   ****    ---- */

/* ----    PREV_PLAYER ACTION CREATOR    ---- */
export const prevPlayer = id => dispatch => {
  const prevPlayer = id - 1
  dispatch({
             type: PREV_PLAYER,
             payload: prevPlayer
           })
}
/* ----   ****    ---- */

/* ----    SUBMIT_FORM ACTION CREATOR    ---- */
export const submitForm = (responses, id, currentForm) => async dispatch => {
  console.log(responses)
  // if (currentForm === 2) {
  //   console.log(formValues);
  //   return dispatch({
  //     type: NEW_PLAYER,
  //     payload: {
  //       id,
  //       name: formValues.name,
  //       association: formValues.association
  //     }
  //   })
  // }
  //
  // const newCircle = await updateCircle(formValues);
  // console.log(formValues)
  // dispatch({
  //   type: UPDATE_PLAYER,
  //   payload: {
  //     id,
  //     responses: {...formValues},
  //     circle: {...newCircle}
  //   }
  // })
}
/* ----   ****    ---- */
