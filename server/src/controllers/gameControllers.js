import express from "express";
import { Game } from "../models/game.js";

const router = new express.Router();

router.get("/games/:id", async (req,res) => {

});

router.post("/games/create", async (req,res) => {
    console.log(res.body)
    const newGameState = {
        inProgress: true,
        complete: false,
        players: [],
        circles: [],
        interest: "",

    }
    const newGame = new Game(newGameState);
    await newGame.save();
    res.send(newGame);
});

export { router as gameRouter };