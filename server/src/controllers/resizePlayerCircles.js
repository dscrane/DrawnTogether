import {
  convertToCartesian,
  createLinearDPath,
} from "../utils/circleUtils/circleHelpers.js";
import { log } from "../utils/appUtils/logs.js";

export const resizePlayerCircles = (
  res,
  { circles, ratio, centerPoint },
  backgroundOpacity = null,
  lines = true,
  isBackground
) => {
  let resizedCircles = [];
  for (let circleData of circles) {
    const circle = circleData._doc || circleData;
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
      linearDPath: lines ? newLinearDPath : null,
      radius: newRadius,
      designThickness: circle.designThickness * ratio,
      lineDesign: { ...circle.lineDesign, strokeWidth: `${3 * ratio}px` },
      opacity: backgroundOpacity,
      originalData: !isBackground
        ? {
            radius: circle.radius,
            xCartesian: circle.xCartesian,
            yCartesian: circle.yCartesian,
            designThickness: circle.designThickness,
          }
        : null,
    });
  }

  // console.log(resizedCircles);
  log.green("Resizing circles successful");

  if (res) {
    res.send({ resizedCircles });
  } else {
    return resizedCircles;
  }
};
