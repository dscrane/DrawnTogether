import { combineReducers } from "redux";
import gameReducer from "./gameReducer";

export default combineReducers({ session: gameReducer });
