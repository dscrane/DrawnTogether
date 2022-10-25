/* IMPORTS */
import React from "react";
import { createLinearPath, createRadialGradient, createPathAndAnimation, createAnimationPath } from "../../utils";
/* ------ */

export const DefaultCircle = ({ id, playerCircle, isInit, currentForm }) => {
  const { path, animation } = createPathAndAnimation(playerCircle, id);
  const init = isInit ? "_init" : "";
  return (
    <>
      <defs>
        {createRadialGradient(
          id,
          playerCircle.hue,
          playerCircle.saturation,
          playerCircle.lightness,
          isInit,
          currentForm
        )}
        {!isInit ? createLinearPath(id, playerCircle.linearDPath, null) : null}
        {createAnimationPath(id, playerCircle.animationDPath)}
      </defs>
      <path
        key={`circle_${id}${init}`}
        id={`circle_${id}${init}`}
        className={`circle circle__default circle_${init} ${
          playerCircle.opacity ? "faded_" + playerCircle.opacity : null
        }`}
        d={path}
        style={{
          fill: `url(#radialGradient${id}${isInit ? "_init" : ""})`,
        }}
      >
        {animation}
      </path>
    </>
  );
};
