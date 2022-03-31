import express from "express";
import bodyParser from "body-parser";
import { createServer } from "http";
import path from "path";
import cors from "cors";
import { Server } from "socket.io";
import { userRouter } from "./controllers/userControllers.js";
import { gameRouter } from "./controllers/gameControllers.js";
import { default as connectDatabase } from "./db/db.js";
import { log } from "./utils/logs.js";
import { socketConfig } from "./socket/socketConfig.js";



// Initialize Database connection
connectDatabase();
// Initialize the express server and the socketio connection
const app = express();


const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Define port
const PORT = process.env.PORT || 5500;

// Connect middlewares
app.use(bodyParser.json());
app.use(cors());
// Connect routers
app.use(gameRouter);
app.use(userRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/src/public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/public/index.html"));
});

// Pass IO instance to socketConfig
socketConfig(io);

//
httpServer.listen(PORT, () => log.yellow(`[APP]: Listening on localhost:${PORT}`));
