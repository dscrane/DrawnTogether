import { Game } from "../models/game.js";
import { Circle } from "../models/circle.js";

export const fetchCircleData = async (socket) => {
  const game = await Game.findById(socket.handshake.auth.gameId);
  const gameCircles = game.circles.map((circle) => circle._id);
  const circles = await Circle.find({ _id: { $in: gameCircles } });
  console.log(circles);

  socket.emit("display-circles", circles);
};
