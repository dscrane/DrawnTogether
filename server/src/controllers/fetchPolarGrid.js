import { PolarGrid } from "../utils/polarGrid.js";
import { log } from "../utils/logs.js";

export const fetchPolarGrid = async (res, gridData) => {
  // Create new PolarGrid instance
  const polarGrid = new PolarGrid(gridData);
  // Send new polar grid data to client
  res.send({
    partialPath: polarGrid.partialPath,
    polarGridPath: polarGrid.polarGridPath,
  });
};
