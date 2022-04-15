/* IMPORTS */
import React from "react";
import {
  createLinearPath,
  createRadialGradient,
  circlePathTemplate,
  createAnimationPath,
  createPathAndAnimation,
} from "../../utils";
/* ------ */

export const RingCircle = ({ id, playerCircle, centerPoint }) => {
  const innerRadius = playerCircle.radius - 2 * playerCircle.designThickness;
  const outerRadius = playerCircle.radius - 0.5 * playerCircle.designThickness;
  const { innerPath, outerPath, animation } = createPathAndAnimation(playerCircle, id, innerRadius, outerRadius);

  return (
    <>
      <defs>
        {createRadialGradient(id, centerPoint, playerCircle.hue, playerCircle.saturation, playerCircle.lightness)}
        {createLinearPath(id, playerCircle.linearDPath, playerCircle.lineDesign)}
        {createAnimationPath(id, playerCircle.animationDPath)}
      </defs>
      {playerCircle.lineDesign ? <use href={`#linearPath${id}`} /> : null}
      <g id={`circle_${id}`}>
        <path
          key={`circle_${id}_inner`}
          className="circle circle__inner"
          d={innerPath}
          fill={`url(#radialGradient${id})`}
        />
        <path
          key={`circle_${id}_outer`}
          className="circle circle__outer"
          d={outerPath}
          fill="none"
          stroke={playerCircle.secondaryColor}
          strokeWidth={playerCircle.designThickness}
        />
        {animation}
      </g>
    </>
  );
};
