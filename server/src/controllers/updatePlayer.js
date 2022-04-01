import { log } from "../utils/logs.js";
import { circleAlterations } from "../utils/circleModifiers.js";
import { User } from "../models/user.js";
import { Game } from "../models/game.js";
import { Circle } from "../models/circle.js";

const findAndUpdateCircle = async (
  gameId,
  { _id, updateStep, centerPoint, responses }
) => {
  log.yellow("[APP]: Beginning circle alterations...");
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
    console.log(alterations);
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
    return true;
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

    await user.save();

    const updateStatus = await findAndUpdateCircle(gameId, updateData);

    log.green("[APP]: Circle alterations complete");
    socket.emit("updated-player", { success: updateStatus }, (ack) =>
      console.log(ack)
    );
  } catch (e) {
    log.red(e);
    socket.emit("updated-player", { success: false });
    // res.send({ error: { ...e } });
  }
};
