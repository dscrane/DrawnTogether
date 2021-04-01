/* IMPORTS */
import React from "react";
import { createLinearPath, createRadialGradient } from "../utils/circleHelpers";
/* ------ */

export const DefaultCircle = ({ id, playerCircle, centerPoint }) => {
  return (
    <>
      <defs>
        {createRadialGradient(id, centerPoint, playerCircle.hue, playerCircle.saturation, playerCircle.lightness)}
        {createLinearPath(id, centerPoint, playerCircle.xCartesian, playerCircle.yCartesian, playerCircle.radius)}
      </defs>
      <circle
        id={`circle_${id}`}
        key={`circle_${id}`}
        cx={0}
        cy={0}
        r={playerCircle.radius}
        style={{
          fill: `url(#radialGradient${id})`,
          opacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeLinecap: "round",
        }}
      >
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href={`#linearPath${id}`} />
        </animateMotion>
      </circle>
    </>
  );
};
