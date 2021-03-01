import React from "react";
import { StartButton } from "../StartButton";
import { connect } from "react-redux";
import { nextPlayer, prevPlayer, setInterest, startGame, submitForm } from "../../redux/actions";
import { FormContainer } from "../FormContainer";

const SidebarBody = ({ game, startGame, nextPlayer, prevPlayer }) => {
  const { currentForm, currentPlayer, numPlayers } = game;

  const sidebarBodyDisplay =
    currentForm === 0 ? (
      <div className="body__container body__container-start">
        <StartButton startGame={startGame} />
      </div>
    ) : (
      <FormContainer
        currentForm={currentForm}
        currentPlayer={currentPlayer}
        numPlayers={numPlayers}
        nextPlayer={nextPlayer}
        prevPlayer={prevPlayer}
      />
    );

  return (
    <div data-testid="component-SidebarBody" className="body__display">
      {sidebarBodyDisplay}
    </div>
  );
};

const mapStateToProps = ({ game }) => {
  return {
    game,
  };
};

export default connect(mapStateToProps, {
  startGame,
  submitForm,
  setInterest,
  nextPlayer,
  prevPlayer,
})(SidebarBody);
