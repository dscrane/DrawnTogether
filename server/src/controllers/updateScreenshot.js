import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";

export const updateScreenshot = async (res, { gameId, screenshotData }) => {
  try {
    // Find game by _id
    const game = await Game.findById(gameId);
    // Update game document screenshot string
    game.screenshot = screenshotData.split(";base64,").pop();
    // Save updated game document
    await game.save();

    // Return status to client
    res.send({ screenshot: true });
    log.controllerSuccess("Updating screenshot for", gameId, "success");
  } catch (err) {
    log.red(err);
  }
};
