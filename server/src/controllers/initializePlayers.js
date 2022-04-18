import { Game } from "../models/game.js";
import { createPlayerObjects } from "../utils/createPlayerObjects.js";
import { log } from "../utils/logs.js";

export const initializePlayers = async (socket, gameId, interest, players) => {
  log.white('Initializing players running');
  const game = await Game.findById(gameId);
  const { playersObj, playerIds, circles, initialCircles } =
    await createPlayerObjects(players, game._id);

  game.curiosity = interest;
  game.numPlayers = playerIds.length;
  game.playerIds = playerIds;
  game.circles = circles;
  game.initialCircles = initialCircles;

  socket.emit("initialized-players", {
    numPlayers: playerIds.length,
    playerIds,
    playersObj,
    interest,
  }, (status) => {
    status ?
    log.socket(socket.handshake.auth.gameId, 'initializing player successful') :
      log.socketError(socket.id, 'initializing players failed')
  });

  await game.save();
};
