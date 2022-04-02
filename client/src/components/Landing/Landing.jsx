import { StartButton } from "../../lib/buttons";
import React from "react";
import "./landing.css";

export const Landing = () => {
  return (
    <div className="landing">
      <p className="landing__text">Drawn Together is an artistic collaboration between Daegan and Carrie Crane.</p>
      <p className="landing__text">For teams of 2-5 players.</p>
      <p className="landing__text">
        As team progress through the sections, the game will create and alter a collection of circles based on your
        teams common interest and varied personalities .
      </p>
      <p className="landing__text">
        In the end you will have unique visual interpretation of your teams’s connection to the common interest that
        brought you together.
      </p>
    </div>
  );
};
