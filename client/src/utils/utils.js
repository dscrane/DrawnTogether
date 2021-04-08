import React from "react";
import { updatePlayerCircle, updatePlayer, setInterestAndPlayers } from "../redux_v2/actions";

export const debounce = (callback, wait) => {
  let timeoutID = null;

  return (...args) => {
    window.clearTimeout(timeoutID);
    timeoutID = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

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

export const handleFormSubmit = async (responses, currentPlayer, currentForm) => {
  console.log("reached", currentForm, responses);

  updatePlayer(responses, currentPlayer);
  updatePlayerCircle();
};
