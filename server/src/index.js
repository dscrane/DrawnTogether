import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import { default as connectDatabase } from "./db/db.js";
import { userRouter } from "./routes/userControllers.js";
import { gameRouter } from "./routes/gameControllers.js";
import { initializePlayers } from "./controllers/initializePlayers.js";
import { reinitializePlayers } from "./controllers/reinitializePlayers.js";
import { fetchPolarGrid } from "./controllers/fetchPolarGrid.js";
import { updatePlayer } from "./controllers/updatePlayer.js";
import { fetchCircleData } from "./controllers/fetchCircleData.js";
import { updateScreenshot } from "./controllers/updateScreenshot.js";
import { endGame } from "./controllers/endGame.js";
import { log } from "./utils/logs.js";
import {PolarGrid} from "./utils/polarGrid.js";

// Set port
const PORT = process.env.PORT || 5500;
// Initialize Database connection
connectDatabase();
// Spin up express app
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "http://localhost:3000" },
});
// Connect middlewares
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/src/public")));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(cors({ origin: "http://localhost:3000" }));

// Connect routers
app.use(gameRouter);
app.use(userRouter);

io.on("connect", (socket) => {
  log.socket(socket.id, `${socket.handshake.auth.gameId} has connected`)
  socket.on("connect_error", (err) => {
    console.log(err.req);      // the request object
    console.log(err.code);     // the error code, for example 1
    console.log(err.message);  // the error message, for example "Session ID unknown"
    console.log(err.context);  // some additional error context
  });
  socket.on(
    "initialize-players",
    async ({ gameId, formValues: { interest, players } }) => {
      log.socket(socket.handshake.auth.gameId, 'is initializing players');
      await initializePlayers(socket, gameId, interest, players);
    }
  );
  socket.on("reinitialize-players", async ({ playerIds, formValues: { players } }) => {
    log.socket(socket.handshake.auth.gameId, 'is reinitializing players');
    await reinitializePlayers(socket, playerIds, players)
  })
  socket.on("update-player", async (updateData) => {
    log.socket(socket.handshake.auth.gameId, 'is updating a player');
    await updatePlayer(socket, updateData);
  });
  socket.on("fetch-circles", async () => {
    log.socket(socket.handshake.auth.gameId, 'is fetching player circles');
    await fetchCircleData(socket);
  });
  socket.on("fetch-polar-grid", async (gridData) => {
    log.socket(socket.handshake.auth.gameId, 'is fetching polar grid');
    await fetchPolarGrid(socket, gridData)
  });
  socket.on("final-display", async () => {
    log.socket(socket.handshake.auth.gameId, 'is creating the final display');
    await fetchCircleData(socket, true);
  });
  socket.on("end-game", async () => {
    log.socket(socket.handshake.auth.gameId, 'is ending the game');
    await endGame(socket);
    // io.disconnectSockets();
  });
  socket.on("save-screenshot", async (screenshotData) => {
    log.socket(socket.handshake.auth.gameId, 'is saving a screenshot');
    await updateScreenshot(socket, screenshotData)
  })
  socket.on("connection_error", (err) => {
    console.log(err)
  })
  socket.on("disconnect", (reason) => {
    log.socket(socket.handshake.auth.gameId, reason)
  })

});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/public/index.html"));
});

httpServer.listen(PORT,'192.168.1.62', () =>
  log.yellow(`[APP]: Listening on localhost:${PORT}`)
);
