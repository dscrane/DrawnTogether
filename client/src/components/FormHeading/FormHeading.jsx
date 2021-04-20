/* IMPORTS */
import React from "react";
/* ------ */

export const FormHeading = ({ currentPlayer, numPlayers, players }) => {
  let formTabs = [];
  for (let i = 0; i < numPlayers; i++) {
    formTabs.push(
      <div className={`heading__tab ${i === currentPlayer ? "heading__tab-active" : ""}`}>{players[i].name}</div>
    );
  }

  return <div className="form__heading">{formTabs}</div>;
};
