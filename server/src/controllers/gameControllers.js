import express from "express";
import { Game } from "../models/game.js";
import { initializePlayers } from "../utils/initializePlayers.js";

const router = new express.Router();

router.get("/games/:id", async (req, res) => {
  const game = await Game.findById(req.body._id);
  res.send(game);
});

router.post("/games/initializeGame", async (req, res) => {
  console.log(req.body);
  const { interest, players } = req.body;
  try {
    let newGame = await new Game({
      inProgress: true,
      complete: false,
      interest: interest,
    });
    console.log(newGame);
    const { playersObj, playerIds, circles } = await initializePlayers(
      players,
      newGame._id
    );

    newGame.numPlayers = playerIds.length;
    newGame.playerIds = playerIds;
    newGame.circles = circles;
    console.log(newGame);
    await newGame.save();
    res.send({ game: newGame, players: playersObj });
  } catch (e) {
    console.log(e);
  }
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
