import { Game } from "../../models/game.js";
import { Circle } from "../../models/circle.js";
import { resizePlayerCircles } from "../../controllers/resizePlayerCircles.js";

export const createBackground = async (
  skip,
  limit,
  centerPoint,
  displayParams,
  ratio = null
) => {
  const games = await Game.find({ complete: true })
    .sort({ timestamp: -1 })
    .skip(skip)
    .limit(limit)
    .exec();

  const gameCircles = [];

  for (const [i, game] of games.entries()) {
    const circles = await Circle.find({ _id: { $in: game.circles } });
    const initialCircles = await Circle.find({
      _id: { $in: game.initialCircles },
    });
    let params;
    if (ratio) {
      params =
        i === 0
          ? displayParams[0]
          : i < 5
          ? displayParams[1]
          : displayParams[2];
    } else {
      params = displayParams;
    }

    gameCircles.push(
      ...resizePlayerCircles(
        null,
        {
          circles: [...circles, ...initialCircles],
          ratio: params.size,
          centerPoint: centerPoint[i],
        },
        params.opacity,
        i === 0 && ratio
      )
    );
  }

  return gameCircles;
};
