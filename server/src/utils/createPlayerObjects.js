import { User } from "../models/user.js";
import { Circle } from "../models/circle.js";

const circleSkeleton = (gameId, playerId, initial) => {
  return;
};

export const createPlayerObjects = async (players, gameId) => {
  console.log(players);
  let index = 0;
  let playersObj = {};
  const playerIds = [];
  const numPlayers = players.length;

  const circles = [];
  const initialCircles = [];

  for (const player of players) {
    const newUser = await new User({
      name: player.name,
      timestamp: Date.now(),
    });
    newUser.history.push({ gameId: gameId, circles: [] });
    await newUser.save();

    playersObj[index] = newUser;
    const newCircle = await new Circle({
      playerId: newUser._id,
      gameId: gameId,
      initial: false,
    });
    await newCircle.save();
    const newCircleInitial = await new Circle({
      playerId: newUser._id,
      gameId: gameId,
      initial: true,
    });
    await newCircleInitial.save();
    circles.push(newCircle._id);
    initialCircles.push(newCircleInitial._id);
    playerIds.push(newUser._id);
    index = index + 1;
  }
  return { playersObj, playerIds, circles, initialCircles };
};
