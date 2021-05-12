import express from 'express';
import cors from "cors";
import { userRouter } from "./controllers/userControllers.js";
import { gameRouter } from "./controllers/gameControllers.js";
import bodyParser from "body-parser";
import { default as connectDatabase } from "./db/db.js";

// Set port
const PORT = process.env.port || 5500;
// Initialize Database connection
connectDatabase();
// Spin up express app
const app = express();
// Connect middlewares
app.use(bodyParser.json())
app.use(cors());
// Connect routers
app.use(userRouter);
app.use(gameRouter);

app.get('/', (req, res) => {
  res.send('HELLO WORLD')
})

app.listen(PORT, ()=>console.log(`[APP]: listening on localhost:${PORT}`))