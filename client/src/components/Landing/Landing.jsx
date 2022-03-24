import { StartButton } from "../../lib/buttons";
import React from "react";
import "./landing.css";

export const Landing = ({ startGame }) => {
  return (
    <div className="landing">
      <div className="landing__text">
        <p>Circle Generator is the artistic brainchild of Carrie Crane.</p>
        <p>
          Moving through the sections of the game will create and alter a collection of circles based on your groups
          common interest and a variety of personality factors.
        </p>
        <p>
          By the end you will have unique visual of how the members of your group are connected to the common interest
          that brought you together.
        </p>
      </div>
      <StartButton startGame={startGame} />
    </div>
  );
};
