/* IMPORTS */
import React from "react";
import { createLinearPath, createRadialGradient, createPathAndAnimation } from "../../utils";
/* ------ */

export const HollowCircle = ({ id, playerCircle, centerPoint }) => {
  const { path, animation } = createPathAndAnimation(playerCircle, id);
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
      <path
        id={`circle_${id}`}
        key={`circle_${id}`}
        d={path}
        strokeWidth={playerCircle.designThickness}
        stroke={playerCircle.color}
        fill="none"
      >
        {animation}
      </path>
    </>
  );
};
