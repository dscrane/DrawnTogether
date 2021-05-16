import mongoose from "mongoose";

export const circleSchema = new mongoose.Schema({
  playerId: String,
  gameId: String,
  degree: Number,
  slice: Number,
  radius: Number,
  radian: Number,
  hue: Number,
  lightness: Number,
  saturation: Number,
  xCartesian: Number,
  yCartesian: Number,
  designThickness: Number,
  color: String,
  secondaryColor: String,
  isAnimated: Boolean,
});

export const Circle = mongoose.model("Circle", circleSchema);
