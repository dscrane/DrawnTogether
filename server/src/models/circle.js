import { Schema, model } from "mongoose";

export const circleSchema = new Schema({
  _id: Schema.Types.ObjectId,
  playerID: Schema.Types.ObjectId,
  gameID: Schema.Types.ObjectId,
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
  isAnimated: Boolean
})

export const Circle = model("Circle", circleSchema);