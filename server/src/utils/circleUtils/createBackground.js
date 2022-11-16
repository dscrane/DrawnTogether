import { Game } from "../../models/game.js";
import { Circle } from "../../models/circle.js";
import { resizePlayerCircles } from "../../controllers/resizePlayerCircles.js";
import { BaseError, CircleError } from "../../lib/BaseError.js";

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

  const backgroundCircles = [];

  for (const [i, game] of games.entries()) {
    const circles = await Circle.find({ _id: { $in: game.circles } });
    const initialCircles = await Circle.find({
      _id: { $in: game.initialCircles },
    });

    let params;
    if (ratio) {
      params = i < 5 ? displayParams[0] : displayParams[1];
    } else {
      params = displayParams;
    }

    const resizedCircles = resizePlayerCircles(
      null,
      {
        circles: [...circles, ...initialCircles],
        ratio: params.size,
        centerPoint: centerPoint[i],
      },
      params.opacity,
      ratio
    );
    backgroundCircles.push(...resizedCircles);
  }

  return { backgroundCircles };
};
