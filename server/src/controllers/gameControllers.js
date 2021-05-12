import express from "express";
import { Game } from "../models/game.js";
import { initializePlayers } from "../utils/initializePlayers.js";

const router = new express.Router();

router.get("/games/:id", async (req, res) => {
  const game = await Game.findById(req.body._id);
  res.send(game);
});

router.post("/games/initializeGame", async (req, res) => {
  const { interest, responses } = req.body;
  const { players, playerIds, circles } = await initializePlayers(responses);

  const newGame = new Game({
    circles,
    numPlayers: playerIds.length,
    playerIds: playerIds,
    inProgress: true,
    complete: false,
    interest: interest,
  });
  await newGame.save();
  res.send({ game: newGame, players: players });
});

router.patch("/games/updateGame", async (req, res) => {
  const { _id, updates } = req.body;
  const toUpdate = Object.keys(updates);

  try {
    const game = await Game.findById(_id);
    toUpdate.forEach((update) => {
      game[update] = updates[update];
    });
    await game.save();
    res.send(game);
  } catch (e) {
    console.log(e);
  }
});

export { router as gameRouter };
