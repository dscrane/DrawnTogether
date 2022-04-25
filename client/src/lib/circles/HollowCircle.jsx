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

export const HollowCircle = ({ id, playerCircle, centerPoint }) => {
  const { path, animation } = createPathAndAnimation(playerCircle, id);
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
      <path
        key={`circle_${id}`}
        id={`circle_${id}`}
        className="circle__outer"
        d={path}
        fill="none"
        strokeWidth={playerCircle.designThickness}
        stroke={`url(#secondaryRadialGradient${id})`}
      >
        {animation}
      </path>
    </>
  );
};
