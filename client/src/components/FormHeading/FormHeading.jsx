/* IMPORTS */
import React from "react";
import "./formHeading.css";
/* ------ */

export const FormHeading = ({ currentPlayer, numPlayers, players }) => {
  console.log(numPlayers)
  let formTabs = [];
  if (numPlayers === 0) {

  }
  for (let i = 0; i < numPlayers; i++) {
    formTabs.push(
      <div
        key={`${players[i].name}_${i}`}
        className={`heading__tab ${i === currentPlayer ? "heading__tab-active" : ""}`}
      >
        {players[i].name}
      </div>
    );
  }

  return <div className="form__heading">{formTabs}</div>;
};
