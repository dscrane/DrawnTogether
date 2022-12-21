import { findAndUpdateCircle } from "../utils/circleUtils/findAndUpdateCircle.js";
import { log } from "../utils/appUtils/logs.js";

export const updatePlayer = async (res, updateData, user) => {
  try {
    // Find and update the user's circle and return if it is not an initial circle
    const { newCircle, finalCircle } = await findAndUpdateCircle(
      updateData,
      user.responses
    );
    // Handle sending the updated circle to the client to display
    res.send({
      finalCircle,
      circle: { ...newCircle },
      responses: user.currentFormData(updateData.updateStep),
    });
    log.updateSuccess(`Alteration for`, updateData.playerId, "complete");
  } catch (err) {
    log.controllerFailure(
      `Alteration ${updateData.updateStep} for`,
      updateData._id,
      "failed"
    );
    console.log(err);
  }
};
