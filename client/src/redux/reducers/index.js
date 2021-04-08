import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import state from "../../redux_v2/reducers/gameReducer";

export default combineReducers({ state, form: formReducer });
