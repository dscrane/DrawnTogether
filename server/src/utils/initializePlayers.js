import { User } from "../models/user.js";
export const initializePlayers = async (players) => {
  console.log(players);
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
    await newUser.save();
    playersObj[index] = newUser;
    playerIds.push(newUser._id);
    index = index + 1;
  }
  console.log(playersObj);
  return { playersObj, playerIds, circles };
};
