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

const CircleLayer = ({ id, type, design, radius, fill, stroke, strokeWidth, playerCircle }) => {
  let { opacity, isAnimated, xCartesian, yCartesian } = playerCircle;
  return (
    <circle
      key={`circle_${id}${type}`}
      className={`circle circle__${design} ${opacity ? "faded_" + opacity : null}`}
      cx={isAnimated ? null : xCartesian}
      cy={isAnimated ? null : yCartesian}
      r={radius}
      fill={fill || "none"}
      stroke={stroke || "none"}
      strokeWidth={strokeWidth || "none"}
    />
  );
};

export const LayeredCircle = ({ id, playerCircle }) => {
  let { design, designThickness, radius, opacity } = playerCircle;
  let topRadius, bottomRadius;

  // Use correct radius sizing for each circle design type
  if (design === "dot") {
    topRadius = radius;
    bottomRadius = designThickness;
  } else if (design === "stroke") {
    topRadius = radius - 0.5 * designThickness;
    bottomRadius = radius;
  } else if (design === "ring") {
    topRadius = radius - 2 * designThickness;
    bottomRadius = radius - 0.5 * designThickness;
  }

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
      {playerCircle.lineDesign ? <use href={`#linearPath${id}`} style={{ opacity: opacity / 100 }} /> : null}
      <g id={`circle_${id}`}>
        <CircleLayer
          id={id}
          type="_inner"
          design={design}
          radius={topRadius}
          fill={`url(#radialGradient${id})`}
          playerCircle={playerCircle}
        />
        <CircleLayer
          id={id}
          type="_inner"
          design={design}
          radius={bottomRadius}
          fill={design === "dot" ? `url(#secondaryRadialGradient${id})` : "none"}
          stroke={design === "dot" ? "none" : `url(#secondaryRadialGradient${id})`}
          strokeWidth={design === "dot" ? "none" : designThickness}
          playerCircle={playerCircle}
        />
        {playerCircle.isAnimated ? (
          <animateMotion dur="10s" repeatCount="indefinite">
            <mpath href={playerCircle.animationDPath ? `#animationPath${id}` : `#linearPath${id}`} />
          </animateMotion>
        ) : null}
      </g>
    </>
  );
};
