/* IMPORTS */
import React from "react";
import { createLinearPath, createRadialGradient, createPathAndAnimation, createAnimationPath } from "../../utils";
/* ------ */

export const DotCircle = ({ id, playerCircle, centerPoint }) => {
  const innerRadius = playerCircle.radius - playerCircle.designThickness;
  const outerRadius = playerCircle.radius;
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
          key={`circle_${id}_outer`}
          className="circle circle__inner"
          d={outerPath}
          fill={`url(#radialGradient${id})`}
        />
        <path
          key={`circle_${id}_inner`}
          className=" circle circle__over"
          d={innerPath}
          fill={playerCircle.secondaryColor}
        />
        {animation}
      </g>
    </>
  );
};
