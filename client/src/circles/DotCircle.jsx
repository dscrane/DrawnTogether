/* IMPORTS */
import React from "react";
import { createLinearPath, createRadialGradient } from "../utils/circleHelpers";
/* ------ */

export const DotCircle = ({ id, playerCircle, centerPoint }) => {
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
      <circle
        id={`circle_${id}`}
        key={`circle_${id}`}
        cx={playerCircle.isAnimated ? 0 : playerCircle.xCartesian}
        cy={playerCircle.isAnimated ? 0 : playerCircle.yCartesian}
        r={playerCircle.radius - 0.5 * playerCircle.designThickness}
        style={{
          fill: playerCircle.secondaryColor,
          opacity: 1,
          fillRule: "evenodd",
          stroke: `url(#radialGradient${id})`,
          strokeWidth: playerCircle.designThickness,
        }}
      >
        {playerCircle.isAnimated ? animation : null}
      </circle>
    </>
  );
};
