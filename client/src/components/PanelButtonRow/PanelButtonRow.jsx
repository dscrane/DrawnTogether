import React from "react";
import { ActionButton } from "../ActionButton";
import "./panelButtonRow.css";

export const PanelButtonRow = ({ nextText, prevText, handlePrevious }) => {
  return (
    <div className="p-buttons__row" data-testid="component-FormButtons">
      <div className="p-button__col">
        <ActionButton onClick={handlePrevious} text={prevText} buttonType={"prev"} />
      </div>
      <div className="p-button__col">
        <ActionButton text={nextText} buttonType={"next"} />
      </div>
    </div>
  );
};
