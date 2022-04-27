import { User } from "../models/user.js";
import { log } from "../utils/logs.js";

export const reinitializePlayers = async (res, { playerIds, values }) => {
  try {
    log.controller("Reinitializing players for", "", "begun");
    const resetPlayers = {};
    for (const [i, playerId] of playerIds.entries()) {
      const player = await User.findById(playerId);

      const playerFormValues = values.players[i];

      if (
        player.name === playerFormValues.name &&
        player.responses.association === playerFormValues.association
      ) {
        resetPlayers[i] = player;
      } else {
        if (player.name !== playerFormValues.name) {
          player.name = playerFormValues.name;
        } else if (
          player.responses.association !== playerFormValues.association
        ) {
          player.responses.association = playerFormValues.association;
        }
        resetPlayers[i] = await player.save();
      }
    }
    log.controllerSuccess("Reinitializing players for", "", "complete");
    res.send({ ...resetPlayers });
  } catch (err) {
    log.controllerFailure("Reinitializing players for", "", "failed");
  }
};
