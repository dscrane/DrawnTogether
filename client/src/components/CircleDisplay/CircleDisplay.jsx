import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { rerenderCircles } from "../../utils";

const CircleDisplay = ({ session, players, circles }) => {
  const [circleDisplay, setCircleDisplay] = useState(null);
  useEffect(() => {
    setCircleDisplay(rerenderCircles(players, session.currentPlayer));
  }, [session.currentPlayer]);

  return <>{circleDisplay}</>;
};

const mapStateToProps = ({ gameState }) => {
  return {
    circles: gameState.circles,
  };
};

export default connect(mapStateToProps)(CircleDisplay);
