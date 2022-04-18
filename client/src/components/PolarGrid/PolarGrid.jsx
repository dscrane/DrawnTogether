import React from "react";
import "./polarGrid.css";

const PolarGrid = ({ path, partialPath, displayGrid }) => {
  return (
    <>
      <path className={`polar-grid ${displayGrid ? "" : "polar-grid__transparent"}`} d={path} />
      {partialPath ? <path className={`polar-grid`} d={partialPath} /> : null}
    </>
  );
};

export default PolarGrid;
