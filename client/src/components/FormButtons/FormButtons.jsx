import React from "react";

const FormButtons = ({ currentForm, currentPlayer, players, numPlayers, prevPlayer }) => {
  return (
    <div className="form__buttons" data-testid="component-FormButtons">
      <div className="button__col">
        {currentPlayer === 0 ? (
          ""
        ) : (
          <button
            className={"form__button"}
            id="prev-player-button"
            type="button"
            onClick={() => {
              prevPlayer(currentPlayer);
            }}
          >
            <span className="form__button-icon">&#8249;</span>
            <span className="form__button_text">
              {" "}
              {currentForm > 2 && players[currentPlayer - 1] ? players[currentPlayer - 1].name : "Prev"}
            </span>
          </button>
        )}
      </div>
      <div className="button__col">
        <button
          className={`form__button ${
            currentPlayer === numPlayers + 1 && currentForm > 2 ? "form__button-disabled" : ""
          }`}
          id="next-player-button"
          type="submit"
        >
          <span className="form__button_text">
            {currentForm > 2 && players[currentPlayer + 1] ? players[currentPlayer + 1].name : "Update"}{" "}
          </span>
          <span className="form__button-icon">&#8250;</span>
        </button>
      </div>
    </div>
  );
};

export default FormButtons;
