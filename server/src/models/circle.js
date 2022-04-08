import mongoose from "mongoose";

export const circleSchema = new mongoose.Schema({
  playerId: mongoose.Schema.Types.ObjectId,
  gameId: mongoose.Schema.Types.ObjectId,
  initial: Boolean,
  degree: Number,
  slice: Number,
  radius: Number,
  radian: Number,
  hue: Number,
  lightness: Number,
  saturation: Number,
  xCartesian: Number,
  yCartesian: Number,
  design: String,
  designThickness: Number,
  color: String,
  secondaryColor: String,
  isAnimated: Boolean,
  linearDPath: String,
  lineDesign: {
    strokeDasharray: String,
    strokeLinecap: String,
    stroke: String,
    strokeWidth: String,
  },
});

circleSchema.methods.toJson = function () {
  const circle = this;
  const circleObject = circle.toObject();

  delete circleObject.__v;

  return circleObject;
};

export const Circle = mongoose.model("Circle", circleSchema);
