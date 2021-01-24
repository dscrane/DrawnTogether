import React from "react";
import { PolarGrid } from "./PolarGrid";
export function fixDPI(canvas) {
  let dpi = window.devicePixelRatio;
  let styleHeight = +getComputedStyle(canvas)
    .getPropertyValue("height")
    .slice(0, -2);
  let styleWidth = +getComputedStyle(canvas)
    .getPropertyValue("width")
    .slice(0, -2);

  canvas.setAttribute("height", styleHeight * dpi);
  canvas.setAttribute("width", styleWidth * dpi);
}

function polarGrid({ grid, view }) {
  return <PolarGrid grid={grid} view={view} />;
}

function interestText(interest) {
  return interest !== undefined ? (
    <>
      <text x="5%" y="4%" className="interestTitle">
        Interest:
      </text>
      <text
        x="5%"
        y="8%"
        className="interestText"
        lengthAdjust="spacingAndGlyphs"
      >
        {interest}
      </text>
    </>
  ) : null;
}

function playerNamesDisplay(playerNames) {
  const namesArray = Object.values(playerNames);
  const namesDisplay = [];
  if (namesArray.length !== 0) {
    namesArray.forEach((name, i) => {
      namesDisplay.push(
        <text
          x="81%"
          y={`${7 + 2.5 * i}%`}
          key={name}
          textAnchor="start"
          className="playerNameDisplay"
        >
          {`${name}`}
        </text>
      );
    });
    return (
      <>
        <text x="80%" y="4%" textAnchor="start" className="playerTitle">
          Players:
        </text>
        {namesDisplay}
      </>
    );
  }
}

export { polarGrid, interestText, playerNamesDisplay };
