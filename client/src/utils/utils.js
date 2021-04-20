import React from "react";
import { HeaderIcon } from "../components/Header";

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

export const createHeaderIcons = (currentForm) => {
  const formNames = ["Participants", "Personal", "Mental", "Financial", "Natural", "Cultural", "Visual"];
  return formNames.map((formName, i) => {
    return i === currentForm - 1 ? (
      <div key={`${formName}-active`} className="icon__container">
        <HeaderIcon formName={formName} isActive={true} />
      </div>
    ) : (
      <div key={`${formName}`} className="icon__container">
        <HeaderIcon formName={formName} isActive={false} />
      </div>
    );
  });
};
