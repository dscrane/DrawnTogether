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
