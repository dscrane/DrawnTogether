/* IMPORTS */
import React from "react";
/* ------ */

export const PreviousButton = ({ prevText, handlePrevious }) => {
  return (
    <button
      className="p-button p-button__game p-button__game_prev"
      id="prevButton"
      type="button"
      onClick={() => handlePrevious()}
    >
      <span>{prevText}</span>
    </button>
  );
};
