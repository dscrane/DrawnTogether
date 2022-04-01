import { validateResponses } from "../utils/validateResponses.js";
import { User } from "../models/user.js";
import { log } from "../utils/logs.js";
import { Game } from "../models/game.js";

export const validateAndUpdateResponses = async (socket, res, next) => {
  console.log(socket);
  if (!socket[1].updateStep) {
    console.log("middleware skipped");
    next();
  } else {
    try {
      console.log(socket[1]);
      const user = await User.findById(data._id);
      user.responses = socket[1].responses;
      await user.save();
      // console.log(user)
      // socket.data = { user };
      socket[1].user = user;
      next();
    } catch (e) {
      next(new Error(e));
    }
  }

  // const { responses, updateStep, _id, centerPoint } = req.body;
  // const toUpdate = Object.keys(responses);
  //
  // log.yellow("[APP]: Validating responses...");
  // try {
  //   validateResponses(toUpdate, updateStep);
  //   const user = await User.findById(_id);
  //   toUpdate.forEach((update) => (user.responses[update] = responses[update]));
  //   await user.save();
  //   req.body = { updateStep, user, centerPoint };
  //   log.green("[APP]: Responses are valid");
  //   next();
  // } catch (e) {
  //   console.log(e);
  //   res.send({ error: { ...e } });
  // }
};
