import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import gameReducer from "./gameReducer";
import playerReducer from "./playerReducer";
import displayReducer from "./displayReducer";


export default combineReducers({
  game: gameReducer,
  players: playerReducer,
  display: displayReducer,
  form: formReducer
})
