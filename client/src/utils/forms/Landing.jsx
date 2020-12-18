import React from "react";

export const Landing = ({ initializeGameSession }) => {
  return (
    <div id="landing" className="col-11">
      <button id="beginButton" onClick={initializeGameSession}>
        <span>
          Begin <br /> Game
        </span>
      </button>
    </div>
  );
};
