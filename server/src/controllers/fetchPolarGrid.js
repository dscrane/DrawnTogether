import {PolarGrid} from "../utils/polarGrid.js";
import {log} from "../utils/logs.js";

export const fetchPolarGrid = async (socket, gridData) => {
  const polarGrid = new PolarGrid(gridData);
  socket.emit("polar-grid", { partialPath: polarGrid.partialPath, polarGridPath: polarGrid.polarGridPath}, (status) => {
    status ?
      log.socket(socket.handshake.auth.gameId, 'polar grid request successful') :
      log.socketError(socket.id, 'polar grid request failed')
  });
}