/* IMPORTS */
import React from "react";
/* ------ */

const formInstructions = {
  0: `Circle Generator is the artistic brainchild of Carrie Crane. Moving through the sections of the game will create and alter a collection of circles based on your groups common interest and a variety of personality factors. By the end you will have unique visual of how the members of your group are connected to the common interest that brought you together.`,
  1: `Choose an interest or activity that connects your group (event, hobby, career, etc).\nEnter a player's name and their time associate with the interest (2-5 players).\nOnce each player has entered the information click 'Submit' to begin.`,
  2: "Choose the option that fits best.\n(Approach humorously, don't overthink it!)",
};

export const InstructionText = ({ currentForm }) => {
  const form = currentForm <= 1 ? currentForm : 2;
  return (
    <div className="form__row form__row-instructions">
      <div className="form__instructions">
        {formInstructions[form].split("\n").map((line, i) => (
          <p className="instruction__line" key={`instruction-line-${i}`}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
