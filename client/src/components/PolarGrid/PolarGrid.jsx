import React from "react";
import "./polarGrid.css";

const PolarGrid = ({ path, inProgress }) => {
  return <path className={`polar-grid ${inProgress ? "" : "polar-grid__transparent"}`} d={path} />;
};

export default PolarGrid;
