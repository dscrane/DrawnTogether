import { Game } from "../models/game.js";
import { createPlayerObjects } from "../utils/createPlayerObjects.js";
import { log } from "../utils/logs.js";

export const initializePlayers = async (res, { gameId, interest, players }) => {
  try {
    // Find game by _id
    const game = await Game.findById(gameId);
    // Create player documents and return player data and array of player ids
    const { playersObj, playerIds } = await createPlayerObjects(
      players,
      game._id
    );

    // Update game document with new player data
    game.curiosity = interest;
    game.numPlayers = playerIds.length;
    game.playerIds = playerIds;

    // Send new player data to client
    res.send({ numPlayers: playerIds.length, playerIds, playersObj, interest });

    // Save updated game document
    await game.save();
  } catch (err) {
    log.controllerFailure("Initializing players for", gameId, "failed");
  }
};
