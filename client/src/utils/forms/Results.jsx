import React, { Fragment } from "react";

export const Results = ({ resetGame }) => {
  document.getElementById("nextButton").style.display = "none";
  return (
    <Fragment>
      <div id="landing" className="col-11">
        <div className="row">
          <div id="resultsMessage">
            Thank you for playing see your results displayed to the right!!
          </div>
        </div>
      </div>
      <div id="landing" className="col-11">
        <button id="restartButton" onClick={resetGame}>
          <span>
            Restart <br /> Game
          </span>
        </button>
      </div>
    </Fragment>
  );
};
