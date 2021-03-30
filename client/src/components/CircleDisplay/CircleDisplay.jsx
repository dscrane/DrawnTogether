import React from "react";
import * as circleUtils from "../../utils/circleUtilities";

const CircleDisplay = ({ currentForm, updateCircles, players }) => {
  return <>{currentForm > 2 && updateCircles ? circleUtils.updatePlayerCircles(players, currentForm) : null}</>;
};

export default CircleDisplay;
