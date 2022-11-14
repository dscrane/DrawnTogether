import { PolarGrid } from "../lib/polarGrid.js";
import { log } from "../utils/appUtils/logs.js";
import { Game } from "../models/game.js";
import { Circle } from "../models/circle.js";
import { resizePlayerCircles } from "./resizePlayerCircles.js";

export const fetchPolarGrid = async (res, gridData) => {
  // Create new PolarGrid instance
  console.log(gridData);
  const polarGrid = new PolarGrid(gridData);
  // Send new polar grid data to client
  res.send({
    partialPath: polarGrid.partialPath,
    polarGridPath: polarGrid.polarGridPath,
  });
};
