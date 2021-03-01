import React from "react";

const PlayerButtons = ({ currentForm, currentPlayer, players, numPlayers, prevPlayer }) => {
  return (
    <div className="player__buttons" data-testid="component-PlayerButtons">
      <div className="player__buttons-row">
        <div className="player__buttons-col">
          {currentPlayer === 0 ? (
            ""
          ) : (
            <button
              className={"player__button"}
              id="prev-player-button"
              type="button"
              onClick={() => {
                prevPlayer(currentPlayer);
              }}
            >
              <span className="player__button-icon">&#8249;</span>
              <span className="player__button_text">
                {" "}
                {currentForm > 2 && players[currentPlayer - 1] ? players[currentPlayer - 1].name : "Prev"}
              </span>
            </button>
          )}
        </div>
        <div className="player__buttons-col">
          <button
            className={`player__button ${
              currentPlayer === numPlayers + 1 && currentForm > 2 ? "player__button-disabled" : ""
            }`}
            id="next-player-button"
            type="submit"
          >
            <span className="player__button_text">
              {currentForm > 2 && players[currentPlayer + 1] ? players[currentPlayer + 1].name : "Update"}{" "}
            </span>
            <span className="player__button-icon">&#8250;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerButtons;
