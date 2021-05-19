import React from "react";


const CircleDisplay = ({ currentForm, playerCircles, resizeRatio, resizeCircles }) => {

  // const circles = resizePlayerCircles(playerCircles, resizeRatio) ;

  return currentForm > 2 ? playerCircles.map((circle) => <>{circle}</>) : <></>;
};

export default CircleDisplay;
