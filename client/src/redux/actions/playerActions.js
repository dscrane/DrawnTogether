/* ----   NEW_PLAYER ACTION CREATOR    ---- */
import {NEW_PLAYER, NEXT_PLAYER, PREV_PLAYER, UPDATE_CIRCLES, UPDATE_PLAYER} from "../types";

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
export const nextPlayer = (currentPlayer) =>  dispatch => {
  const nextPlayer = currentPlayer + 1
  dispatch({
             type: NEXT_PLAYER,
             payload: nextPlayer
           })
}
/* ----   ****    ---- */

/* ----    PREV_PLAYER ACTION CREATOR    ---- */
export const prevPlayer = currentPlayer => dispatch => {
  const prevPlayer = currentPlayer - 1
  dispatch({
             type: PREV_PLAYER,
             payload: prevPlayer
           })
}
/* ----   ****    ---- */

/* ----    SUBMIT_FORM ACTION CREATOR    ---- */
export const submitForm = (currentPlayer, currentForm, circle, responses ) => async dispatch => {
  console.log('responses', responses, circle)
  if (currentForm === 1) { return }

  if (currentForm === 2) {
    console.log('respsssss', responses)
   await dispatch({
      type: NEW_PLAYER,
      payload: {
        currentPlayer,
        circle,
        responses: {
          id: currentPlayer,
          ...responses
        },
      }
    })
    return;
  }
  await dispatch({
    type: UPDATE_PLAYER,
    payload: {
      currentPlayer,
      circle,
      responses: {
        ...responses
      },
    }
  })
}
/* ----   ****    ---- */


export const updateCircle = () => {

}
