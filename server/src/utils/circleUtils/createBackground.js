import { Game } from "../../models/game.js";
import { Circle } from "../../models/circle.js";
import { resizePlayerCircles } from "../../controllers/resizePlayerCircles.js";
import { BaseError, CircleError } from "../../lib/BaseError.js";
import { backgroundLocations } from "./backgroundLocations.js";

export const createBackground = async (
  skip,
  limit,
  display,
  isBackground = false
) => {
  const games = await Game.find({ complete: true })
    .sort({ timestamp: -1 })
    .skip(skip)
    .limit(limit)
    .exec();

  const backgroundCircles = [];
  const currentCircles = [];

  for (let [i, game] of games.entries()) {
    const circles = await Circle.find({ _id: { $in: game.circles } });
    const initialCircles = await Circle.find({
      _id: { $in: game.initialCircles },
    });

    let params;
    let delta = i;
    if (i === 0 && !skip) {
      params = backgroundLocations.currentArray;
    } else if (i < 5 && !skip) {
      params = backgroundLocations.largeArrays;
      delta = i - 1;
    } else if (i >= 5 && !skip) {
      params = backgroundLocations.mediumArrays;
      delta = i - 5;
    } else if (skip) {
      params = backgroundLocations.smallArrays;
    }

    const resizedCircles = resizePlayerCircles(
      null,
      {
        circles: [...circles, ...initialCircles],
        ratio: params.size,
        centerPoint: {
          x: Math.floor(params.centerPoint[delta].x * display.xMultiplier),
          y: Math.floor(params.centerPoint[delta].y * display.yMultiplier),
        },
      },
      params.opacity,
      params.lines,
      isBackground === false ? i !== 0 : isBackground
    );

    i === 0 && !skip
      ? currentCircles.push(...resizedCircles)
      : backgroundCircles.push(...resizedCircles);
  }

  return { currentCircles, backgroundCircles };
};
