import { Circle } from "../../models/circle.js";

export const createCircleDocument = async (playerId, gameId, initial) => {
  const circle = await new Circle({
    playerId,
    gameId,
    initial,
  });
  await circle.save();
  return circle;
};
