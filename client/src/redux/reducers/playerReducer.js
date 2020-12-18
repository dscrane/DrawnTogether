import {NEW_PLAYER, NEXT_PLAYER, PREV_PLAYER, UPDATE_PLAYER} from "../types";

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case NEW_PLAYER:
      console.log('[NEW_PLAYER]: ', action.payload)
      return {
        ...state,
        numPlayers: state.numPlayers + 1,
        players: [
          ...state.players,
          {
            id: action.payload.id,
            name: action.payload.name,
            responses: {
              association: parseInt(action.payload.association)
            },
            circle: {}
          }
        ]
      }
    case UPDATE_PLAYER:
      console.log('[UPDATE_PLAYER]: ', action.payload)
      return {
        ...state,
        players: [
          ...state.players,
          {
            id: action.payload.id,
            responses: {
              ...state.players[action.payload.id].responses,
              ...action.payload.responses
            },
            circle: {
              ...state.players[action.payload.id].circle,
              ...action.payload.circle
            }
          }
        ]
      }
    case NEXT_PLAYER:
      console.log('[NEXT_PLAYER]: ', action.payload)
      return {
        ...state,
        currentPlayer: action.payload
      }
    case PREV_PLAYER:
      console.log('[PREV_PLAYER]: ', action.payload)
      return {
        ...state,
        currentPlayer: action.payload
      }
  }
}
