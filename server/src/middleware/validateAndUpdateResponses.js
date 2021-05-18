import { validateResponses } from "../utils/validateResponses.js";
import { User } from "../models/user.js";
import { log } from "../utils/logs.js";

export const validateAndUpdateResponses = async (req, res, next) => {
  const { responses, updateStep, _id, centerPoint } = req.body;
  const toUpdate = Object.keys(responses);

  log.yellow("[APP]: Validating responses...");
  try {
    await validateResponses(toUpdate, updateStep);
    const user = await User.findById(_id);
    toUpdate.forEach((update) => (user.responses[update] = responses[update]));
    await user.save();
    req.body = { updateStep, user, centerPoint };
    log.green("[APP]: Responses are valid");
    next();
  } catch (e) {
    console.log(e);
    res.send({ error: { ...e } });
  }
};
