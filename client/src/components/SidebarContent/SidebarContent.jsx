import React from "react";
import { StartButton } from "../StartButton";
import { connect } from "react-redux";
import { setInterest, startGame, submitForm, nextPlayer, prevPlayer } from "../../redux/actions";
import { FormContainer } from "../FormContainer";

const SidebarContent = ({ game, startGame, nextPlayer, prevPlayer }) => {
  const { currentForm, currentPlayer, numPlayers } = game;

  const contentDisplay =
    currentForm === 0 ? (
      <StartButton startGame={startGame} />
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
    <div data-testid="component-SidebarContent" className="row__content">
      {contentDisplay}
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
})(SidebarContent);
