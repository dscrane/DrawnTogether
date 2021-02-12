import React from "react";

const DisplayResults = ({ resetGame }) => {
  document.getElementById("nextButton").style.display = "none";
  return (
    <div data-testid="component-DisplayResults">
      <div id="landing" className="col-11">
        <div className="row">
          <div id="resultsMessage">Thank you for playing see your results displayed to the right!!</div>
        </div>
      </div>
      <div id="landing" className="col-11">
        <button id="restartButton" onClick={resetGame}>
          <span>
            Restart <br /> Game
          </span>
        </button>
      </div>
    </div>
  );
};

export default DisplayResults;
