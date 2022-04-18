import { Game } from "../models/game.js";
import {log} from "../utils/logs.js";

export const endGame = async (socket) => {
  let game = await Game.findById(socket.handshake.auth.gameId);
  game.complete = true;
  game.inProgress = false;

  await game.save();

  socket.emit("restart-game", { endGame: true }, (status) => {
    status ?
      log.socket(socket.handshake.auth.gameId, 'game restart successful') :
      log.socketError(socket.id, 'game restart failed')
  });
};
