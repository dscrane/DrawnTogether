import React from "react";
import { ResetButton } from "../../lib/buttons";

const DisplayResults = ({ endGame }) => {
  return (
    <div className="landing">
      <p className="landing__text">The final results of your group are displayed to the right.</p>
      <p className="landing__text">If you would like to play again please hit the "Reset" button!</p>
      <ResetButton endGame={endGame} />
    </div>
  );
};

export default DisplayResults;
