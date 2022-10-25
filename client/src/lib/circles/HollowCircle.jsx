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

export const HollowCircle = ({ id, playerCircle }) => {
  const { path, animation } = createPathAndAnimation(playerCircle, id);
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
      {playerCircle.lineDesign ? <use href={`#linearPath${id}`} /> : null}
      <path
        key={`circle_${id}`}
        id={`circle_${id}`}
        className={`circle__outer ${playerCircle.opacity ? "faded_" + playerCircle.opacity : null}`}
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
