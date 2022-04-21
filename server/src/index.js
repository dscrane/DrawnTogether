import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import { default as connectDatabase } from "./db/db.js";
import { userRouter } from "./routes/userControllers.js";
import { gameRouter } from "./routes/gameControllers.js";
import { socketConfig } from "./io/socketConfig.js";
import { log } from "./utils/logs.js";

// Set port
const PORT = process.env.PORT || 5500;

// Spin up express app
const app = express();
const httpServer = createServer(app);
// Create socket server
const io = new Server(httpServer, {
  cors: { origin: "http://localhost:3000" },
});

// Connect middlewares
app.use(express.static(path.join(path.resolve(), "/src/public")));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(cors({ origin: "http://localhost:3000" }));

// Connect routers
app.use(gameRouter);
app.use(userRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/public/index.html"));
});

httpServer.listen(PORT, "192.168.1.62", () =>
  log.yellow(`[APP]: Listening on localhost:${PORT}`)
);

// Link up socket config
socketConfig(io);
// Initialize Database connection
await connectDatabase();
