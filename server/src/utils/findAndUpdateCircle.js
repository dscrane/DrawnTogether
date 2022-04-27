import { log } from "./logs.js";
import { Circle } from "../models/circle.js";
import { circleAlterations } from "./circleModifiers.js";

export const findAndUpdateCircle = async (
  { gameId, playerId, updateStep, centerPoint },
  responses
) => {
  log.update(`Alteration for`, playerId, "begun");
  try {
    // Find user's circle ensuring it is not an initial circle
    const userCircle = await Circle.findOne({
      playerId,
      gameId,
      initial: false,
    }).exec();
    // Run the alterations for the current step
    const { circleData } = circleAlterations[updateStep](
      responses,
      userCircle.toObject(),
      centerPoint
    );

    // Save the updated circle
    await userCircle.updateOne({ ...circleData });

    // Save the user's updated circle data
    await userCircle.save();

    // Return the user's updated circle data
    return circleData;
  } catch (err) {
    throw {
      name: "Circle Update Error",
      cause: err.kind || "Alteration error",
    };
  }
};
