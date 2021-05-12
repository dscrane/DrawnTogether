import mongoose from 'mongoose';


export const userSchema = new mongoose.Schema(
  {
    name: String,
    hasProfile: Boolean,
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
    circles: [mongoose.Schema.Types.ObjectId],
    history: [{ gameId: mongoose.Schema.Types.ObjectId, circles: [mongoose.Schema.Types.ObjectId] }]

  }
)

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.history;
  delete userObject.__v;

  return userObject;
};

export const User = mongoose.model("User", userSchema);