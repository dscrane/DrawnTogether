import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { rerenderCircles } from "../../utils";

const CircleDisplay = ({ circles, currentForm }) => {
  return currentForm > 2 ? circles.map((circle) => <>{circle}</>) : <></>;
};

const mapStateToProps = ({ gameState }) => {
  return {
    currentForm: gameState.currentForm,
    circles: gameState.circles,
  };
};

export default connect(mapStateToProps)(CircleDisplay);
