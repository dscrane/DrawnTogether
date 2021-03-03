import React from "react";

const FormButtons = ({ currentForm, currentPlayer, players, numPlayers, prevPlayer }) => {
  return (
    <div className="sidebar__buttons" data-testid="component-FormButtons">
      <div className="sidebar__buttons--col">
        {currentPlayer === 0 ? (
          ""
        ) : (
          <button
            className="sidebar__button sidebar__button--player sidebar__button--player-next"
            id="prev-player-button"
            type="button"
            onClick={() => {
              prevPlayer(currentPlayer);
            }}
          >
            <span className="player__button--icon">&#8249;</span>
            <span className="player__button--text">
              {" "}
              {currentForm > 2 && players[currentPlayer - 1] ? players[currentPlayer - 1].name : "Prev"}
            </span>
          </button>
        )}
      </div>
      <div className="sidebar__buttons--col">
        <button
          className={`sidebar__button sidebar__button--player sidebar__button--player-next ${
            currentPlayer === numPlayers && currentForm > 2 ? "sidebar__button--player-disabled" : ""
          }`}
          id="next-player-button"
          type="submit"
        >
          <span className="player__button--text">
            {currentForm > 2 && players[currentPlayer + 1] ? players[currentPlayer + 1].name : "Update"}{" "}
          </span>
          <span className="player__button--icon">&#8250;</span>
        </button>
      </div>
    </div>
  );
};

export default FormButtons;
