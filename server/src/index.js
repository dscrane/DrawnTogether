import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import { default as connectDatabase } from "./db/db.js";
import { userRouter } from "./routes/userControllers.js";
import { gameRouter } from "./routes/gameControllers.js";

import { log } from "./utils/logs.js";

// Set port
const PORT = process.env.PORT || 5500;

// Spin up express app
const app = express();

// Connect middlewares
app.use(express.static(path.join(path.resolve(), "/src/public")));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(cors({ origin: "http://localhost:3000" }));

// Connect routers
app.use(gameRouter);
// app.use(userRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "/src/public/index.html"));
});

app.listen(PORT, "192.168.1.62", () =>
  log.yellow(`[APP]: Listening on localhost:${PORT}`)
);

// Initialize Database connection
await connectDatabase();
