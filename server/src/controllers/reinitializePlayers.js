import { User } from "../models/user.js";
import { log } from "../utils/logs.js";

export const reinitializePlayers = async (socket, playerIds, formPlayers) => {
  try {
    log.controller(
      "Reinitializing players for",
      socket.handshake.auth.gameId,
      "begun"
    );
    const resetPlayers = {};
    for (const [i, playerId] of playerIds.entries()) {
      const player = await User.findById(playerId);

      const playerFormValues = formPlayers[i];

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
    log.controllerSuccess(
      "Reinitializing players for",
      socket.handshake.auth.gameId,
      "complete"
    );
    socket.emit("reinitialized-players", { resetPlayers }, (status) => {
      status
        ? log.socket(
            socket.handshake.auth.gameId,
            "reinitializing player successful"
          )
        : log.socketError(socket.id, "reinitializing players failed");
    });
  } catch (err) {
    log.controllerFailure(
      "Reinitializing players for",
      socket.handshake.auth.gameId,
      "failed"
    );
    socket.emit("error", err);
  }
};
