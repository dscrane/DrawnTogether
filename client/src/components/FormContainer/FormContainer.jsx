import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { submitForm, nextPlayer, prevPlayer, updatePlayerCircle } from "../../redux/actions";
import { FormDisplay } from "../FormDisplay";
import { FormButtons } from "../FormButtons";
import { createPlayerIcons } from "../../utilities";

const updateMessage = (
  <div className="body__updateMessage">
    Click "Next Form"
    <br /> to continue
    <br /> or
    <br /> go back
    <br /> to change responses
  </div>
);

const FormContainer = ({ game, players, submitForm, nextPlayer, updatePlayerCircle, prevPlayer }) => {
  const { currentForm, currentPlayer, numPlayers } = game;

  const [responses, setResponses] = useState({});
  useEffect(() => {
    setResponses({});
  }, [submitForm]);

  const playerIconsAndButtons =
    currentForm > 1 ? (
      <>
        <div className="form__row form__row-icons">{createPlayerIcons()}</div>
        <div className="form__row form__row-buttons">
          <FormButtons
            players={players}
            prevPlayer={prevPlayer}
            numPlayers={numPlayers}
            currentForm={currentForm}
            currentPlayer={currentPlayer}
          />
        </div>
      </>
    ) : (
      <></>
    );

  const displayInstructions = () => {
    if (currentForm === 1) {
      return "What is a common interest or relationship that connects your group?";
    } else if (currentForm === 2) {
      return "What is your name and how long have you, individually, been associated with the groups common interest?";
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await submitForm(currentPlayer, currentForm, responses);
    if (currentForm > 2) {
      await updatePlayerCircle(currentPlayer, currentForm);
    }
    setResponses({});
    nextPlayer(currentPlayer);
  };

  const showForms = () => {
    if (currentForm > 2) {
      return currentPlayer === numPlayers ? (
        updateMessage
      ) : (
        <FormDisplay responses={responses} setResponses={setResponses} form={currentForm} />
      );
    } else {
      return <FormDisplay responses={responses} setResponses={setResponses} form={currentForm} />;
    }
  };

  return (
    <div className="body__container" data-testid="component-FormContainer">
      {currentForm < 3 ? <div className={"form__row form__row-instructions"}>{displayInstructions()}</div> : ""}
      {players[currentPlayer] && currentForm > 2 ? (
        <div className="form__row form__row-username">{players[currentPlayer].name}</div>
      ) : (
        ""
      )}
      <form onSubmit={onSubmit} className="form form-signin mt-2">
        <div className="form__row form__row-content">{showForms()}</div>
        {playerIconsAndButtons}
      </form>
    </div>
  );
};

const mapStateToProps = ({ game, players, display }) => {
  return {
    game,
    players,
    display,
  };
};

export default connect(mapStateToProps, {
  submitForm,
  nextPlayer,
  prevPlayer,
  updatePlayerCircle,
})(FormContainer);
