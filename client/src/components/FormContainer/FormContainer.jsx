import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { submitForm, nextPlayer, prevPlayer, updatePlayerCircle } from "../../redux/actions";
import { FormDisplay } from "../FormDisplay";
import { FormButtons } from "../FormButtons";
import { createPlayerIcons } from "../../utils";

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
        <div className="form__row form__row-icons">{createPlayerIcons(numPlayers, currentPlayer)}</div>
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
      return "What is your name and how long have you been associated the common interest?";
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (JSON.stringify(responses) === "{}") {
      alert("Please complete the form before continuing.");
      return;
    }
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
      {currentForm < 3 ? <div className={"body__row body__row-instructions"}>{displayInstructions()}</div> : ""}
      {players[currentPlayer] && currentForm > 2 ? (
        <div className="body__row body__row-username">{players[currentPlayer].name}</div>
      ) : (
        ""
      )}
      <form onSubmit={onSubmit} className="form body__row body__row-form form-signin mt-2">
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
