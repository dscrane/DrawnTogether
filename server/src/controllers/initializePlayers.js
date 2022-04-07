import { Game } from "../models/game.js";
import { createPlayerObjects } from "../utils/createPlayerObjects.js";

export const initializePlayers = async (socket, gameId, curiosity, players) => {
  console.log("initialize");
  const game = await Game.findById(gameId);
  const { playersObj, playerIds, circles, initialCircles } =
    await createPlayerObjects(players, game._id);

  game.curiosity = curiosity;
  game.numPlayers = playerIds.length;
  game.playerIds = playerIds;
  game.circles = circles;
  game.initialCircles = initialCircles;

  socket.emit("initialized-players", {
    numPlayers: playerIds.length,
    playerIds,
    playersObj,
    curiosity,
  });

  await game.save();
};
