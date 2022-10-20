import { log } from "./logs.js";
import { Circle } from "../models/circle.js";
import { circleAlterations } from "./circleModifiers.js";

export const findAndUpdateCircle = async (
  { _id: gameId, playerId, updateStep, centerPoint, radiusMultiplier },
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
    const { circleData } =
      updateStep === 2
        ? circleAlterations[updateStep](responses, centerPoint)
        : circleAlterations[updateStep](
            responses,
            userCircle.toObject(),
            centerPoint
          );

    // Update the circle document
    for (let value in circleData) {
      if (circleData[value] === userCircle[value]) {
        continue;
      }
      userCircle[value] = circleData[value];
    }
    // Save the user's updated circle data
    const newCircle = await userCircle.save();

    // Return the user's updated circle data
    return newCircle;
  } catch (err) {
    console.log(err);
    throw {
      name: "Circle Update Error",
      cause: err.kind || "Alteration error",
    };
  }
};
