import React from "react";
import { headerIcons } from "../components/Header/headerIcons";

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

export const createHeaderIcons = (headerIcons, currentForm) => {
  const formNames = ["Interest", "Players", "Physical", "Personal", "Financial", "Natural", "Cultural", "Visual"];
  return headerIcons.map((icon, i) => {
    return i === currentForm - 1 ? (
      <div key={`${formNames[i]}-active`}>
        <span className="header__icon header__icon-active">{icon}</span>
      </div>
    ) : (
      <div key={`${formNames[i]}`}>
        <span className="header__icon">{icon}</span>
      </div>
    );
  });
};
