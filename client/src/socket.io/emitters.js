export const initializePlayersEmitter = (socket, gameId, formValues) => {
  console.log(socket.id, "initializePlayersEmitter");
  socket.emit("initialize-players", { gameId, formValues });
};

export const reinitializePlayersEmitter = (socket, playerIds, formValues) => {
  console.log(socket.id, "reinitializePlayersEmitter");
  socket.emit("reinitialize-players", { playerIds, formValues });
};

export const updatePlayerEmitter = (socket, playerId, formData, currentForm, centerPoint) => {
  console.log(socket.id, "updatePlayerEmitter");
  socket.emit("update-player", {
    centerPoint,
    _id: playerId,
    responses: formData,
    updateStep: currentForm,
  });
};

export const fetchCirclesEmitter = (socket) => {
  console.log(socket.id, "fetchCirclesEmitter");
  socket.emit("fetch-circles");
};

export const fetchPolarGrid = (socket, data) => {
  console.log(socket.id, "fetchPolarGrid");
  socket.emit("fetch-polar-grid", data);
};

export const finalDisplayEmitter = (socket) => {
  console.log(socket.id, "finalDisplayEmitter");
  socket.emit("final-display");
};

export const endGameEmitter = (socket) => {
  console.log(socket.id, "endGameEmitter");
  socket.emit("end-game");
};

export const saveScreenshotEmitter = (socket, screenshotBuffer) => {
  console.log(socket.id, "saveScreenshotEmitter");
  socket.emit("save-screenshot", screenshotBuffer);
};
