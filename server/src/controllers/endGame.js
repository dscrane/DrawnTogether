import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";

export const endGame = async (res, { _id }) => {
  try {
    // Find the current game
    let game = await Game.findById(_id);

    // Update the game to be complete

    game.inProgress = false;

    res.send({ inProgress: true });

    // Save the newly ended game
    await game.save();
  } catch (err) {
    log.controllerFailure("Ending game for", _id, "failed");
  }
};
