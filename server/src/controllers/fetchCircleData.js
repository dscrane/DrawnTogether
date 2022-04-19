import { Game } from "../models/game.js";
import { Circle } from "../models/circle.js";
import { log } from "../utils/logs.js";

export const fetchCircleData = async (socket, finalDisplay) => {
  const game = await Game.findById(socket.handshake.auth.gameId);
  const gameCircles = game.circles.map((circle) => circle._id);


  if (finalDisplay) {
    // Turn animations off for final display
    await Circle.updateMany({_id: { $in: gameCircles }}, { isAnimated: false })

    // Fetch newly updated circles
    const circles = await Circle.find({ _id: { $in: gameCircles } });

    // Recreate initial circles for final display
    const initialGameCircles = game.initialCircles.map(
      (initialCircle) => initialCircle._id
    );
    const initialCircles = await Circle.find({
      _id: { $in: initialGameCircles },
    });
    socket.emit("final-display-circles", [...initialCircles, ...circles], (status) => {
      status ?
        log.socket(socket.handshake.auth.gameId, 'final display successful') :
        log.socketError(socket.id, 'final display failed')
    });
    return;
  }
  const circles = await Circle.find({ _id: { $in: gameCircles } });
  socket.emit("display-circles", circles, (status) => {
    status ?
      log.socket(socket.handshake.auth.gameId, 'circle display successful') :
      log.socketError(socket.id, 'circle display failed')
  });
};
