import React from "react";

export const ResetButton = ({ onClick, buttonType, text }) => {
  return (
    <button className={`p-button p-button__${buttonType}`} onClick={() => onClick()}>
      <span>{text.split(" ").join("\n")}</span>
    </button>
  );
};
