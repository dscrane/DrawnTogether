import mongoose from "mongoose";
import { Circle, circleSchema } from "./circle.js";

const gameSchema = new mongoose.Schema({
  numPlayers: Number,
  playerIds: [mongoose.Schema.Types.ObjectId],
  circles: [mongoose.Schema.Types.ObjectId],
  initialCircles: [mongoose.Schema.Types.ObjectId],
  inProgress: Boolean,
  complete: Boolean,
  timestamp: Date,
  interest: String,
  // finalDisplay: Buffer
});

gameSchema.methods.toJSON = function () {
  const game = this;
  const gameObject = game.toObject();

  delete gameObject.__v;

  return gameObject;
};

export const Game = mongoose.model("Game", gameSchema);
