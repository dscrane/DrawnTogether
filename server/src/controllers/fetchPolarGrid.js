import {PolarGrid} from "../utils/polarGrid.js";

export const fetchPolarGrid = async (socket, gridData) => {
  const polarGrid = new PolarGrid(gridData);
  socket.emit("polar-grid", polarGrid.polarGridPath);
}