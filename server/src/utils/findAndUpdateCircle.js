import { log } from "./logs.js";
import { Circle } from "../models/circle.js";
import { circleAlterations } from "./circleModifiers.js";

export const findAndUpdateCircle = async (
  gameId,
  { _id, updateStep, centerPoint },
  responses
) => {
  updateStep > 2
    ? log.controller(`Alteration ${updateStep} for`, _id, "begun")
    : log.controller(`Initial data for`, _id, "begun");
  try {
    // Find user's circle ensuring it is not an initial circle
    const userCircle = await Circle.findOne({
      playerId: _id,
      gameId: gameId,
      initial: false,
    }).exec();

    // Run the alterations for the current step
    const alterations =
      updateStep > 2
        ? circleAlterations[updateStep](
            responses,
            userCircle.toObject(),
            centerPoint
          )
        : circleAlterations[updateStep](responses, centerPoint);

    // Save the updated circle
    await userCircle.updateOne({ ...alterations.circleData });

    // Save the user's updated circle data
    await userCircle.save();

    // Return the user's updated circle data
    if (!alterations.initialCircleData) {
      return alterations.circleData;
    }

    // Only if there is initial circle data
    if (alterations.initialCircleData) {
      // Find the user's initial circle
      const userInitialCircle = await Circle.findOne({
        playerId: _id,
        gameId: gameId,
        initial: true,
      });
      // Update the initial circle data
      await userInitialCircle.updateOne({
        ...alterations.initialCircleData,
      });
      // Save the user's updated initial circle
      await userInitialCircle.save();
    }
  } catch (err) {
    throw {
      name: "Circle Update Error",
      cause: err.kind || "Alteration error",
    };
  }
};
