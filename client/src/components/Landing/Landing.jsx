import { StartButton } from "../../lib/buttons";
import React from "react";
import "./landing.css";

export const Landing = ({ startGame }) => {
  return (
    <div className="landing">
      <div className="landing__text">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <p>Drawn Together is an artistic collaboration between Daegan and Carrie Crane.</p>
        <p>For teams of 2-5 players.</p>
        <p>
          As team progress through the sections, the game will create and alter a collection of circles based on your teams common interest and varied personalities .
        </p>
        <p>
          In the end you will have unique visual interpretation of your teams’s connection to the common interest that brought you together.
        </p>
        </div>
      </div>
      <StartButton startGame={startGame} />
    </div>
  );
};
