import path from "path";
import express from "express";
import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";
import { PolarGrid } from "../utils/polarGrid.js";

// Router initialization
const router = new express.Router();

router.get("/games/screenshot/:id", async (req, res) => {
  const __dirname = path.resolve();
  res.sendFile(
    path.join(__dirname, `/uploads/temp/screenshot_${req.params.id}.png`)
  );
});

router.post("/games/fetchPolarGrid", async (req, res) => {
  console.log(req.body);
  const polarGrid = new PolarGrid(req.body);
  res.send({
    partialPath: polarGrid.partialPath,
    polarGridPath: polarGrid.polarGridPath,
  });
});

router.get("/games/fetchCircleData", async (req, res) => {});

router.post("/games/generateSession", async (req, res) => {
  log.cyan("Generating game session");
  console.log(req.body);
  try {
    const polarGrid = new PolarGrid(req.body);

    let newGame = await new Game({
      inProgress: true,
      complete: false,
      timestamp: Date.now(),
    });

    await newGame.save();

    res.send({
      game: newGame,
      gridPaths: {
        partialPath: polarGrid.partialPath,
        polarGridPath: polarGrid.polarGridPath,
      },
    });
    log.green("Game session generated");
  } catch (e) {
    console.log(e);
  }
});

router.post("/games/initializePlayers", async (req, res) => {});

router.post("/games/reinitializePlayers", async (req, res) => {});

router.post("/games/updatePlayer", async (req, res) => {});

router.post("/games/updateScreenshot", async (req, res) => {});

router.post("/games/endGame", async (req, res) => {});

export { router as gameRouter };
