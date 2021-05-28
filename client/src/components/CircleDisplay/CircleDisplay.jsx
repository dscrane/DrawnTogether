import React from "react";
import { resizeAllCircles } from "../../utils";

const CircleDisplay = ({ currentForm, playerCircles, resizeRatio, resizeCircles }) => {

   let circles;
   if (resizeCircles) {
     circles = resizeAllCircles(playerCircles, resizeRatio) ;
   } else {
     circles = playerCircles
   }

  return currentForm > 2 ? circles.map((circle) => <>{circle}</>) : <></>;
};

export default CircleDisplay;
