import express from "express";
import { Circle } from "../models/circle.js";

const router = new express.Router();

router.get("/circles/:playerId", async (req, res) => {});

router.post("/circles/create", async (req, res) => {
  // playerId, gameId, initial responses, display grid
});

router.post("/circles/update", async (req, res) => {});
