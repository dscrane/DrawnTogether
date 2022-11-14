import React from "react";
import "./polarGrid.css";

const PolarGrid = ({ path, displayGrid }) => {
  return (
    <>
      <path className={`polar-grid ${displayGrid ? "" : "polar-grid__transparent"}`} d={path} />
    </>
  );
};

export default PolarGrid;
