import { User } from "../models/user.js";
import { Circle } from "../models/circle.js";

export const initializePlayers = async (players, gameId) => {
  let index = 0;
  let playersObj = {};
  const playerIds = [];
  const numPlayers = players.length;

  const circles = new Array(numPlayers).fill({});

  for (const player of players) {
    const newUser = await new User({
      name: player.name,
      responses: { association: player.association },
    });
    newUser.history.push({ gameId: gameId });
    await newUser.save();
    const newUserCircle = await new Circle({
      playerId: newUser._id,
      gameId: gameId,
    });
    await newUserCircle.save();
    playersObj[index] = newUser;
    playerIds.push(newUser._id);
    index = index + 1;
  }
  return { playersObj, playerIds, circles };
};
