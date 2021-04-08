import React from "react";
import { connect } from "react-redux";
import { endGame, nextPlayer, prevPlayer, startGame, submitForm } from "../../redux_v2/actions";
import { FormContainer } from "../FormContainer";
import { StartButton } from "../StartButton";
import { ResetButton } from "../ResetButton";

const SidebarBody = ({ currentForm, currentPlayer, numPlayers, startGame, endGame, nextPlayer, prevPlayer }) => {
  const landing = (
    <div className="sidebar__row sidebar__row-landing">
      <p className="landing__text">
        Circle Generator is the artistic brainchild of Carrie Crane. Moving through the sections of the game will create
        and alter a collection of circles based on your groups common interest and a variety of personality factors. By
        the end you will have unique visual of how the members of your group are connected to the common interest that
        brought you together.
      </p>
      <StartButton startGame={startGame} />
    </div>
  );
  const reset = (
    <div className="sidebar__row sidebar__row-landing">
      <p className="landing__text">
        The final results of your group are displayed to the right. If you would like to play again please hit the
        'reset' button!
      </p>
      <ResetButton endGame={endGame} />
    </div>
  );

  const displayBody = () => {
    if (currentForm === 0) {
      return landing;
    } else if (currentForm === 9) {
      return reset;
    } else {
      return (
        <FormContainer
          currentForm={currentForm}
          currentPlayer={currentPlayer}
          numPlayers={numPlayers}
          nextPlayer={nextPlayer}
          prevPlayer={prevPlayer}
        />
      );
    }
  };

  return (
    <div data-testid="component-SidebarBody" className="body__display">
      {displayBody()}
    </div>
  );
};

const mapStateToProps = ({ currentForm, currentPlayer, numPlayers }) => {
  return { currentForm, currentPlayer, numPlayers };
};

export default connect(mapStateToProps, {
  submitForm,
  startGame,
  endGame,
  nextPlayer,
  prevPlayer,
})(SidebarBody);
