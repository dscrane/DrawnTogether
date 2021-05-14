import { validateResponses } from "../utils/validateResponses.js";

export const validateUpdates = async (req, res, next) => {
  const { responses, updateStep } = req.body;
  const toUpdate = Object.keys(responses);

  try {
    await validateResponses(toUpdate, updateStep);
    res.toUpdate = toUpdate;
    next();
  } catch (e) {
    res.send({ error: { ...e } });
  }
};
