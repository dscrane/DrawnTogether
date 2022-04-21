import { Circle } from "../models/circle.js";
import { Game } from "../models/game.js";
import { log } from "../utils/logs.js";

export const fetchCircleData = async (socket, finalDisplay) => {
  log.controller(
    "Fetching circle data for",
    socket.handshake.auth.gameId,
    "begun"
  );
  try {
    // Find the current game
    const game = await Game.findById(socket.handshake.auth.gameId);
    // Get the circle id's in the current game
    const gameCircles = game.circles.map((circle) => circle._id);

    // Only if it is the final display
    if (finalDisplay) {
      // Turn animations off for final display
      await Circle.updateMany(
        { _id: { $in: gameCircles } },
        { isAnimated: false }
      );

      // Fetch newly updated circles
      const circles = await Circle.find({ _id: { $in: gameCircles } });

      // Recreate initial circles for final display
      const initialGameCircles = game.initialCircles.map(
        (initialCircle) => initialCircle._id
      );
      const initialCircles = await Circle.find({
        _id: { $in: initialGameCircles },
      });

      log.controller(
        "Fetching final circle data for",
        socket.handshake.auth.gameId,
        "complete"
      );
      socket.emit(
        "final-display-circles",
        [...initialCircles, ...circles],
        (status) => {
          status
            ? log.socket(
                socket.handshake.auth.gameId,
                "final display successful"
              )
            : log.socketError(socket.id, "final display failed");
        }
      );
      return;
    }

    // Fetch all users' circles
    const circles = await Circle.find({ _id: { $in: gameCircles } });
    log.controller(
      "Fetching circle data for",
      socket.handshake.auth.gameId,
      "complete"
    );

    socket.emit("display-circles", circles, (status) => {
      status
        ? log.socket(socket.handshake.auth.gameId, "circle display successful")
        : log.socketError(socket.id, "circle display failed");
    });
  } catch (err) {
    log.controllerFailure(
      "Fetching circle data for",
      socket.handshake.auth.gameId,
      "failed"
    );
    socket.emit("error", err);
  }
};
