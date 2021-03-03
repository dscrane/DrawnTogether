import React from "react";

const StartButton = ({ startGame }) => {
  return (
    <button
      className="sidebar__button sidebar__button--start"
      onClick={() => startGame()}
      data-testid="button-StartButton"
    >
      <span>
        Begin <br /> Game
      </span>
    </button>
  );
};

export default StartButton;
