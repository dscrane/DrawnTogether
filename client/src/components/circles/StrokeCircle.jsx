/* IMPORTS */
import React from "react";
import { createLinearPath, createRadialGradient } from "../../utils/circleHelpers";
/* ------ */

export const StrokeCircle = ({ id, playerCircle, centerPoint }) => {
  const animation = playerCircle.isAnimated ? (
    <animateMotion dur="10s" repeatCount="indefinite">
      <mpath href={`#linearPath${id}`} />
    </animateMotion>
  ) : null;
  return (
    <>
      <defs>
        {createRadialGradient(id, centerPoint, playerCircle.hue, playerCircle.saturation, playerCircle.lightness)}
        {createLinearPath(
          id,
          centerPoint,
          playerCircle.xCartesian,
          playerCircle.yCartesian,
          playerCircle.radius,
          playerCircle.lineDesign
        )}
      </defs>
      {playerCircle.lineDesign ? <use href={`#linearPath${id}`} /> : null}
      <circle
        id={`circle_${id}`}
        key={`circle_${id}`}
        cx={playerCircle.isAnimated ? 0 : playerCircle.xCartesian}
        cy={playerCircle.isAnimated ? 0 : playerCircle.yCartesian}
        r={playerCircle.radius - 0.5 * playerCircle.designThickness}
        strokeWidth={playerCircle.designThickness}
        stroke={playerCircle.secondaryColor}
        style={{
          fill: `url(#radialGradient${id})`,
          opacity: 1,
          fillRule: "evenodd",
          strokeLinecap: "round",
        }}
      >
        {animation}
      </circle>
    </>
  );
};
