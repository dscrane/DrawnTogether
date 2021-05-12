import { User } from "../models/user.js";
export const initializePlayers = async (responses) => {
  const players = {};
  const playerIds = [];

  const numPlayers = Object.keys(responses).length;
  const circles = new Array(numPlayers).fill({});

  for (let i = 0; i < numPlayers; i++) {
    const newUser = await new User({
      name: responses[i].name,
      responses: { association: responses[i].association },
    });
    await newUser.save();
    players[i] = newUser;
    playerIds.push(newUser._id);
  }

  return { players, playerIds, circles };
};
