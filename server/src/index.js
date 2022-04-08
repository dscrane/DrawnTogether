import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import { default as connectDatabase } from "./db/db.js";
import { initializePlayers } from "./controllers/initializePlayers.js";
import { userRouter } from "./routes/userControllers.js";
import { gameRouter } from "./routes/gameControllers.js";
import { updatePlayer } from "./controllers/updatePlayer.js";
import { fetchCircleData } from "./controllers/fetchCircleData.js";
import { endGame } from "./controllers/endGame.js";
import { PolarGrid } from "./utils/polarGrid.js";
import { log } from "./utils/logs.js";

console.log(process.env.NODE_ENV);
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

const createPolarGrid = (gridData) => {
  const polarGrid = new PolarGrid(gridData);
  return polarGrid.polarGridPath;
};

io.on("connect", (socket) => {
  socket.on(
    "initialize-players",
    async ({ gameId, formValues: { curiosity, players } }) => {
      await initializePlayers(socket, gameId, curiosity, players);
    }
  );
  socket.on("update-player", async (updateData, cb) => {
    await updatePlayer(socket, updateData);
  });
  socket.on("fetch-circles", async () => {
    await fetchCircleData(socket);
  });
  socket.on("fetch-polar-grid", (gridData) => {
    socket.emit("polar-grid", createPolarGrid(gridData));
  });
  socket.on("final-display", async () => {
    await fetchCircleData(socket, true);
  });
  socket.on("end-game", async () => {
    await endGame(socket);
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/public/index.html"));
});

httpServer.listen(PORT,'192.168.1.62', () =>
  log.yellow(`[APP]: Listening on localhost:${PORT}`)
);
