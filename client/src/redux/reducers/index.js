import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import gameReducer from "./gameReducer";
import displayReducer from "./displayReducer"

export default combineReducers({
  display: displayReducer,
  game: gameReducer,
  form: formReducer
})