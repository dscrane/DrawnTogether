import React from "react";
import "./actionButton.css";

export const ActionButton = ({ onClick, text, buttonType }) => {
  const classNames = () => {
    if (buttonType === "prev" || buttonType === "next") {
      return `button button__game button__game-${buttonType}`;
    } else {
      return `button button__${buttonType}`;
    }
  };

  return (
    <button type={buttonType === "next" ? "submit" : "button"} className={classNames()} onClick={onClick || null}>
      <div className={`button__content button__content-${buttonType}`}>
        <div className={buttonType === "add" ? "button__text-add" : "button__text"}>{text}</div>
      </div>
    </button>
  );
};
