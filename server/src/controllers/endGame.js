import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";

export const endGame = async (socket) => {
  try {
    log.controller("Ending game for", socket.handshake.auth.gameId, "begun");
    // Find the current game
    let game = await Game.findById(socket.handshake.auth.gameId);

    // Update the game to be complete
    game.complete = true;
    game.inProgress = false;

    // Save the newly ended game
    await game.save();

    socket.emit("restart-game", { endGame: true }, (status) => {
      status
        ? log.socket(socket.handshake.auth.gameId, "game restart successful")
        : log.socketError(socket.id, "game restart failed");
    });
  } catch (err) {
    log.controllerFailure(
      "Ending game for",
      socket.handshake.auth.gameId,
      "failed"
    );
    socket.emit("error", err);
  }
};
