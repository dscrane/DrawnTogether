import { validateResponses } from "../utils/validateResponses.js";
import { User } from "../models/user.js";
import { log } from "../utils/logs.js";
import { Game } from "../models/game.js";
import { Circle } from "../models/circle.js";

export const validateAndUpdateResponses = async (req, res, next) => {
  try {
    const user = await User.findById(req.body.playerId);
    const { valid } = validateResponses(
      user.responses,
      req.body.responses,
      req.body.updateStep
    );

    if (valid) {
      user.responses = { ...user.responses, ...req.body.responses };
      await user.save();
      req.user = user;
      console.log("MIDDLEWARE: updates are valid");
      return next();
    }
  } catch (e) {
    next(new Error(e));
  }
};
