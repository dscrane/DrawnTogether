/* IMPORTS */
import React from "react";
import { createSVGDefs } from "../../utils";
import { FinalAnimation } from "../FinalAnimation";
import { CircleLayer } from "./LayeredCircle";
/* ------ */

export const BasicCircle = ({ id, playerCircle, isInit, currentForm }) => {
  let { design, opacity, radius, designThickness, originalData } = playerCircle;
  const hasDesign = design === "hollow";
  const init = isInit ? "__init" : "";

  return (
    <>
      {createSVGDefs(id, playerCircle, hasDesign, isInit, currentForm)}
      {playerCircle.lineDesign ? <use href={`#linearPath${id}`} style={{ opacity: opacity / 100 }} /> : null}
      <CircleLayer
        id={id}
        design={hasDesign ? "hollow" : isInit ? "init" : "default"}
        radius={originalData ? originalData.radius : radius}
        fill={hasDesign ? "none" : `url(#radialGradient${id}${init})`}
        stroke={hasDesign ? `url(#secondaryRadialGradient${id})` : "none"}
        strokeWidth={hasDesign ? designThickness : "none"}
        playerCircle={playerCircle}
      >
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
      </CircleLayer>
    </>
  );
};
