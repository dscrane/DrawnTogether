import { User } from "../models/user.js";
import { log } from "./logs.js";

export const createPlayerObjects = async (players, gameId) => {
  try {
    let index = 0;
    let playersObj = {};
    const playerIds = [];

    for (const player of players) {
      const newUser = await new User({
        responses: {
          ...player,
        },
        timestamp: Date.now(),
      });
      newUser.history.push({ gameId: gameId, circles: [] });
      await newUser.save();

      playersObj[index] = newUser;

      playerIds.push(newUser._id);
      index = index + 1;
    }
    return { playersObj, playerIds };
  } catch (err) {
    log.red(err);
    new Error(err);
  }
};
