import { initializePlayers } from "../controllers/initializePlayers.js";
import { reinitializePlayers } from "../controllers/reinitializePlayers.js";
import { updatePlayer } from "../controllers/updatePlayer.js";
import { fetchCircleData } from "../controllers/fetchCircleData.js";
import { fetchPolarGrid } from "../controllers/fetchPolarGrid.js";
import { endGame } from "../controllers/endGame.js";
import { updateScreenshot } from "../controllers/updateScreenshot.js";
import { log } from "../utils/logs.js";

export const socketConfig = (io) => {
  io.on("connect", (socket) => {
    log.socket(socket.id, `${socket.handshake.auth.gameId} has connected`);
    socket.on(
      "initialize-players",
      async ({ gameId, formValues: { interest, players } }) => {
        log.socket(socket.handshake.auth.gameId, "is initializing players");
        await initializePlayers(socket, gameId, interest, players);
      }
    );
    socket.on(
      "reinitialize-players",
      async ({ playerIds, formValues: { players } }) => {
        log.socket(socket.handshake.auth.gameId, "is reinitializing players");
        await reinitializePlayers(socket, playerIds, players);
      }
    );
    socket.on("update-player", async (updateData) => {
      log.socket(socket.handshake.auth.gameId, "is updating a player");
      await updatePlayer(socket, updateData);
    });
    socket.on("fetch-circles", async () => {
      log.socket(socket.handshake.auth.gameId, "is fetching player circles");
      await fetchCircleData(socket);
    });
    socket.on("fetch-polar-grid", async (gridData) => {
      log.socket(socket.handshake.auth.gameId, "is fetching polar grid");
      await fetchPolarGrid(socket, gridData);
    });
    socket.on("final-display", async () => {
      log.socket(socket.handshake.auth.gameId, "is creating the final display");
      await fetchCircleData(socket, true);
    });
    socket.on("end-game", async () => {
      log.socket(socket.handshake.auth.gameId, "is ending the game");
      await endGame(socket);
    });
    socket.on("save-screenshot", async (screenshotData) => {
      log.socket(socket.handshake.auth.gameId, "is saving a screenshot");
      await updateScreenshot(socket, screenshotData);
    });
    socket.on("connection_error", (err) => {
      console.log(err);
    });
    socket.on("disconnect", (reason) => {
      log.socket(socket.handshake.auth.gameId, reason);
    });
  });
};
