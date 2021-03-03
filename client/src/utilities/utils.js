import React from "react";

export const createPlayerIcons = (numPlayers, currentPlayer) => {
  const playerIcons = [];
  if (numPlayers === 0) {
    for (let i = 0; i < 5; i++) {
      playerIcons.push(
        i === currentPlayer ? (
          <span className="form__icon form__icon-active" key={i} />
        ) : (
          <span className="form__icon" key={i} />
        )
      );
    }
  } else {
    for (let i = 0; i < numPlayers; i++) {
      playerIcons.push(
        i === currentPlayer ? (
          <span className="form__icon form__icon-active" key={i} />
        ) : (
          <span className="form__icon" key={i} />
        )
      );
    }
  }
  return playerIcons;
};
