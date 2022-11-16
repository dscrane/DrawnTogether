import { Game } from "../models/game.js";
import { createPlayerObjects } from "../utils/circleUtils/createPlayerObjects.js";
import { interestCategoryChecker } from "../lib/interestCategoryChecker.js";
import { log } from "../utils/appUtils/logs.js";

export const initializePlayers = async (res, { _id, interest, players }) => {
  try {
    // Find game by _id
    const game = await Game.findById(_id);
    // Create player documents and return player data and array of player ids
    const { playersObj, playerIds } = await createPlayerObjects(players, _id);

    // Update game document with new player data
    game.curiosity = interest;
    game.numPlayers = playerIds.length;
    game.playerIds = playerIds;

    // const interestCategory = await interestCategoryChecker();

    // Send new player data to client
    res.send({
      numPlayers: playerIds.length,
      playerIds,
      playersObj,
      interest,
      // interestCategory,
    });

    // Save updated game document
    await game.save();
  } catch (err) {
    console.log(err);
    log.controllerFailure("Initializing players for", _id, "failed");
  }
};
