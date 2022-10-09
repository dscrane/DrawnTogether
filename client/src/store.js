import { configureStore } from "@reduxjs/toolkit";
import reducers from "./redux/reducers";
import sessionReducer from "./redux/reducers/sessionSlice";
import displayReducer from "./redux/reducers/displaySlice";
import { createLogger } from "redux-logger/src";
import { ADD_PLAYER_CIRCLE, NEXT_PLAYER, UPDATE_PLAYER_RESPONSES } from "./redux/types";

const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    display: displayReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
