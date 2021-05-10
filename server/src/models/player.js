import { Schema, model } from 'mongoose';

export const playerSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: String,
    hasProfile: Boolean,
    game: {
      responses: {
        age: Number,
        association: Number,
        color: {type: String, lowercase: true, trim: true},
        culture: Number,
        diet: {type: String, lowercase: true, trim: true},
        food: Number,
        gender: Number,
        hair: Number,
        height: Number,
        interest: Number,
        media: {type: String, lowercase: true, trim: true},
        money: Number,
        nature: {type: String, lowercase: true, trim: true},
        personality: Number,
        progress: {type: String, lowercase: true, trim: true},
        religion: {type: String, lowercase: true, trim: true},
        time: Number,
      },
      circles: [Schema.types.ObjectId]
    },
    history: [{ gameId: Schema.types.ObjectId, circles: [Schema.types.ObjectId] }]

  }
)

export const Player = model("Player", playerSchema);