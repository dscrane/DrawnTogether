import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import gameReducer from "./gameReducer";

export default combineReducers({ gameState: gameReducer, form: formReducer });
