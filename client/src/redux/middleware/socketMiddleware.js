import { io } from "socket.io-client";
import { startGame, initializePlayers, updateDisplayGrid, updatePlayer, updatePolarGrid } from "../actions";
import {
  START_GAME,
  UPDATE_PLAYER,
  INITIALIZE_PLAYERS,
  START_GAME_EMITTER,
  INITIALIZE_PLAYERS_EMITTER,
} from "../types";

export const socketMiddleware = (store) => {
  let socket;
  return (next) => (action) => {
    console.log("[SM]: ", action.type, action.payload);
    // const { gameState } = store.getState();
    //
    // // if (!gameState.inProgress && !(action.type === START_GAME)) {
    // //   return next(action);
    // // }
    // if (!gameState.inProgress && !(action.type === START_GAME_EMITTER)) {
    //   return next(action);
    // } else if (!action.payload.socket) {
    //   return next(action);
    // }
    //
    // switch (action.type) {
    //   case START_GAME_EMITTER:
    //     console.log("[EMITTER]: establishing socket connection");
    //     socket = io("http://localhost:5500");
    //     break;
    //   case INITIALIZE_PLAYERS_EMITTER:
    //     console.log("[EMITTER]: initializing players");
    //     socket.emit("initialize-players", { gameId: gameState.gameId, ...action.payload.formData });
    //
    //     break;
    // }
    //
    // // switch (true) {
    // //   case action.type === START_GAME && isEmitter:
    // //     console.log("[EMITTER]: establishing socket connection");
    // //     socket = io("http://localhost:5500");
    // //     next(action);
    // //     break;
    // //   case action.type === INITIALIZE_PLAYERS && isEmitter:
    // //     console.log("[EMITTER]: initializing players");
    // //     socket.emit("initialize-players", { gameId: gameState.gameId, ...action.payload });
    // //     break;
    // // }
    //
    // socket.on("connect", () => {
    //   console.log("[ON]: connect");
    //   const gridData = {
    //     width: gameState.gridDisplay.width,
    //     xAxisCenter: gameState.gridDisplay.xAxisCenter,
    //     yAxisCenter: gameState.gridDisplay.yAxisCenter,
    //   };
    //   socket.emit("start-game", gridData);
    // });
    // socket.on("started-game", (data) => {
    //   console.log("[ON]: started-game");
    //   store.dispatch(startGame({ ...data }));
    // });
    // socket.on("polar-grid", (polarGridPath, cb) => {
    //   console.log("[ON]: polar-grid");
    //   cb();
    //   store.dispatch(updatePolarGrid(polarGridPath));
    // });
    // socket.on("initialized-players", async ({ playerIds, playersObj }) => {
    //   console.log("[ON]: initialized-players");
    //   await store.dispatch(initializePlayers(playerIds, playersObj));
    // });
    // socket.on("display-circles", (circles) => {
    //   const generateCirclePaths = (c) => {
    //     c.forEach();
    //   };
    // });
    next(action);
  };
};
