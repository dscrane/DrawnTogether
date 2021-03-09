import React from "react";
import * as circleUtils from "../../utils/circleUtilities";

const CircleDisplay = ({ game, players }) => {
  return <>{game.currentForm >= 3 && game.displayCircles ? circleUtils.updatePlayerCircles(players) : null}</>;
};

export default CircleDisplay;
