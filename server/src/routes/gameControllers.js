import express from "express";
import multer from "multer";
import { Game } from "../models/game.js";
import path from "path";
import { log } from "../utils/logs.js";
import fs from 'fs';

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});
const screenshot = multer({ storage: storage });
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
router.post(
  "/games/sendScreenshot",
  screenshot.single("screenshot"),
  async (req, res) => {
    res.send({ screenshotStatus: true });
  }
);


export { router as gameRouter };
