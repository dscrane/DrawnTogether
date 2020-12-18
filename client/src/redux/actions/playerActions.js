/* ----   NEW_PLAYER ACTION CREATOR    ---- */
import {NEW_PLAYER, NEXT_PLAYER, PREV_PLAYER, UPDATE_PLAYER} from "../types";

export const newPlayer = (responses, id) => dispatch => {
  dispatch({
             type: NEW_PLAYER,
             payload: {
               id,
               ...responses
             }
           })
}
/* ----   ****    ---- */

/* ----   NEXT_PLAYER ACTION CREATOR    ---- */
export const nextPlayer = (id) =>  dispatch => {
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
export const submitForm = (currentPlayer, currentForm, responses) => async dispatch => {
  console.log('responses', responses)
  if (currentForm === 1) { return }

  if (currentForm === 2) {
    console.log(currentPlayer)
   await dispatch({
      type: NEW_PLAYER,
      payload: {
        currentPlayer,
        responses: {
          id: currentPlayer,
          ...responses
        }
      }
    })
    return;
  }
  await dispatch({
    type: UPDATE_PLAYER,
    payload: {
      currentPlayer,
      responses: {
        ...responses
      }
    }
  })
}
/* ----   ****    ---- */
