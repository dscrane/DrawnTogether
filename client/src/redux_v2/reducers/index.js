import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import gameReducer from "../../redux_v2/reducers/gameReducer";

export default combineReducers({ gameState: gameReducer, form: formReducer });
