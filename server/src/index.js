import express from 'express';
import cors from "cors";
import { playerRouter } from "./controllers/players.js";
import bodyParser from "body-parser";

const PORT = process.env.port || 5500;
const app = express();
app.use(bodyParser.json())
app.use(cors());

app.use(playerRouter);

app.get('/', (req, res) => {
  res.send('HELLO WORLD')
})

app.listen(PORT, ()=>console.log(`[APP]: listening on localhost:${PORT}`))