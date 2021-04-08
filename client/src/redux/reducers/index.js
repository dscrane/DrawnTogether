import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import state from "../../redux_v2/reducers/gameReducer";
import playerReducer from "./playerReducer";
import displayReducer from "./displayReducer";

export default combineReducers({ state });
