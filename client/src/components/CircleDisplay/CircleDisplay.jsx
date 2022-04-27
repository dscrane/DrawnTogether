import React from "react";
import { createCircleDesign, resizeAllCircles } from "../../utils";

const CircleDisplay = ({ currentForm, playerCircles, centerPoint, resizeRatio, resizeCircles }) => {
  // let circles;
  // if (resizeCircles) {
  //   circles = resizeAllCircles(playerCircles, resizeRatio);
  // } else {
  //   circles = playerCircles;
  // }

  return currentForm > 2 ? playerCircles.map((circle) => circle) : <></>;
};

export default CircleDisplay;
