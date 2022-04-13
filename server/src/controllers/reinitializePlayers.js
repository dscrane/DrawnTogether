import { User } from "../models/user.js";

export const reinitializePlayers = async (socket, playerIds, formPlayers) => {
  console.log('reinitialized-players');
  const resetPlayers = {};
  for (const [i, playerId] of playerIds.entries()) {
    const player = await User.findById(playerId);
    const playerFormValues = formPlayers[i];

    if (player.name === playerFormValues.name && player.responses.association === playerFormValues.association) {

      resetPlayers[i] = player;
    } else {
      if (player.name !== playerFormValues.name) {
        player.name = playerFormValues.name;
      } else if (player.responses.association !== playerFormValues.association) {
        player.responses.association = playerFormValues.association;
      }
      resetPlayers[i] = await player.save();
    }
  }
  socket.emit("reinitialized-players", {resetPlayers})
}