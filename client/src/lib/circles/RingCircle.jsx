/* IMPORTS */
import React from "react";
import { createLinearPath, createRadialGradient, circlePathTemplate } from "../../utils";
/* ------ */

export const RingCircle = ({ id, playerCircle, centerPoint }) => {
  let animation, innerPath, outerPath;
  const innerRadius = playerCircle.radius - 2 * playerCircle.designThickness;
  const outerRadius = playerCircle.radius - 0.5 * playerCircle.designThickness;
  if (playerCircle.isAnimated) {
    animation = (
      <animateMotion dur="10s" repeatCount="indefinite">
        <mpath href={`#linearPath${id}`} />
      </animateMotion>
    );
    innerPath = circlePathTemplate(0, 0, innerRadius);
    outerPath = circlePathTemplate(0, 0, outerRadius);
  } else {
    animation = null;
    innerPath = circlePathTemplate(playerCircle.xCartesian, playerCircle.yCartesian, innerRadius);
    outerPath = circlePathTemplate(playerCircle.xCartesian, playerCircle.yCartesian, outerRadius);
  }

  return (
    <>
      <defs>
        {createRadialGradient(id, centerPoint, playerCircle.hue, playerCircle.saturation, playerCircle.lightness)}
        {createLinearPath(id, playerCircle.linearDPath, playerCircle.lineDesign)}
      </defs>
      {playerCircle.lineDesign ? <use href={`#linearPath${id}`} /> : null}
      <g id={`circle_${id}`}>
        <path
          key={`circle_${id}_inner`}
          d={innerPath}
          style={{
            fill: `url(#radialGradient${id})`,
            opacity: 1,
            fillRule: "evenodd",
            strokeLinecap: "round",
          }}
        />
        <path
          key={`circle_${id}_outer`}
          d={outerPath}
          strokeWidth={playerCircle.designThickness}
          stroke={playerCircle.secondaryColor}
          fill="none"
        />
        {animation}
      </g>
    </>
  );
};
