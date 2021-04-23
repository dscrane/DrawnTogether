import React from "react";
import { NextButton, PreviousButton } from "../../lib/buttons";
import "./panelButtonRow.css";

export const PanelButtonRow = ({ nextText, prevText, handlePrevious }) => {
  return (
    <div className="p-buttons__row" data-testid="component-FormButtons">
      <div className="p-button__col">
        <PreviousButton prevText={prevText} handlePrevious={handlePrevious} />
      </div>
      <div className="p-button__col">
        <NextButton nextText={nextText} />
      </div>
    </div>
  );
};
