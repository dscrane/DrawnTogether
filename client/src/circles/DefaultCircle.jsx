/* IMPORTS */
import React from "react";
import { createLinearPath, createRadialGradient } from "../utils/circleHelpers";
/* ------ */

export const DefaultCircle = ({ id, playerCircle, centerPoint, isInit }) => {
  const animation = !isInit ? (
    <animateMotion dur="10s" repeatCount="indefinite">
      <mpath href={`#linearPath${id}`} />
    </animateMotion>
  ) : null;
  return (
    <>
      <defs>
        {createRadialGradient(id, centerPoint, playerCircle.hue, playerCircle.saturation, playerCircle.lightness)}
        {createLinearPath(id, centerPoint, playerCircle.xCartesian, playerCircle.yCartesian, playerCircle.radius, null)}
      </defs>
      <circle
        id={`circle_${id}${isInit ? "_init" : ""}`}
        key={`circle_${id}${isInit ? "_init" : ""}`}
        cx={isInit ? playerCircle.xCartesian : 0}
        cy={isInit ? playerCircle.yCartesian : 0}
        r={playerCircle.radius}
        style={{
          fill: `url(#radialGradient${id})`,
          opacity: `${isInit ? 0.2 : 1}`,
          fillRule: "evenodd",
          stroke: "none",
          strokeLinecap: "round",
        }}
      >
        {animation}
      </circle>
    </>
  );
};
