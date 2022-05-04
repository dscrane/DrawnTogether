import { configureStore } from "@reduxjs/toolkit";
import reducers from "./redux/reducers";
import { createLogger } from "redux-logger/src";
import { ADD_PLAYER_CIRCLE, NEXT_PLAYER, UPDATE_PLAYER_RESPONSES } from "./redux/types";

const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [UPDATE_PLAYER_RESPONSES, ADD_PLAYER_CIRCLE, NEXT_PLAYER],
        ignoredPaths: ["session.circles", "session.finalCircles"],
      },
    }).concat(logger),
});
