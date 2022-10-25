import { Circle } from "../models/circle.js";
import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";
import { resizePlayerCircles } from "./resizePlayerCircles.js";

export const fetchCircleData = async (res, { gameId, ratio, centerPoint }) => {
  try {
    const games = await Game.find({ __v: { $gte: 6 } })
      .sort({ timestamp: -1 })
      .limit(18)
      .exec();

    const gameCircles = [];

    for (const [i, game] of games.entries()) {
      console.log(game._id);
      const circles = await Circle.find({ _id: { $in: game.circles } });
      const initialCircles = await Circle.find({
        _id: { $in: game.initialCircles },
      });
      const displayParams =
        i === 0
          ? { size: 0.75, opacity: "1" }
          : i < 5
          ? { size: ratio, opacity: "55" }
          : i < 12
          ? { size: 0.05, opacity: "50" }
          : { size: 0.01, opacity: "25" };
      gameCircles.push(
        ...resizePlayerCircles(
          null,
          {
            circles: [...circles, ...initialCircles],
            ratio: displayParams.size,
            centerPoint: centerPoint[i],
          },
          displayParams.opacity
        )
      );
    }

    // Send circle data to client
    res.send(gameCircles);
    log.controllerSuccess("Fetching final circle data for", gameId, "complete");
  } catch (err) {
    console.log(err);
    log.controllerFailure("Fetching circle data for", gameId, "failed");
  }
};
