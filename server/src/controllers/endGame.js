import { Game } from "../models/game.js";
import { log } from "../utils/appUtils/logs.js";
import { deleteGameDocuments } from "../utils/appUtils/deleteGameDocuments.js";

export const endGame = async (res, { _id }) => {
  try {
    // Find the current game
    let game = await Game.findById(_id);

    if (game.__v < 6) {
      // Delete associated documents for unfinished game
      await deleteGameDocuments(game._id);
    } else {
      // Update the game to be complete
      game.inProgress = false;
      // Save the newly ended game
      await game.save();
    }

    res.send({ inProgress: true });
  } catch (err) {
    console.log(Object.keys(err));
    log.controllerFailure("Ending game for", _id, "failed");
  }
};
