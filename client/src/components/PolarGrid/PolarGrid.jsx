import React from "react";
import "./polarGrid.css";

const PolarGrid = ({ grid, view }) => {
  // Get the radius from the view width
  const svgRadius = (view.width * 0.99) / 2;
  // Set the spacing of each ring
  const ringSpacing = svgRadius / 50;
  // Get the line starting x point
  const xStartPoint = (radian, theta) => parseFloat((grid.cx + ringSpacing * radian * -Math.cos(theta)).toFixed(4));
  // Get the line starting y point
  const yStartPoint = (radian, theta) => parseFloat((grid.cy + ringSpacing * radian * Math.sin(theta)).toFixed(4));
  // Get the line ending x point
  const xEndPoint = (theta) => parseFloat((grid.cx + svgRadius * -Math.cos(theta)).toFixed(4));
  // Get the line ending y point
  const yEndPoint = (theta) => parseFloat((grid.cy + ringSpacing * 50 * Math.sin(theta)).toFixed(4));
  // Template for the circle path string
  const circlePathTemplate = (cx, cy, r) => {
    return `M ${cx} ${cy} m -${r}, 0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 -${r * 2},0 `;
  };

  // Add a center circle for the whole grid
  let path = circlePathTemplate(grid.cx, grid.cy, 0.5 * ringSpacing);

  // Creates the rings of the polar grid
  const createRings = () => {
    let i = ringSpacing * 10;
    while (i < svgRadius + ringSpacing) {
      const radius = parseFloat(i.toFixed(4));
      path = path + circlePathTemplate(grid.cx, grid.cy, radius);
      i += ringSpacing * 10;
    }
  };
  // Create full lines at 30 degree increments
  const createFullLines = () => {
    for (let i = 0; i < 360; i += 30) {
      const theta = i * (Math.PI / 180);
      path =
        path + `M ${xStartPoint(0.5, theta)}, ${yStartPoint(0.5, theta)} L ${xEndPoint(theta)}, ${yEndPoint(theta)} `;
    }
  };
  const createLongLines = () => {
    for (let i = 0; i < 360; i += 10) {
      if (i % 30 === 0) {
        continue;
      }
      const theta = i * (Math.PI / 180);
      path = path + `M ${xStartPoint(5, theta)}, ${yStartPoint(5, theta)} L ${xEndPoint(theta)}, ${yEndPoint(theta)} `;
    }
  };
  const createMediumLines = () => {
    for (let i = 0; i < 360; i += 2) {
      if (i % 30 === 0 || i % 10 === 0) {
        continue;
      }
      const theta = i * (Math.PI / 180);
      path =
        path + `M ${xStartPoint(15, theta)}, ${yStartPoint(15, theta)} L ${xEndPoint(theta)}, ${yEndPoint(theta)} `;
    }
  };
  const createShortLines = () => {
    for (let i = 0; i < 360; i += 1) {
      if (i % 30 === 0 || i % 10 === 0 || i % 2 === 0) {
        continue;
      }
      const theta = i * (Math.PI / 180);
      path =
        path + `M ${xStartPoint(35, theta)}, ${yStartPoint(35, theta)} L ${xEndPoint(theta)}, ${yEndPoint(theta)} `;
    }
  };

  createRings();
  createLongLines();
  createMediumLines();
  createShortLines();
  createFullLines();

  return <path className="polarGrid" d={path} />;
};

export default PolarGrid;
