import React, { useEffect, useState } from "react";
import { rerenderCircles } from "../../utils";

const CircleDisplay = ({ session, players }) => {
  const [circleDisplay, setCircleDisplay] = useState(null);
  useEffect(() => {
    setCircleDisplay(rerenderCircles(players, session.currentPlayer));
  }, [session.currentPlayer]);

  return <>{circleDisplay}</>;
};

export default CircleDisplay;
