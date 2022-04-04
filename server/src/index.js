import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import { initializePlayers } from "./controllers/initializePlayers.js";
import { userRouter } from "./routes/userControllers.js";
import { gameRouter } from "./routes/gameControllers.js";
import { default as connectDatabase } from "./db/db.js";
import { log } from "./utils/logs.js";
import { validateAndUpdateResponses } from "./middleware/validateAndUpdateResponses.js";
import { updatePlayer } from "./controllers/updatePlayer.js";
import { fetchCircleData } from "./controllers/fetchCircleData.js";
import { PolarGrid } from "./utils/polarGrid.js";

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
app.use(bodyParser.json());
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
    ({ gameId, formValues: { interest, players } }) => {
      initializePlayers(socket, gameId, interest, players);
    }
  );
  socket.on("update-player", (updateData, cb) => {
    console.log("[update-player]: ", updateData);
    updatePlayer(socket, updateData);
  });
  socket.on("fetch-circles", () => {
    fetchCircleData(socket);
  });
  socket.on("fetch-polar-grid", (gridData) => {
    socket.emit("polar-grid", createPolarGrid(gridData));
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/public/index.html"));
});

httpServer.listen(PORT, () =>
  log.yellow(`[APP]: Listening on localhost:${PORT}`)
);
