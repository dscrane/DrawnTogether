import { PolarGrid } from "../utils/polarGrid.js";
import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";

export const generateSession = async (res, gridData) => {
  try {
    // Create new polar grid instance
    const polarGrid = new PolarGrid(gridData);

    // Create new Game document
    const newGame = await new Game({
      inProgress: true,
      complete: false,
      timestamp: Date.now(),
    });

    // Send Game and polar grid data to client
    res.send({
      game: newGame,
      gridPaths: {
        partialPath: polarGrid.partialPath,
        polarGridPath: polarGrid.polarGridPath,
      },
    });

    // Save new Game document
    await newGame.save();
    log.controllerSuccess("Generate game session", newGame._id, "success");
  } catch (e) {
    console.log(e);
  }
};
