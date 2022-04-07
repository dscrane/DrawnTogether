import { Game } from "../models/game.js";

export const endGame = async (socket) => {
  let game = await Game.findById(socket.handshake.auth.gameId);
  game.complete = true;
  game.inProgress = false;

  await game.save();

  socket.emit("restart-game", { endGame: true });
};
