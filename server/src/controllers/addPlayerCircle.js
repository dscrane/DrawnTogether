import { Circle } from "../models/circle.js";
import { circleAlterations } from "../utils/circleModifiers.js";
import { log } from "../utils/logs.js";
import { Game } from "../models/game.js";

export const addPlayerCircle = async (
  res,
  { gameId, playerId, responses, centerPoint, updateStep }
) => {
  log.controller(`Initial data for`, playerId, "begun");
  const game = await Game.findById(gameId);

  const circleData = circleAlterations[updateStep](responses, centerPoint);

  const newCircle = await new Circle({
    playerId,
    gameId,
    initial: false,
    timestamp: Date.now(),
    ...circleData.circleData,
  });
  const newCircleInitial = await new Circle({
    playerId,
    gameId,
    initial: true,
    timestamp: Date.now(),
    ...circleData.initialCircleData,
  });
  game.circles = [...game.circles, newCircle._id];
  game.initialCircles = [...game.initialCircles, newCircleInitial._id];

  res.send({ ...circleData.circleData, playerId });

  await newCircle.save();
  await newCircleInitial.save();
  await game.save();
};
