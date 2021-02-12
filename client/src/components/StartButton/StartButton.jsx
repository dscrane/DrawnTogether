import React from "react";

const StartButton = ({ startGame }) => {
  return (
    <button className="game__button" onClick={() => startGame()}>
      <span>
        Begin <br /> Game
      </span>
    </button>
  );
};

export default StartButton;
