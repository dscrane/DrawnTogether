import { User } from "../models/user.js";
import { log } from "../utils/logs.js";

export const reinitializePlayers = async (
  res,
  { gameId, playerIds, values }
) => {
  try {
    // Create object to populate with updated player data
    const resetPlayers = {};

    // Loop through players
    for (const [i, playerId] of playerIds.entries()) {
      // Find player by _id
      const player = await User.findById(playerId);
      // Get current iteration player values
      const playerFormValues = values.players[i];
      // Check if update is necessary
      const noUpdate =
        player.name === playerFormValues.name &&
        player.responses.association === playerFormValues.association;

      // If noUpdate add current player data to resetPlayers object
      if (noUpdate) {
        resetPlayers[i] = player;
      } else {
        // Update player name if name value changed
        if (player.name !== playerFormValues.name) {
          player.name = playerFormValues.name;
        }
        // Update player association if association value changed
        if (player.responses.association !== playerFormValues.association) {
          player.responses.association =
            playerFormValues.association.match(/(\d+)/)[0];
        }
        // Save updated player document and add to resetPlayers object
        resetPlayers[i] = await player.save();
      }
    }
    log.controllerSuccess("Reinitializing players for", gameId, "complete");
    // Send update player data to client
    res.send({ ...resetPlayers });
  } catch (err) {
    console.log(err);
    log.controllerFailure("Reinitializing players for", "", "failed");
  }
};
