import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./redux/reducers/sessionSlice";
import displayReducer from "./redux/reducers/displaySlice";
import { createLogger } from "redux-logger/src";

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
