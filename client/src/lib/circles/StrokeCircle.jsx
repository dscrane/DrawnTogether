/* IMPORTS */
import React from "react";
import {
  createLinearPath,
  createRadialGradient,
  createPathAndAnimation,
  createAnimationPath,
  createSecondaryGradient,
} from "../../utils";
/* ------ */

export const StrokeCircle = ({ id, playerCircle, centerPoint }) => {
  const innerRadius = playerCircle.radius - 0.5 * playerCircle.designThickness;
  const outerRadius = playerCircle.radius;
  const { innerPath, outerPath, animation } = createPathAndAnimation(playerCircle, id, innerRadius, outerRadius);

  return (
    <>
      <defs>
        {createRadialGradient(id, centerPoint, playerCircle.hue, playerCircle.saturation, playerCircle.lightness)}
        {createLinearPath(id, playerCircle.linearDPath, playerCircle.lineDesign)}
        {createAnimationPath(id, playerCircle.animationDPath)}
        {createSecondaryGradient(
          id,
          playerCircle.secondaryColor,
          playerCircle.design,
          playerCircle.designThickness,
          playerCircle.radius
        )}
      </defs>
      {playerCircle.lineDesign ? <use href={`#linearPath${id}`} /> : null}
      <g id={`circle_${id}`}>
        <path key={`circle_${id}_inner`} className="circle__inner" d={innerPath} fill={`url(#radialGradient${id})`} />
        <path
          key={`circle_${id}_outer`}
          className="circle__stroke"
          d={outerPath}
          fill="none"
          stroke={`url(#secondaryRadialGradient${id})`}
          strokeWidth={playerCircle.designThickness}
        />

        {animation}
      </g>
    </>
  );
};
