import { User } from "../models/user.js";
import { findAndUpdateCircle } from "../utils/findAndUpdateCircle.js";
import { log } from "../utils/logs.js";

export const updatePlayer = async (socket, updateData) => {
  try {
    log.controller(
      "Updating player for",
      socket.handshake.auth.gameId,
      "begun"
    );
    const gameId = socket.handshake.auth.gameId;
    // Find user by current id
    const user = await User.findById(updateData._id);
    // Update user responses with from updateData from form
    user.responses = {
      ...updateData.responses,
      association: updateData.responses.association.match(/(\d+)/)[0],
    };

    // Save the newly updated user and use document data for updating circle
    const updatedUser = await user.save();
    const responses = { ...updatedUser.responses };

    // Find and update the user's circle and return if it is not an initial circle
    const updatedCircle = await findAndUpdateCircle(
      gameId,
      updateData,
      responses
    );

    // Handle sending the updated circle to the client to display
    if (updatedCircle) {
      log.controllerSuccess(
        `Alteration ${updateData.updateStep} for`,
        updateData._id,
        "complete"
      );
      socket.emit("updated-circle", { circle: updatedCircle }, (status) => {
        status
          ? log.socket(socket.handshake.auth.gameId, "player update successful")
          : log.socketError(socket.id, "player update failed");
      });
      return;
    }

    log.controllerSuccess(`Initial data for`, updateData._id, "complete");
  } catch (err) {
    updateData.updateStep > 2
      ? log.controllerFailure(
          `Alteration ${updateData.updateStep} for`,
          updateData._id,
          "failed"
        )
      : log.controllerFailure(`Initial data for`, updateData._id, "failed");

    socket.emit("error", err);
  }
};
