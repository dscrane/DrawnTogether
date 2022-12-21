import mongoose from "mongoose";
import Int32 from "mongoose-int32";

Int32.loadType(mongoose);

export const userSchema = new mongoose.Schema({
  hasProfile: Boolean,
  mock: Boolean,
  responses: {
    name: String,
    age: Int32,
    association: Int32,
    color: String,
    culture: Int32,
    diet: String,
    food: Int32,
    productivity: Int32,
    hair: Int32,
    height: Int32,
    curiosity: Int32,
    media: String,
    money: Int32,
    nature: String,
    personality: Int32,
    progress: String,
    religion: String,
    leaning: Int32,
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

userSchema.methods.currentFormData = function (currentForm) {
  const formResponses = [
    null,
    ["name", "association"],
    ["height", "curiosity", "hair", "age", "diet"],
    ["personality", "leaning", "productivity"],
    ["money", "food"],
    ["nature", "media", "progress"],
    ["religion", "culture"],
    ["color"],
  ];
  const user = this;
  const userObject = user.toObject();

  let currentFormData = {};
  formResponses[currentForm].forEach(
    (responseKey) =>
      (currentFormData[responseKey] = userObject.responses[responseKey])
  );
  return currentFormData;
};

export const User = mongoose.model("User", userSchema);
