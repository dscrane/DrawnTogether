import { Game } from "../models/game.js";
import { log } from "../utils/appUtils/logs.js";
import { createBackground } from "../utils/circleUtils/createBackground.js";
import { resizePlayerCircles } from "./resizePlayerCircles.js";

export const fetchCircleData = async (res, { gameId, display }) => {
  try {
    // Update the current game to be complete
    await Game.updateOne({ _id: gameId }, { complete: true }).exec();

    // Create background display
    const circles = await createBackground(0, 11, display);

    // Send circle data to client
    res.send(circles);
    log.controllerSuccess("Fetching final circle data for", gameId, "complete");
  } catch (err) {
    console.log(err);
    log.controllerFailure("Fetching circle data for", gameId, "failed");
  }
};
