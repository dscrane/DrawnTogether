import express from "express";
import multer from "multer";
import { Game } from "../models/game.js";
import path from "path";
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

router.get("/games/:id", async (req, res) => {
  const game = await Game.findById(req.body._id);
  res.send(game);
});
router.get("/games/screenshot/:id", async (req, res) => {
  const __dirname = path.resolve();
  res.sendFile(path.join(__dirname, `/uploads/temp/screenshot_${req.params.id}.png`))
})
router.post("/games/generateSession", async (req, res) => {
  console.log("generate");
  try {
    let newGame = await new Game({
      inProgress: true,
      complete: false,
      timestamp: Date.now(),
    });

    await newGame.save();

    res.send({ game: newGame });
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
router.post("/games/createPlayerObjects", async (req, res) => {
  console.log(req.body);
  // const { gameId, interest, players } = req.body;
  // try {
  //   console.log('initialize')
  //   const game = await Game.findById(gameId);
  //   const { playersObj, playerIds, circles } = await createPlayerObjects(
  //     players,
  //     game._id
  //   );
  //
  //   game.interest = interest;
  //   game.numPlayers = playerIds.length;
  //   game.playerIds = playerIds;
  //   game.circles = circles;
  //
  //   await game.save();
  //   console.log(game)
  //   res.send({ numPlayers: playerIds.length, playerIds, playersObj });
  // } catch (e) {
  //   console.log(e);
  // }
});

// router.patch("/games/updateGame", async (req, res) => {
//   const { _id, updates } = req.body;
//   const toUpdate = Object.keys(updates);
//
//   try {
//     const game = await Game.findById(_id);
//     toUpdate.forEach((update) => {
//       game[update] = updates[update];
//     });
//     await game.save();
//     res.send(game);
//   } catch (e) {
//     console.log(e);
//   }
// });

export { router as gameRouter };
