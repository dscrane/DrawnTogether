/* IMPORTS */
import React from "react";
import { circlePathTemplate } from "../../utils";
/* ------ */

export const FinalCircle = ({ centerPoint, width, gameId }) => {
  const path = circlePathTemplate(centerPoint.x, centerPoint.y, ((width * 0.99) / 2 / 50) * 7);

  return (
    <>
      <defs>
        <radialGradient id="radialGradientFinal">
          <stop offset="10%" stopColor="hsl(230, 3%, 86%)" stopOpacity={1} />
          {/*<stop offset="33%" stopColor="hsl(40, 13%, 80%)" stopOpacity={0.75} />*/}
          <stop offset="100%" stopColor="black" stopOpacity={0.95} />
        </radialGradient>
        <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
          <feMorphology operator="dilate" radius="30" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="30" result="blurred" />
          <feFlood flood-color="rgba(0,186,255,.55)" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
          <feMorphology operator="dilate" radius="15" in="SourceAlpha" result="thicken2" />
          <feGaussianBlur in="thicken2" stdDeviation="30" result="blurred2" />
          <feFlood flood-color="rgba(255,0,255,.55)" result="glowColor2" />
          <feComposite in="glowColor2" in2="blurred2" operator="in" result="softGlow_colored2" />
          <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken3" />
          <feGaussianBlur in="thicken3" stdDeviation="4" result="blurred3" />
          <feFlood flood-color="rgba(255,255,255,.55" result="glowColor3" />
          <feComposite in="glowColor3" in2="blurred3" operator="in" result="softGlow_colored3" />
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="softGlow_colored2" />
            <feMergeNode in="softGlow_colored3" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        key={`final_circle_${gameId}`}
        id={`final_circle_${gameId}`}
        d={path}
        filter="url(#sofGlow)"
        style={{
          fill: `url(#radialGradientFinal)`,
        }}
      />
    </>
  );
};
