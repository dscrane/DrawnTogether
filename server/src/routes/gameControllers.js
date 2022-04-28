import path from "path";
import express from "express";
import { generateSession } from "../controllers/generateSession.js";
import { initializePlayers } from "../controllers/initializePlayers.js";
import { reinitializePlayers } from "../controllers/reinitializePlayers.js";
import { addPlayerCircle } from "../controllers/addPlayerCircle.js";
import { updatePlayer } from "../controllers/updatePlayer.js";
import { fetchCircleData } from "../controllers/fetchCircleData.js";
import { updateScreenshot } from "../controllers/updateScreenshot.js";
import { endGame } from "../controllers/endGame.js";
import { fetchPolarGrid } from "../controllers/fetchPolarGrid.js";
import { validateAndUpdateResponses } from "../middleware/validateAndUpdateResponses.js";
import { log } from "../utils/logs.js";

// Router initialization
const router = new express.Router();

router.get("/games/screenshot/:id", async (req, res) => {
  const __dirname = path.resolve();
  res.sendFile(
    path.join(__dirname, `/uploads/temp/screenshot_${req.params.id}.png`)
  );
});

router.post("/games/generateSession", async (req, res) => {
  log.controller("", "Generating game session", "begun");
  await generateSession(res, req.body);
});

router.post("/games/initializePlayers", async (req, res) => {
  log.controller("Initializing players for", req.body.gameId, "begun");
  await initializePlayers(res, req.body);
});

router.post("/games/reinitializePlayers", async (req, res) => {
  log.controller("Reinitializing players for", req.body.gameId, "begun");
  await reinitializePlayers(res, req.body);
});

router.post(
  "/games/addPlayerCircle",
  validateAndUpdateResponses,
  async (req, res) => {
    log.controller(`Circle creation for`, req.body.playerId, "begun");
    await addPlayerCircle(res, req.body, req.user);
  }
);

router.post(
  "/games/updatePlayer",
  validateAndUpdateResponses,
  async (req, res) => {
    if (req.body.currentPlayer === 0) {
      log.controller(
        `Alteration #${req.body.updateStep} for`,
        req.body.gameId,
        "begun"
      );
    }
    await updatePlayer(res, req.body, req.user);
  }
);

router.post("/games/updateScreenshot", async (req, res) => {
  log.controller("Updating screenshot for", req.body.gameId, "begun");
  await updateScreenshot(res, req.body);
});

router.post("/games/endGame", async (req, res) => {
  log.controller("Ending game for", req.body.gameId, "begun");
  await endGame(res, req.body);
});

router.post("/games/fetchCircleData", async (req, res) => {
  log.controller("Fetching circle data for", req.body.gameId, "begun");
  await fetchCircleData(res, req.body);
});

router.post("/games/fetchPolarGrid", async (req, res) => {
  log.controller("Fetching polar grid data for", null, "begun");
  await fetchPolarGrid(res, req.body);
});

export { router as gameRouter };
