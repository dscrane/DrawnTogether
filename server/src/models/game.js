import mongoose from "mongoose";


const gameSchema = new mongoose.Schema(
  {
    numPlayers: Number,
    players: [mongoose.Schema.Types.ObjectId],
    inProgress: Boolean,
    complete: Boolean,
    date: Date,
    // finalDisplay: Buffer
  }
)

export const Game = mongoose.model('Game', gameSchema);