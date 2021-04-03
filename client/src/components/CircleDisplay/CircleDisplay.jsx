import React, { useEffect, useState } from "react";
import * as circleUtils from "../../utils/circleUtilities";

const CircleDisplay = ({ game, players }) => {
  const [circleDisplay, setCircleDisplay] = useState(null);
  useEffect(() => {
    setCircleDisplay(circleUtils.updatePlayerCircles(players, game.currentForm));
  }, [game.currentForm]);

  return <>{circleDisplay}</>;
};

export default CircleDisplay;
