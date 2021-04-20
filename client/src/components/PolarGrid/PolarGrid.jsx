import React from "react";

const PolarGrid = ({ grid, view }) => {
  const svgRadius = Math.round(view.width / 2) * 0.99;
  const ringSpacing = svgRadius / 50;
  const createThinRings = () => {
    const rings = [];
    let i = ringSpacing;
    while (i < svgRadius) {
      rings.push(<circle fill="none" style={{ stroke: "rgba(170,177,133,.35)" }} r={i} cy={grid.cy} cx={grid.cx} />);
      i += ringSpacing;
    }
    return rings;
  };
  const createThickRings = () => {
    const rings = [];
    let i = ringSpacing * 10;
    while (i < svgRadius + ringSpacing) {
      rings.push(
        <circle
          key={`circle_${i}`}
          fill="none"
          style={{ stroke: "#9DC88D", opacity: "50%" }}
          r={i}
          cy={grid.cy}
          cx={grid.cx}
          strokeWidth="1.5"
        />
      );
      i += ringSpacing * 10;
    }
    return rings;
  };
  const createFullBlueLines = () => {
    const fullLines = [];
    for (let i = 0; i < 360; i += 30) {
      const theta = i * (Math.PI / 180);
      fullLines.push(
        <line
          key={`fullBlue_${i}`}
          strokeWidth="1.5"
          style={{ stroke: "#9DC88D", opacity: "50%" }}
          x1={grid.cx}
          y1={grid.cy}
          x2={grid.cx + svgRadius * -Math.cos(theta)}
          y2={grid.cy + svgRadius * Math.sin(theta)}
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
          key={`longBlue_${i}`}
          strokeWidth="1"
          style={{ stroke: "rgba(170,177,133,.35)" }}
          x1={grid.cx + ringSpacing * 10 * -Math.cos(theta)}
          y1={grid.cy + ringSpacing * 10 * Math.sin(theta)}
          x2={grid.cx + svgRadius * -Math.cos(theta)}
          y2={grid.cy + svgRadius * Math.sin(theta)}
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
          key={`shortBlue_${i}`}
          strokeWidth="1"
          style={{ stroke: "rgba(170,177,133,.35)" }}
          x1={grid.cx + ringSpacing * 25 * -Math.cos(theta)}
          y1={grid.cy + ringSpacing * 25 * Math.sin(theta)}
          x2={grid.cx + svgRadius * -Math.cos(theta)}
          y2={grid.cy + svgRadius * Math.sin(theta)}
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
          key={`longWhite_${i}`}
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
          key={`shortWhite_${i}`}
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
      {createThinRings()}
      {createThickRings()}
    </>
  );
};

export default PolarGrid;
