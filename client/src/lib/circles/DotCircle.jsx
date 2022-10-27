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

export const DotCircle = ({ id, playerCircle }) => {
  const innerRadius = playerCircle.designThickness;
  const outerRadius = playerCircle.radius;
  const { innerPath, outerPath, animation } = createPathAndAnimation(playerCircle, id, innerRadius, outerRadius);
  return (
    <>
      <defs>
        {createRadialGradient(id, playerCircle.hue, playerCircle.saturation, playerCircle.lightness)}
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
      {playerCircle.lineDesign ? (
        <use href={`#linearPath${id}`} style={{ opacity: playerCircle.opacity / 100 }} />
      ) : null}
      <g id={`circle_${id}`}>
        <path
          key={`circle_${id}_outer`}
          className={`circle circle__inner ${playerCircle.opacity ? "faded_" + playerCircle.opacity : null}`}
          d={outerPath}
          fill={`url(#radialGradient${id})`}
        />
        <path
          key={`circle_${id}_inner`}
          className={`circle circle__over ${playerCircle.opacity ? "faded_" + playerCircle.opacity : null}`}
          d={innerPath}
          fill={`url(#secondaryRadialGradient${id})`}
        />
        {animation}
      </g>
    </>
  );
};
