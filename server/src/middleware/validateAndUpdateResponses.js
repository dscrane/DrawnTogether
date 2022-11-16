import { validateResponses } from "../utils/appUtils/validateResponses.js";
import { User } from "../models/user.js";

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
