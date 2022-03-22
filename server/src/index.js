import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import { userRouter } from "./controllers/userControllers.js";
import { gameRouter } from "./controllers/gameControllers.js";
import { default as connectDatabase } from "./db/db.js";
import { log } from "./utils/logs.js";

// Set port
const PORT = process.env.port || 5500;
// Initialize Database connection
connectDatabase();
// Spin up express app
const app = express();
// Connect middlewares
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/src/public')))
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
// Connect routers
app.use(gameRouter);
app.use(userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '/src/public/index.html'))
})

app.listen(PORT, () => log.yellow(`[APP]: Listening on localhost:${PORT}`));
