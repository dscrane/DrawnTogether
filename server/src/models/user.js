import mongoose from "mongoose";
import Int32 from "mongoose-int32";

Int32.loadType(mongoose);

export const userSchema = new mongoose.Schema({
  name: String,
  hasProfile: Boolean,
  responses: {
    age: Int32,
    association: Int32,
    color: String,
    culture: Int32,
    diet: String,
    food: Int32,
    gender: Int32,
    hair: Int32,
    height: Int32,
    interest: Int32,
    media: String,
    money: Int32,
    nature: String,
    personality: Int32,
    progress: String,
    religion: String,
    time: Int32,
  },
  circleData: {
    gameId: String,
    degree: Int32,
    slice: Int32,
    radius: Int32,
    radian: Int32,
    hue: Int32,
    lightness: Int32,
    saturation: Int32,
    xCartesian: Int32,
    yCartesian: Int32,
    designThickness: Int32,
    color: String,
    secondaryColor: String,
    isAnimated: Boolean,
    lineDesign: Object,
    design: String,
  },
  initialCircleData: {
    gameId: String,
    degree: Int32,
    slice: Int32,
    radius: Int32,
    radian: Int32,
    hue: Int32,
    lightness: Int32,
    saturation: Int32,
    xCartesian: Int32,
    yCartesian: Int32,
    designThickness: Int32,
    color: String,
    secondaryColor: String,
    isAnimated: Boolean,
    lineDesign: Object,
    design: String,
  },
  history: [
    {
      gameId: mongoose.Schema.Types.ObjectId,
      circles: [mongoose.Schema.Types.ObjectId],
    },
  ],
  timestamp: Date,
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.history;
  delete userObject.__v;

  return userObject;
};

export const User = mongoose.model("User", userSchema);
