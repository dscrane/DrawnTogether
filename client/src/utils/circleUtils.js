import React from "react";

function polarGrid(display) {
  const gridLines = [];
  gridLines.push(
    <line
      key={"Axis: -X, Y"}
      x1={display.cx - display.cross}
      y1={display.cy - display.cross}
      x2={display.cx + display.cross}
      y2={display.cy + display.cross}
      stroke="black"
      strokeWidth={0.5}
    />,
    <line
      key={"Axis: X, -Y"}
      x1={display.cx + display.cross}
      y1={display.cy - display.cross}
      x2={display.cx - display.cross}
      y2={display.cy + display.cross}
      stroke="black"
      strokeWidth={0.5}
    />,
    <line
      key={"Axis: X"}
      x1={display.cx - display.axis}
      y1={display.cy}
      x2={display.cx + display.axis}
      y2={display.cy}
      stroke="black"
      strokeWidth={0.5}
    />,
    <line
      key={"Axis: Y"}
      x1={display.cx}
      y1={display.cy - display.axis}
      x2={display.cx}
      y2={display.cy + display.axis}
      stroke="black"
      strokeWidth={0.5}
    />
  );

  return gridLines;
}

function setBlueRings(step) {
  const blueRings = [];
  let y = step / 2;
  for (let i = 0; i < 15; i++) {
    y = y + step;

    blueRings.push(y);
  }
  return blueRings;
}

function bluePolarRings(display) {
  const blueRings = setBlueRings(display.step);
  const blueDisplay = [];
  blueRings.forEach((r, i) => {
    blueDisplay.push(
      <circle
        key={`Blue Ring: ${i}`}
        cx={display.cx}
        cy={display.cy}
        r={r}
        stroke="rgba(65,105,225)"
        strokeWidth={1}
        fill="none"
        shapeRendering="geometricPrecision"
      />
    );
  });

  return blueDisplay;
}

function setDarkRings(step) {
  const darkRings = [2];
  let point = 0;
  for (let i = 0; i < 16; i++) {
    point = point + step;

    darkRings.push(point);
  }
  return darkRings;
}

function darkPolarRings(display) {
  const darkRings = setDarkRings(display.step).reverse();
  const darkDisplay = [];
  darkRings.forEach((r, i) => {
    if (r === 2) {
      darkDisplay.push(
        <circle
          key={`Dark Ring: ${i}`}
          cx={display.cx}
          cy={display.cy}
          r={r}
          fill="black"
          shapeRendering="geometricPrecision"
        />
      );
    } else if (r < 400) {
      darkDisplay.push(
        <circle
          key={`Dark Ring: ${i}`}
          cx={display.cx}
          cy={display.cy}
          r={r}
          stroke="black"
          strokeWidth={1}
          fill="none"
          shapeRendering="geometricPrecision"
        />
      );
    } else {
      darkDisplay.push(
        <circle
          key={`Dark Ring: ${i}`}
          cx={display.cx}
          cy={display.cy}
          r={r}
          stroke="black"
          strokeWidth={1}
          fill="rgba(187, 192, 156, 0.52)"
          shapeRendering="geometricPrecision"
        />
      );
    }
  });

  return darkDisplay;
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
          text-anchor="start"
          className="playerNameDisplay"
        >
          {`${name}`}
        </text>
      );
    });
    return (
      <>
        <text x="80%" y="4%" text-anchor="start" className="playerTitle">
          Players:
        </text>
        {namesDisplay}
      </>
    );
  }
}

export { bluePolarRings, darkPolarRings, polarGrid };
