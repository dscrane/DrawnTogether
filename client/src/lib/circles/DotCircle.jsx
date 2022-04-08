/* IMPORTS */
import React from "react";
import {createLinearPath, createRadialGradient, createPathAndAnimation, createAnimationPath} from "../../utils";
/* ------ */

export const DotCircle = ({ id, playerCircle, centerPoint }) => {
  const { path, animation } = createPathAndAnimation(playerCircle, id);
  return (
    <>
      <defs>
        {createRadialGradient(id, centerPoint, playerCircle.hue, playerCircle.saturation, playerCircle.lightness)}
        {createLinearPath(id, playerCircle.linearDPath, playerCircle.lineDesign)}
        {createAnimationPath(id, playerCircle.animationDPath)}

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
          stroke:  `url(#radialGradient${id})`,
          strokeWidth: playerCircle.radius - playerCircle.designThickness,
        }}
      >
        {animation}
      </path>
    </>
  );
};
