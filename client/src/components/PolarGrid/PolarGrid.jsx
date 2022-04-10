import React from "react";
import "./polarGrid.css";
// TODO move the calculations of the grid to the server and only render the path from this component

const PolarGrid = ({ path, inProgress }) => {
  return <path className={`polar-grid ${inProgress ? "" : "polar-grid__transparent"}`} d={path} />;
};

export default PolarGrid;
