/* IMPORTS */
import React from "react";
/* ------ */

export const NextButton = ({ nextText }) => {
  return (
    <button type="submit" className={`p-button p-button__game p-button__game_next `} id="nextButton">
      <span>{nextText}</span>
    </button>
  );
};
