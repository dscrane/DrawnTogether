import React from "react";
import { connect } from "react-redux";
import { nextPlayer, prevPlayer, setInterest, startGame, submitForm } from "../../redux/actions";
import { FormContainer } from "../FormContainer";
import { StartButton } from "../StartButton";

const SidebarBody = ({ game, startGame, nextPlayer, prevPlayer }) => {
  const { currentForm, currentPlayer, numPlayers } = game;

  const displayBody = () => {
    if (currentForm === 0) {
      return (
        <div className="sidebar__row sidebar__row-landing">
          <p className="landing__text">
            Circle Generator is the artistic brainchild of Carrie Crane. Moving through the sections of the game will
            create and alter a collection of circles based on your groups common interest and a variety of personality
            factors. By the end you will have unique visual of how the members of your group are connected to the common
            interest that brought you together.
          </p>
          <StartButton startGame={startGame} />
        </div>
      );
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

const mapStateToProps = ({ game }) => {
  return {
    game,
  };
};

export default connect(mapStateToProps, {
  submitForm,
  setInterest,
  startGame,
  nextPlayer,
  prevPlayer,
})(SidebarBody);
