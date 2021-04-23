import React from "react";

export const StartButton = ({ startGame }) => {
  return (
    <button className="p-button p-button__start" onClick={() => startGame()} data-testid="button-StartButton">
      <span>
        Begin <br /> Game
      </span>
    </button>
  );
};
