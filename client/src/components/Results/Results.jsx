import { ResetButton } from "../ResetButton";
import React from "react";

const reset = (
  <div className="p-body__row p-body__row-landing">
    <p className="landing__text">
      The final results of your group are displayed to the right. If you would like to play again please hit the 'reset'
      button!
    </p>
    <ResetButton endGame={endGame} />
  </div>
);
