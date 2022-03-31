import express from "express";
import { Game } from "../models/game.js";
import { initializePlayers } from "../utils/initializePlayers.js";
import { PolarGrid } from "../utils/createPolarGridPath.js";

const router = express.Router();

router.get("/games/:id", async (req, res) => {
  const game = await Game.findById(req.body._id);
  res.send(game);
});

router.post("/games/initializeGame", async (req, res) => {
  let newGame = await new Game({
    inProgress: false,
    complete: false,
    timestamp: Date.now(),
  });

  await newGame.save();

  res.send({
    inProgress: newGame.inProgress,
    gameId: newGame._id,
    timestamp: newGame.timestamp,
  });
});

/*router.post("/games/initializeGame", async (req, res) => {

  const { interest, players, gridDisplay } = req.body;

  try {
    // Create the polar grid display path
    const polarGrid = new PolarGrid(gridDisplay.width, gridDisplay.xAxisCenter, gridDisplay.yAxisCenter);
    const polarGridPath = polarGrid.polarGridPath;
    // Generate a new Game document
    let newGame = await new Game({
      inProgress: true,
      complete: false,
      interest: interest,
      numPlayers: players.length,
      timestamp: Date.now(),
      gridDisplay: { ...gridDisplay },
    });

    // Generate initial Player documents for each player
    const { playersObj, playerIds, circles } = await initializePlayers(
      players,
      newGame._id
    );

    // Update Game document with playerIds and circles array
    newGame.playerIds = playerIds;
    newGame.circles = circles;

    // Save the new Game document
    await newGame.save();

    res.send({ game: newGame, players: playersObj, polarGridPath });
  } catch (e) {
    console.log(e);
  }
});*/

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
