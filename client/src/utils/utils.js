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

export const handleGridUpdate = (view, currentMultiplier) => {
  console.log(currentMultiplier);
  const { height, width, oldHeight, oldWidth } = view;
  let newMultiplier;
  if (view.oldHeight !== 0 || view.oldWidth !== 0) {
    newMultiplier = parseFloat((width / oldWidth).toFixed(4));
  } else {
    newMultiplier = currentMultiplier;
  }

  console.log("multiplier", newMultiplier);
  const svgDim = height > width ? Math.round(height) : Math.round(width);
  const radius = height < width ? Math.round(height / 2) : Math.round(width / 2);
  const axis = parseFloat((radius * 1.1).toFixed(4));
  const cross = parseFloat((radius * 0.75).toFixed(4));
  const cy = parseFloat((height / 2).toFixed(4));
  const cx = parseFloat((width / 2).toFixed(4));
  const step = parseFloat((radius / 16).toFixed(4));

  return {
    adjustmentMultiplier: newMultiplier,
    grid: {
      svgDim,
      radius,
      axis,
      cross,
      cx,
      cy,
      step,
    },
  };
};
