/* IMPORTS */
import React from "react";
import "./formHeading.css";
/* ------ */

export const FormHeading = ({ currentPlayer, numPlayers, players }) => {
  let formTabs = [];
  if (numPlayers === 0) {
  }
  for (let i = 0; i < numPlayers; i++) {
    formTabs.push(
      <div
        key={`${players[i].responses.name}_${i}`}
        className={`heading__tab ${i === currentPlayer ? "heading__tab-active" : ""}`}
      >
        {players[i].responses.name}
      </div>
    );
  }

  return <div className="form__heading">{formTabs}</div>;
};
