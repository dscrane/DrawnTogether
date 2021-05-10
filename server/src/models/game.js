import { Schema, model } from "mongoose";


const gameSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    numPlayers: Number,
    players: [Schema.types.ObjectId],
    complete: Boolean,
    date: Date,
    finalDisplay: Buffer
  }
)

export const Game = model('Game', gameSchema);