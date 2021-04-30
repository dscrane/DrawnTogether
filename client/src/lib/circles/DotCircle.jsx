/* IMPORTS */
import React from "react";
import { createLinearPath, createRadialGradient, createPathAndAnimation } from "../../utils";
/* ------ */

export const DotCircle = ({ id, playerCircle, centerPoint }) => {
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
        style={{
          fill: playerCircle.secondaryColor,
          opacity: 1,
          fillRule: "evenodd",
          stroke: `url(#radialGradient${id})`,
          strokeWidth: playerCircle.designThickness,
        }}
      >
        {animation}
      </path>
    </>
  );
};
