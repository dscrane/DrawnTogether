import React, { useEffect, useState } from "react";
import * as circleUtils from "../../utils/circleUtilities";

const CircleDisplay = ({ session, players }) => {
  const [circleDisplay, setCircleDisplay] = useState(null);
  useEffect(() => {
    setCircleDisplay(circleUtils.updatePlayerCircles(players, session.currentForm));
  }, [session.currentForm]);

  return <>{circleDisplay}</>;
};

export default CircleDisplay;
