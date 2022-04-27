import { User } from "../models/user.js";
import { findAndUpdateCircle } from "../utils/findAndUpdateCircle.js";
import { log } from "../utils/logs.js";

export const updatePlayer = async (res, updateData) => {
  try {
    // Find user by current id
    const user = await User.findById(updateData.playerId);
    // Update user responses with from updateData from form
    user.responses = {
      ...updateData.responses,
      association: updateData.responses.association.match(/(\d+)/)[0],
    };

    // Save the newly updated user and use document data for updating circle
    const updatedUser = await user.save();
    const responses = { ...updatedUser.responses };

    // Find and update the user's circle and return if it is not an initial circle
    const updatedCircle = await findAndUpdateCircle(updateData, responses);

    // Handle sending the updated circle to the client to display
    res.send({ ...updatedCircle });
    log.updateSuccess(`Alteration for`, updateData.playerId, "complete");
    if (updateData.currentPlayer === updateData.numPlayers - 1) {
      log.controllerSuccess(
        `Alteration #${updateData.updateStep} for`,
        updateData.gameId,
        "success"
      );
    }
    return;
  } catch (err) {
    log.controllerFailure(
      `Alteration ${updateData.updateStep} for`,
      updateData._id,
      "failed"
    );
  }
};
