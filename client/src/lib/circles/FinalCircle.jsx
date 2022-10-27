/* IMPORTS */
import React from "react";
import { circlePathTemplate } from "../../utils";
/* ------ */

export const FinalCircle = ({ centerPoint, width, gameId }) => {
  const path = circlePathTemplate(800, 350, ((width * 0.99) / 2 / 50) * 3);

  return (
    <>
      <defs>
        <radialGradient id="radialGradientFinal">
          <stop offset="0%" stopColor="hsl(240, 16%, 90%)" stopOpacity={1} />
          <stop offset="100%" stopColor="#0F273D" stopOpacity={0.95} />
        </radialGradient>
        <filter id="sofGlow" height="1500%" width="1500%" x="-500%" y="-500%">
          // inner most color
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken3" />
          <feGaussianBlur in="thicken3" stdDeviation="5" result="blurred3" />
          <feFlood floodColor="rgba(255,100,90,.25" result="glowColor3" />
          <feComposite in="glowColor3" in2="blurred3" operator="in" result="softGlow_colored3" />
          // second color
          <feMorphology operator="dilate" radius="30" in="SourceAlpha" result="thicken2" />
          <feGaussianBlur in="thicken2" stdDeviation="50" result="blurred2" />
          <feFlood floodColor="rgba(201,67,46,.95)" result="glowColor2" />
          <feComposite in="glowColor2" in2="blurred2" operator="in" result="softGlow_colored2" />
          // third color
          <feMorphology operator="dilate" radius="55" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="70" result="blurred" />
          <feFlood floodColor="rgba(0,186,255,.55)" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
          // fourth color
          <feMorphology operator="dilate" radius="65" in="SourceAlpha" result="thicken4" />
          <feGaussianBlur in="thicken4" stdDeviation="40" result="blurred4" />
          <feFlood floodColor="rgba(44,59,191,.55)" result="glowColor4" />
          <feComposite in="glowColor4" in2="blurred4" operator="in" result="softGlow_colored4" />
          // outermost color
          <feMorphology operator="dilate" radius="75" in="SourceAlpha" result="thicken5" />
          <feGaussianBlur in="thicken4" stdDeviation="40" result="blurred5" />
          <feFlood floodColor="#0F273D" result="glowColor5" />
          <feComposite in="glowColor5" in2="blurred5" operator="in" result="softGlow_colored5" />
          <feMerge>
            <feMergeNode in="softGlow_colored5" />
            <feMergeNode in="softGlow_colored4" />
            <feMergeNode in="softGlow_colored3" />
            <feMergeNode in="softGlow_colored2" />
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        key={`final_circle_${gameId}_glow`}
        id={`final_circle_${gameId}_glow`}
        d={path}
        filter="url(#sofGlow)"
        style={{
          fill: `#0F273D`,
        }}
      />
      <path
        key={`final_circle_${gameId}`}
        id={`final_circle_${gameId}`}
        d={path}
        style={{
          fill: `url(#radialGradientFinal)`,
          opacity: 0.75,
        }}
      />
    </>
  );
};
