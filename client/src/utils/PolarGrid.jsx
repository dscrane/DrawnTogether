import React from "react";

export const PolarGrid = ({ grid, view }) => {
  const svgRadius = view.width / 2;
  const ringSpacing = Math.round(view.width / 100);
  console.info("%c[ringSpacing]: ", "color: yellow", ringSpacing);
  const createWhiteRings = () => {
    const rings = [];
    for (let i = ringSpacing; i < svgRadius; i += ringSpacing) {
      if (i % (ringSpacing * 5) === 0) {
        continue;
      }
      rings.push(
        <circle
          fill="none"
          style={{ stroke: "rgba(170,177,133,.35)" }}
          r={i}
          cy={grid.cy}
          cx={grid.cx}
        />
      );
    }
    return rings;
  };
  const createBlueRings = () => {
    let ring;
    let lightRing = false;
    const rings = [];
    let i;
    for (i = ringSpacing * 5; i < svgRadius; i += ringSpacing * 5) {
      if (!lightRing) {
        ring = (
          <circle
            fill="none"
            style={{ stroke: "rgb(98, 102, 74)" }}
            r={i}
            cy={grid.cy}
            cx={grid.cx}
            strokeWidth="1"
          />
        );
        lightRing = true;
      } else {
        ring = (
          <circle
            fill="none"
            style={{ stroke: "rgb(98, 102, 74)" }}
            r={i}
            cy={grid.cy}
            cx={grid.cx}
            strokeWidth="1.5"
          />
        );
        lightRing = false;
      }
      rings.push(ring);
    }
    return rings;
  };
  const createFullBlueLines = () => {
    const fullLines = [];
    for (let i = 0; i < 360; i += 30) {
      const theta = i * (Math.PI / 180);
      fullLines.push(
        <line
          strokeWidth="1.5"
          style={{ stroke: "rgb(98, 102, 74)" }}
          x1={grid.cx}
          y1={grid.cy}
          x2={grid.cx + ringSpacing * 50 * -Math.cos(theta)}
          y2={grid.cy + ringSpacing * 50 * Math.sin(theta)}
        />
      );
    }
    return fullLines;
  };
  const createLongBlueLines = () => {
    const longLines = [];
    for (let i = 0; i < 360; i += 10) {
      if (i % 30 === 0) {
        continue;
      }
      const theta = i * (Math.PI / 180);
      longLines.push(
        <line
          strokeWidth="1"
          style={{ stroke: "rgb(98, 102, 74)" }}
          x1={grid.cx + ringSpacing * 10 * -Math.cos(theta)}
          y1={grid.cy + ringSpacing * 10 * Math.sin(theta)}
          x2={grid.cx + ringSpacing * 50 * -Math.cos(theta)}
          y2={grid.cy + ringSpacing * 50 * Math.sin(theta)}
        />
      );
    }
    return longLines;
  };
  const createShortBlueLines = () => {
    const shortLines = [];
    for (let i = 0; i < 360; i += 5) {
      if (i % 10 === 0 || i % 5 === 0) {
        continue;
      }
      const theta = i * (Math.PI / 180);
      shortLines.push(
        <line
          strokeWidth="1"
          style={{ stroke: "rgb(98, 102, 74)" }}
          x1={grid.cx + ringSpacing * 25 * -Math.cos(theta)}
          y1={grid.cy + ringSpacing * 25 * Math.sin(theta)}
          x2={grid.cx + ringSpacing * 50 * -Math.cos(theta)}
          y2={grid.cy + ringSpacing * 50 * Math.sin(theta)}
        />
      );
    }
    return shortLines;
  };
  const createLongWhiteLines = () => {
    const longWhiteLines = [];
    for (let i = 0; i < 360; i += 2) {
      if (i % 30 === 0 || i % 10 === 0) {
        continue;
      }

      const theta = i * (Math.PI / 180);
      longWhiteLines.push(
        <line
          strokeWidth="1"
          style={{ stroke: "rgba(170,177,133,.35)" }}
          x1={grid.cx + ringSpacing * 15 * -Math.cos(theta)}
          y1={grid.cy + ringSpacing * 15 * Math.sin(theta)}
          x2={grid.cx + ringSpacing * 50 * -Math.cos(theta)}
          y2={grid.cy + ringSpacing * 50 * Math.sin(theta)}
        />
      );
    }
    return longWhiteLines;
  };
  const createShortWhiteLines = () => {
    const shortWhiteLines = [];

    for (let i = 0; i < 360; i += 1) {
      if (i % 30 === 0 || i % 10 === 0 || i % 2 === 0) {
        continue;
      }
      const theta = i * (Math.PI / 180);
      shortWhiteLines.push(
        <line
          strokeWidth="1"
          style={{ stroke: "rgba(170,177,133,.35)" }}
          x1={grid.cx + ringSpacing * 35 * -Math.cos(theta)}
          y1={grid.cy + ringSpacing * 35 * Math.sin(theta)}
          x2={grid.cx + ringSpacing * 50 * -Math.cos(theta)}
          y2={grid.cy + ringSpacing * 50 * Math.sin(theta)}
        />
      );
    }
    return shortWhiteLines;
  };

  return (
    <>
      {createFullBlueLines()}
      {createLongBlueLines()}
      {createShortBlueLines()}
      {createLongWhiteLines()}
      {createShortWhiteLines()}
      {createWhiteRings()}
      {createBlueRings()}
    </>
  );
};
