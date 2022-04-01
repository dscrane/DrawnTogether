import React from "react";
import "./polarGrid.css";
// TODO move the calculations of the grid to the server and only render the path from this component

const PolarGrid = ({ path }) => {
  return <path className="polarGrid" d={path} />;
};

export default PolarGrid;
