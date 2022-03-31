import { configureStore } from '@reduxjs/toolkit';
import { reducer } from "./redux/reducers/gameReducer";
import { socketMiddleware } from "./redux/middleware/socketMiddleware";

export const store = configureStore({
  reducer: {
    gameState: reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(socketMiddleware),
  devTools: { actionSanitizer: action => ({
      ...action,
      type: action.type
    }) },

})
