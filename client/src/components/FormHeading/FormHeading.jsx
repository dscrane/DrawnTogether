/* IMPORTS */
import React from "react";
import "./formHeading.css";
/* ------ */

export const FormHeading = ({ currentPlayer, numPlayers, players }) => {
  const x = 0;
  console.log('form header', players[x])
  let formTabs = [];
  for (let i = 0; i < numPlayers - 1; i++) {
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
