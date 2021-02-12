import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import playerReducer from "./playerReducer";
import displayReducer from "./displayReducer";

export default combineReducers({
  game: gameReducer,
  players: playerReducer,
  display: displayReducer,
});
