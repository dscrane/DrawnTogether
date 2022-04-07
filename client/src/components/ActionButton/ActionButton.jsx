import React from "react";
import "./actionButton.css";

export const ActionButton = ({ onClick, text, buttonType }) => {
  const classNames = () => {
    if (buttonType === "prev" || buttonType === "next") {
      return `p-button p-button__game p-button__game_${buttonType}`;
    } else {
      return `p-button p-button__${buttonType}`;
    }
  };
  const formatText = () => {
    if (text.includes(" ")) {
      const textArray = text.split(" ");
      if (buttonType === "add" || buttonType === "next") {
        return text;
      } else {
        return (
          <>
            {textArray[0]}
            <br />
            {textArray[1]}
          </>
        );
      }
    } else {
      return text;
    }
  };

  return (
    <button type={buttonType === "next" ? "submit" : "button"} className={classNames()} onClick={onClick || null}>
      <span>{formatText()}</span>
    </button>
  );
};
