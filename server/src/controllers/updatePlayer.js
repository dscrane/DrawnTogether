import { log } from "../utils/logs.js";
import { circleAlterations } from "../utils/circleModifiers.js";
import { User } from "../models/user.js";
import { Circle } from "../models/circle.js";

const findAndUpdateCircle = async (
  gameId,
  { _id, updateStep, centerPoint },
  responses
) => {
  log.controller(`Alteration ${updateStep} for`, _id, 'begun');
  try {
    const userCircle = await Circle.findOne({
      playerId: _id,
      gameId: gameId,
      initial: false,
    }).exec();

    const alterations =
      updateStep > 2
        ? circleAlterations[updateStep](
            responses,
            userCircle.toObject(),
            centerPoint
          )
        : circleAlterations[updateStep](responses, centerPoint);
    await userCircle.updateOne({ ...alterations.circleData });

    if (alterations.initialCircleData) {
      const userInitialCircle = await Circle.findOne({
        playerId: _id,
        gameId: gameId,
        initial: true,
      });
      await userInitialCircle.updateOne({
        ...alterations.initialCircleData,
      });

      await userInitialCircle.save();
    }

    await userCircle.save();
    if (!alterations.initialCircleData) {
      return alterations.circleData
    }
    return null;
  } catch (e) {
    log.red("[APP]: Circle alterations have failed");
    console.log(e);
    new Error(e);
  }
};

export const updatePlayer = async (socket, updateData) => {
  try {
    const gameId = socket.handshake.auth.gameId;
    const user = await User.findById(updateData._id);
    user.responses = updateData.responses;

    const updatedUser = await user.save();
    const responses = { ...updatedUser.responses }

    const updatedCircle = await findAndUpdateCircle(gameId, updateData, responses);

    log.controllerSuccess(`Alteration ${updateData.updateStep} for`, updateData._id,  'complete');
    if (updatedCircle) {
      socket.emit("updated-circle", { circle: updatedCircle }, (status) => {
        status ?
          log.socket(socket.handshake.auth.gameId,  'player update successful') :
          log.socketError(socket.id, 'player update failed')
      })
    }

  } catch (e) {
    log.red(e);
    socket.emit("updated-player", { success: false });
    // res.send({ error: { ...e } });
  }
};
