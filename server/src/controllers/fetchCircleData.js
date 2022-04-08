import { Game } from "../models/game.js";
import { Circle } from "../models/circle.js";

export const fetchCircleData = async (socket, finalDisplay) => {
  const game = await Game.findById(socket.handshake.auth.gameId);
  const gameCircles = game.circles.map((circle) => circle._id);
  const circles = await Circle.find({ _id: { $in: gameCircles } });

  if (finalDisplay) {
    // Turn animations off for final display
    const finalCircles = circles.map(circle => circle.isAnimated = false);
    // Recreate initial circles for final display
    const initialGameCircles = game.initialCircles.map(
      (initialCircle) => initialCircle._id
    );
    const initialCircles = await Circle.find({
      _id: { $in: initialGameCircles },
    });

    socket.emit("final-display-circles", [...finalCircles, ...initialCircles]);
    return;
  }

  socket.emit("display-circles", circles);
};
