import { findAndUpdateCircle } from "../utils/findAndUpdateCircle.js";
import { log } from "../utils/logs.js";

export const updatePlayer = async (res, updateData, user) => {
  try {
    // Find and update the user's circle and return if it is not an initial circle
    const updatedCircle = await findAndUpdateCircle(updateData, user.responses);
    // Handle sending the updated circle to the client to display
    res.send({
      circle: { ...updatedCircle.toJson() },
      responses: user.currentFormData(updateData.updateStep),
    });
    log.updateSuccess(`Alteration for`, updateData.playerId, "complete");
    // if (updateData.currentPlayer === updateData.numPlayers - 1) {
    //   log.controllerSuccess(
    //     `Alteration #${updateData.updateStep} for`,
    //     updateData.gameId,
    //     "success"
    //   );
    // }
    return;
  } catch (err) {
    log.controllerFailure(
      `Alteration ${updateData.updateStep} for`,
      updateData._id,
      "failed"
    );
    console.log(err);
  }
};
