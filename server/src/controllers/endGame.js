import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";

export const endGame = async (res, { gameId }) => {
  try {
    // Find the current game
    let game = await Game.findById(gameId);

    // Update the game to be complete
    game.complete = true;
    game.inProgress = false;

    res.send({ inProgress: true });

    // Save the newly ended game
    await game.save();
  } catch (err) {
    log.controllerFailure("Ending game for", gameId, "failed");
  }
};
