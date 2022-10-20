import {
  convertToCartesian,
  createLinearDPath,
} from "../utils/circleHelpers.js";
import { log } from "../utils/logs.js";

export const resizePlayerCircles = (res, { circles, ratio, centerPoint }) => {
  let resizedCircles = [];
  for (let circle of circles) {
    let newCartesian = convertToCartesian(
      centerPoint,
      circle.radian,
      circle.degree
    );
    let newRadius = Math.round(circle.radius * ratio);
    let newLinearDPath = createLinearDPath(
      centerPoint,
      newCartesian.xCartesian,
      newCartesian.yCartesian,
      circle.radian,
      circle.degree,
      false
    );
    resizedCircles.push({
      ...circle,
      ...newCartesian,
      linearDPath: newLinearDPath,
      radius: newRadius,
    });
  }
  log.green("Resizing circles successful");

  res.send({ resizedCircles });
};
