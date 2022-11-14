import { Game } from "../models/game.js";
import { log } from "../utils/appUtils/logs.js";

export const updateScreenshot = async (res, { _id, screenshotData }) => {
  try {
    // Find game by _id
    const game = await Game.findById(_id);
    // Update game document screenshot string
    game.screenshot = screenshotData.split(";base64,").pop();
    // Save updated game document
    await game.save();

    // Return status to client
    res.send({ screenshot: true });
    log.controllerSuccess("Updating screenshot for", _id, "success");
  } catch (err) {
    log.red(err);
  }
};
