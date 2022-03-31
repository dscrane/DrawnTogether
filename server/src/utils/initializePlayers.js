import { User } from "../models/user.js";

export const initializePlayers = async (players, gameId) => {
  let index = 0;
  let playersObj = {};
  const playerIds = [];
  const numPlayers = players.length;

  const circles = new Array(numPlayers).fill({});

  for (const player of players) {
    const newUser = await new User({
      name: player.name,
      timestamp: Date.now(),
    });
    newUser.circleData = { gameId, userId: newUser._id };
    await newUser.save();

    playersObj[index] = newUser;
    playerIds.push(newUser._id);
    index = index + 1;
  }
  return { playerIds, playersObj };
  // return { playersObj, playerIds, circles };
};
