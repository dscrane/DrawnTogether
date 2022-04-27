import { Game } from "../models/game.js";
import { createPlayerObjects } from "../utils/createPlayerObjects.js";
import { log } from "../utils/logs.js";

export const initializePlayers = async (res, { gameId, interest, players }) => {
  try {
    log.controller("Initializing players for", gameId, "begun");
    const game = await Game.findById(gameId);
    const { playersObj, playerIds, circles, initialCircles } =
      await createPlayerObjects(players, game._id);

    game.curiosity = interest;
    game.numPlayers = playerIds.length;
    game.playerIds = playerIds;
    // game.circles = circles;
    // game.initialCircles = initialCircles;

    res.send({ numPlayers: playerIds.length, playerIds, playersObj, interest });
    await game.save();
  } catch (err) {
    log.controllerFailure("Initializing players for", gameId, "failed");
    // socket.emit("error", err);
  }
};
