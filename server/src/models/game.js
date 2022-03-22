import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  numPlayers: Number,
  playerIds: [mongoose.Schema.Types.ObjectId],
  circles: Array,
  inProgress: Boolean,
  complete: Boolean,
  timestamp: Date,
  interest: String,
  // finalDisplay: Buffer
});

gameSchema.methods.toJSON = function () {
  const game = this;
  const userObject = game.toObject();

  delete userObject.__v;

  return userObject;
};

export const Game = mongoose.model("Game", gameSchema);
