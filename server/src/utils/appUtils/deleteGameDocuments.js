import { Circle } from "../../models/circle.js";
import { Game } from "../../models/game.js";
import { User } from "../../models/user.js";

export const deleteGameDocuments = async (_id) => {
  const game = await Game.findById(_id);
  const users = await User.find({ _id: { $in: game.playerIds } });
  const circles = await Circle.find({
    _id: { $in: [...game.circles, ...game.initialCircles] },
  });

  const nUsersDeleted = await User.deleteMany({
    _id: { $in: users.map((user) => user._id) },
  }).exec();
  const nCirclesDeleted = await Circle.deleteMany({
    _id: { $in: circles.map((circle) => circle.id) },
  }).exec();

  const nGamesDeleted = await Game.deleteOne({ _id }).exec();

  console.log("Deleted Users:", nUsersDeleted);
  console.log("Deleted Circles:", nCirclesDeleted);
  console.log("Deleted Games:", nGamesDeleted);
};
