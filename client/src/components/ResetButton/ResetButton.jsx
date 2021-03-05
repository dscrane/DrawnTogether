import React from "react";

const ResetButton = ({ endGame }) => {
  return (
    <button
      className="sidebar__button sidebar__button--start"
      onClick={() => endGame()}
      data-testid="button-ResetButton"
    >
      <span>
        Restart <br /> Game
      </span>
    </button>
  );
};

export default ResetButton;
