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

export const BasicCircle = ({ id, playerCircle, isInit, currentForm }) => {
  let { design, opacity, radius, designThickness, animationDPath, xCartesian, yCartesian, isAnimated } = playerCircle;
  const init = isInit ? "_init" : "";
  const hasDesign = design === "hollow";
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
        {createAnimationPath(id, animationDPath)}
        // if circle is not initialCircle display line from center
        {!isInit ? createLinearPath(id, playerCircle.linearDPath, playerCircle.lineDesign) : null}
        // if circle has a design create the secondary gradient
        {hasDesign
          ? createSecondaryGradient(
              id,
              playerCircle.secondaryColor,
              playerCircle.design,
              playerCircle.designThickness,
              playerCircle.radius
            )
          : null}
      </defs>
      {playerCircle.lineDesign ? <use href={`#linearPath${id}`} style={{ opacity: opacity / 100 }} /> : null}
      <circle
        key={`circle_${id}${init}`}
        id={`circle_${id}${init}`}
        className={`circle circle__${design} circle_${init} ${opacity ? "faded_" + opacity : null}`}
        cx={isAnimated ? null : xCartesian}
        cy={isAnimated ? null : yCartesian}
        r={radius}
        fill={hasDesign ? "none" : `url(#radialGradient${id}${isInit ? "_init" : ""})`}
        stroke={hasDesign ? `url(#secondaryRadialGradient${id})` : "none"}
        strokeWidth={hasDesign ? designThickness : "none"}
      >
        {playerCircle.isAnimated ? (
          <animateMotion dur="10s" repeatCount="indefinite">
            <mpath href={playerCircle.animationDPath ? `#animationPath${id}` : `#linearPath${id}`} />
          </animateMotion>
        ) : null}
      </circle>
    </>
  );
};
