export const initializePlayersEmitter = (socket, gameId, formValues) => {
  socket.emit("initialize-players", { gameId, formValues });
};

export const updatePlayerEmitter = (socket, playerId, formData, currentForm, centerPoint) => {
  socket.emit(
    "update-player",
    {
      centerPoint,
      _id: playerId,
      responses: formData,
      updateStep: currentForm,
    },
    (res) => {
      console.log(res);
    }
  );
};

export const fetchCirclesEmitter = (socket) => {
  socket.emit("fetch-circles");
};

export const fetchPolarGrid = (socket, data) => {
  socket.emit("fetch-polar-grid", data);
};

export const finalDisplayEmitter = (socket) => {
  socket.emit("final-display");
};

export const endGameEmitter = (socket) => {
  socket.emit("end-game");
};

export const screenshotEmitter = (socket, screenshotBuffer) => {
  console.log('screenshot emitter')
  socket.emit("screenshot", screenshotBuffer);
}
