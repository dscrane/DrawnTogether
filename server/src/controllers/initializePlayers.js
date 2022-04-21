import { Game } from "../models/game.js";
import { createPlayerObjects } from "../utils/createPlayerObjects.js";
import { log } from "../utils/logs.js";

export const initializePlayers = async (socket, gameId, interest, players) => {
  try {
    log.controller(
      "Initializing players for",
      socket.handshake.auth.gameId,
      "begun"
    );
    const game = await Game.findById(gameId);
    const { playersObj, playerIds, circles, initialCircles } =
      await createPlayerObjects(players, game._id);

    game.curiosity = interest;
    game.numPlayers = playerIds.length;
    game.playerIds = playerIds;
    game.circles = circles;
    game.initialCircles = initialCircles;

    socket.emit(
      "initialized-players",
      {
        numPlayers: playerIds.length,
        playerIds,
        playersObj,
        interest,
      },
      (status) => {
        status
          ? log.socket(
              socket.handshake.auth.gameId,
              "Initializing player successful"
            )
          : log.socketError(socket.id, "Initializing players failed");
      }
    );

    await game.save();
  } catch (err) {
    log.controllerFailure(
      "Initializing players for",
      socket.handshake.auth.gameId,
      "failed"
    );
    socket.emit("error", err);
  }
};
