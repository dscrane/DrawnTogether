import { Circle } from "../models/circle.js";
import { Game } from "../models/game.js";
import { circleAlterations } from "../utils/circleModifiers.js";
import { log } from "../utils/logs.js";

export const addPlayerCircle = async (
  res,
  { gameId, playerId, centerPoint, updateStep },
  user
) => {
  try {
    // Find game by _id
    const game = await Game.findById(gameId);

    // Create circle data objects
    const circleData = circleAlterations[updateStep](
      user.responses,
      centerPoint
    );

    // Create new circle document
    const newCircle = await new Circle({
      playerId,
      gameId,
      initial: false,
      timestamp: Date.now(),
      ...circleData.circleData,
    });
    // Create new initial circle document (for use in final display)
    const newCircleInitial = await new Circle({
      playerId,
      gameId,
      initial: true,
      timestamp: Date.now(),
      ...circleData.initialCircleData,
    });

    // Add new circle ids to the game document
    game.circles = [...game.circles, newCircle._id];
    game.initialCircles = [...game.initialCircles, newCircleInitial._id];

    // Save new circle documents and updated game document
    await newCircle.save();
    await newCircleInitial.save();
    await game.save();

    // Send the circle data to client
    res.send({
      circle: { ...newCircle.toJson() },
      responses: user.currentFormData(updateStep),
    });
  } catch (err) {
    log.controllerFailure(`Circle creation for`, playerId, "failed");
    console.log(Object.keys(err));
  }
};
