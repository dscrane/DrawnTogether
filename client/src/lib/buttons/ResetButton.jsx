import React from "react";

export const ResetButton = ({ endGame }) => {
  return (
    <button className="p-button p-button__start" onClick={() => endGame()} data-testid="button-ResetButton">
      <span>
        Restart <br /> Game
      </span>
    </button>
  );
};
