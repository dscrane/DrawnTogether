import { Circle } from "../models/circle.js";
import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";

export const fetchCircleData = async (res, { gameId }) => {
  try {
    // Find the current game
    const game = await Game.findById(gameId);

    // Get the circle id's in the current game
    const gameCircles = game.circles.map((circle) => circle._id);

    // Turn animations off for final display
    await Circle.updateMany(
      { _id: { $in: gameCircles } },
      { isAnimated: false }
    );

    // Fetch newly updated circles
    const circles = await Circle.find({ _id: { $in: gameCircles } });

    // Recreate initial circles for final display
    const initialGameCircles = game.initialCircles.map(
      (initialCircle) => initialCircle._id
    );
    const initialCircles = await Circle.find({
      _id: { $in: initialGameCircles },
    });

    // Send circle data to client
    res.send([...initialCircles, ...circles]);
    log.controller("Fetching final circle data for", gameId, "complete");
    return;
  } catch (err) {
    log.controllerFailure("Fetching circle data for", gameId, "failed");
  }
};
