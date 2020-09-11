import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import circleReducer from "./circleReducer";
import playerReducer from "./playerReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  players: playerReducer,
  circles: circleReducer,
  game: gameReducer,
  form: formReducer
})