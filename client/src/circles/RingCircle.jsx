/* IMPORTS */
import React from "react";
import { createLinearPath, createRadialGradient } from "../utils/circleHelpers";
/* ------ */

export const RingCircle = ({ id, playerCircle, centerPoint }) => {
  const animation = (
    <animateMotion dur="10s" repeatCount="indefinite">
      <mpath href={`#linearPath${id}`} />
    </animateMotion>
  );

  return (
    <>
      <defs>
        {createRadialGradient(id, centerPoint, playerCircle.hue, playerCircle.saturation, playerCircle.lightness)}
        {createLinearPath(id, centerPoint, playerCircle.xCartesian, playerCircle.yCartesian, playerCircle.radius)}
      </defs>
      <g id={`circle_${id}`}>
        <circle
          key={`circle_${id}_inner`}
          cx={playerCircle.isAnimated ? 0 : playerCircle.xCartesian}
          cy={playerCircle.isAnimated ? 0 : playerCircle.yCartesian}
          r={playerCircle.radius - 2 * playerCircle.designThickness}
          style={{
            fill: `url(#radialGradient${id})`,
            opacity: 1,
            fillRule: "evenodd",
            strokeLinecap: "round",
          }}
        />
        <circle
          key={`circle_${id}_outer`}
          cx={playerCircle.isAnimated ? 0 : playerCircle.xCartesian}
          cy={playerCircle.isAnimated ? 0 : playerCircle.yCartesian}
          r={playerCircle.radius - 0.5 * playerCircle.designThickness}
          strokeWidth={playerCircle.designThickness}
          stroke={playerCircle.secondaryColor}
          fill="none"
        />
        {playerCircle.isAnimated ? animation : null}
      </g>
    </>
  );
};
