/* IMPORTS */
import React from "react";
import { circlePathTemplate } from "../../utils";
/* ------ */

export const FinalCircle = ({ centerPoint, width, gameId }) => {
  const path = circlePathTemplate(centerPoint.x, centerPoint.y, ((width * 0.99) / 2 / 50) * 15);
  return (
    <>
      <defs>
        <radialGradient id="radialGradientFinal">
          <stop offset="20%" stopColor="#b8b8cc" stopOpacity={1} />
          <stop offset="95%" stopColor="hsl(45, 4%, 30%)" stopOpacity={1} />
        </radialGradient>
      </defs>
      <path
        key={`final_circle_${gameId}`}
        id={`final_circle_${gameId}`}
        d={path}
        style={{
          fill: `url(#radialGradientFinal)`,
          opacity: 0.25,
        }}
      />
    </>
  );
};
