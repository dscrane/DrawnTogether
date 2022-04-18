import {PolarGrid} from "../utils/polarGrid.js";
import {log} from "../utils/logs.js";

export const fetchPolarGrid = async (socket, gridData) => {
  console.log(gridData)
  const polarGrid = new PolarGrid(gridData);
  const path = gridData.onlyCircles ? polarGrid.circlePath : polarGrid.polarGridPath;
  socket.emit("polar-grid", path, (status) => {
    status ?
      log.socket(socket.handshake.auth.gameId, 'polar grid request successful') :
      log.socketError(socket.id, 'polar grid request failed')
  });
}