import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { rerenderCircles } from "../../utils";

const CircleDisplay = ({ session, players, circles }) => {
  return <>{rerenderCircles(players, session.currentPlayer)}</>;
};

const mapStateToProps = ({ gameState }) => {
  return {
    circles: gameState.circles,
  };
};

export default connect(mapStateToProps)(CircleDisplay);
