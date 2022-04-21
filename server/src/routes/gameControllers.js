import path from "path";
import express from "express";
import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";

// Router initialization
const router = new express.Router();

router.get("/games/screenshot/:id", async (req, res) => {
  const __dirname = path.resolve();
  res.sendFile(path.join(__dirname, `/uploads/temp/screenshot_${req.params.id}.png`))
})
router.post("/games/generateSession", async (req, res) => {
  log.cyan("Generating game session");
  try {
    let newGame = await new Game({
      inProgress: true,
      complete: false,
      timestamp: Date.now(),
    });

    await newGame.save();

    res.send({ game: newGame });
    log.green("Game session generated")
  } catch (e) {
    console.log(e);
  }
});



export { router as gameRouter };
