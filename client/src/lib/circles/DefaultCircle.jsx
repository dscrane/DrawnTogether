/* IMPORTS */
import React from "react";
import {createLinearPath, createRadialGradient, createPathAndAnimation, createAnimationPath} from "../../utils";
/* ------ */

export const DefaultCircle = ({ id, playerCircle, centerPoint, isInit }) => {
  const { path, animation } = createPathAndAnimation(playerCircle, id);

  return (
    <>
      <defs>
        {createRadialGradient(id, centerPoint, playerCircle.hue, playerCircle.saturation, playerCircle.lightness, isInit)}
        {createLinearPath(id, playerCircle.linearDPath, null)}
        {createAnimationPath(id, playerCircle.animationDPath)}
      </defs>
      <path
        id={`circle_${id}${isInit ? "_init" : ""}`}
        key={`circle_${id}${isInit ? "_init" : ""}`}
        d={path}
        style={{
          fill: `url(#radialGradient${id}${isInit ? "_init" : ""})`,
          opacity: `${isInit ? 0.2 : 1}`,
          fillRule: "evenodd",
          stroke: "none",
          strokeLinecap: "round",
        }}
      >
        {animation}
      </path>
    </>
  );
};
