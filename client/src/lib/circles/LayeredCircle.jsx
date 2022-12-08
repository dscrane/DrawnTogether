/* IMPORTS */
import React from "react";
import { createSVGDefs } from "../../utils";
import { FinalAnimation } from "../FinalAnimation";
/* ------ */

export const CircleLayer = ({ id, type, design, radius, fill, stroke, strokeWidth, playerCircle, children }) => {
  let { opacity, isAnimated, xCartesian, yCartesian } = playerCircle;

  return (
    <circle
      key={`circle_${id}${design}`}
      id={id}
      className={`circle circle__${design} ${opacity ? "faded_" + opacity : ""}`}
      cx={!isAnimated ? xCartesian : null}
      cy={!isAnimated ? yCartesian : null}
      r={radius}
      fill={fill || "none"}
      stroke={stroke || "none"}
      strokeWidth={strokeWidth || "none"}
    >
      {children}
    </circle>
  );
};

export const LayeredCircle = ({ id, playerCircle, currentForm }) => {
  let { design, radius, designThickness, opacity, originalData } = playerCircle;
  let topRadius, bottomRadius, originalTopRadius, originalBottomRadius;

  // Use correct radius sizing for each circle design type
  if (design === "dot") {
    topRadius = radius;
    bottomRadius = designThickness;
    originalTopRadius = originalData ? originalData.radius : null;
    originalBottomRadius = originalData ? originalData.designThickness : null;
  } else if (design === "stroke") {
    topRadius = radius - 0.5 * designThickness;
    bottomRadius = radius;
    originalTopRadius = originalData ? originalData.radius - 0.5 * originalData.designThickness : null;
    originalBottomRadius = originalData ? originalData.radius : null;
  } else if (design === "ring") {
    topRadius = radius - 2 * designThickness;
    bottomRadius = radius - 0.5 * designThickness;
    originalTopRadius = originalData ? originalData.radius - 2 * designThickness : null;
    originalBottomRadius = originalData ? originalData.radius - 0.5 * originalData.designThickness : null;
  }

  return (
    <>
      {createSVGDefs(id, playerCircle)}
      {playerCircle.lineDesign ? <use href={`#linearPath${id}`} style={{ opacity: opacity / 100 }} /> : null}
      <g id={`circle_${id}`}>
        <CircleLayer
          id={id}
          type="_inner"
          design={design}
          radius={topRadius}
          originalRadius={originalTopRadius}
          fill={`url(#radialGradient${id})`}
          playerCircle={playerCircle}
          currentForm={currentForm}
        />
        <CircleLayer
          id={id}
          type="_inner"
          design={design}
          radius={bottomRadius}
          originalRadius={originalBottomRadius}
          fill={design === "dot" ? `url(#secondaryRadialGradient${id})` : "none"}
          stroke={design === "dot" ? "none" : `url(#secondaryRadialGradient${id})`}
          strokeWidth={design === "dot" ? "none" : designThickness}
          playerCircle={playerCircle}
          currentForm={currentForm}
        />
        {playerCircle.isAnimated ? (
          <animateMotion dur="10s" repeatCount="indefinite">
            <mpath href={playerCircle.animationDPath ? `#animationPath${id}` : `#linearPath${id}`} />
          </animateMotion>
        ) : null}
        {currentForm === 9 && originalData ? (
          <FinalAnimation
            cxFrom={originalData.xCartesian}
            cxTo={playerCircle.xCartesian}
            cyFrom={originalData.yCartesian}
            cyTo={playerCircle.yCartesian}
            rFrom={originalData.radius}
            rTo={playerCircle.radius}
          />
        ) : null}
      </g>
    </>
  );
};
