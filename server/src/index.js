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

const getGameAndUser = (req, next) => {
  console.log(request);
};

const wrap = (validateAndUpdateResponses) => (socket, next) =>
  validateAndUpdateResponses(socket.request, {}, next);
io.on("connect", (socket) => {
  socket.on(
    "initialize-players",
    ({ gameId, formValues: { interest, players } }) => {
      initializePlayers(socket, gameId, interest, players);
    }
  );
  // socket.use((socket, next) => validateAndUpdateResponses(socket, {}, next));
  socket.on("update-player", (updateData, cb) => {
    updatePlayer(socket, updateData);
  });
  socket.on("fetch-circles", () => {
    fetchCircleData(socket);
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/public/index.html"));
});

httpServer.listen(PORT, () =>
  log.yellow(`[APP]: Listening on localhost:${PORT}`)
);
