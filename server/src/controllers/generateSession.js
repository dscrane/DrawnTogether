import { Game } from "../models/game.js";
import { log } from "../utils/appUtils/logs.js";
import { createBackground } from "../utils/circleUtils/createBackground.js";

export const generateSession = async (res, { display }) => {
  try {
    // Create new Game document
    const newGame = await new Game({
      inProgress: true,
      complete: false,
      timestamp: Date.now(),
    });

    // Create background display
    const { backgroundCircles } = await createBackground(11, 6, display, true);

    // Send Game and polar grid data to client
    res.send({
      game: newGame,
      backgroundCircles: backgroundCircles,
    });

    // Save new Game document
    await newGame.save();
    log.controllerSuccess("Generate game session", newGame._id, "success");
  } catch (e) {
    res.status(206);
    res.send({ error: { ...e } });
    console.log({ ...e });
  } finally {
  }
};
