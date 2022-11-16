import { Game } from "../models/game.js";
import { log } from "../utils/appUtils/logs.js";
import { createBackground } from "../utils/circleUtils/createBackground.js";

export const fetchCircleData = async (res, { gameId, ratio, centerPoint }) => {
  try {
    const displayParams = [
      { size: ratio, opacity: 55 },
      { size: 0.15, opacity: 50 },
    ];
    // Update the current game to be complete
    await Game.updateOne({ _id: gameId }, { complete: true }).exec();

    // Create background display
    const backgroundCircles = await createBackground(
      1,
      11,
      centerPoint,
      displayParams,
      ratio
    );

    // Send circle data to client
    res.send(backgroundCircles);
    log.controllerSuccess("Fetching final circle data for", gameId, "complete");
  } catch (err) {
    console.log(err);
    log.controllerFailure("Fetching circle data for", gameId, "failed");
  }
};
