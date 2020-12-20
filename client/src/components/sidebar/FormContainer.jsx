import React, { useState } from "react";
import { connect } from "react-redux";
import { submitForm, nextPlayer, prevPlayer } from "../../redux/actions";
import DisplayForm from "./DisplayForm";
import { PlayerButtons } from "./PlayerButtons";

const FormContainer = ({ game, submitForm, nextPlayer, players }) => {
  const { currentForm, currentPlayer, numPlayers } = game;

  const [responses, setResponses] = useState({});

  const createPlayerIcons = () => {
    const playerIcons = [];
    if (numPlayers === 0) {
      for (let i = 0; i < 5; i++) {
        playerIcons.push(
          i === currentPlayer ? (
            <span className="player__icon player__icon-active" key={i} />
          ) : (
            <span className="player__icon" key={i} />
          )
        );
      }
    } else {
      for (let i = 0; i < numPlayers; i++) {
        playerIcons.push(
          i === currentPlayer ? (
            <span className="player__icon-active" key={i} />
          ) : (
            <span className="player__icon" key={i} />
          )
        );
      }
    }
    return playerIcons;
  };

  const playerIconsAndButtons =
    currentForm > 1 ? (
      <>
        <div className="player__icon_row">{createPlayerIcons()}</div>
        <PlayerButtons
          players={players}
          numPlayers={numPlayers}
          currentForm={currentForm}
          currentPlayer={currentPlayer}
        />
      </>
    ) : (
      <></>
    );

  const onSubmit = async (event) => {
    event.preventDefault();
    const circle = {
      radius: 1,
      slice: 4,
    }; /*|| await updateCircle(currentForm, responses)*/
    await submitForm(currentPlayer, currentForm, circle, { ...responses });
    setResponses({});
    nextPlayer(currentPlayer);
  };

  const showForms = () => {
    if (currentForm > 2) {
      return currentPlayer === numPlayers + 1 ? (
        <div className="text-center">
          Click
          <br /> "Submit Form"
          <br /> to
          <br /> continue
        </div>
      ) : (
        <DisplayForm
          responses={responses}
          setResponses={setResponses}
          form={currentForm}
        />
      );
    } else {
      return (
        <DisplayForm
          responses={responses}
          setResponses={setResponses}
          form={currentForm}
        />
      );
    }
  };

  return (
    <form onSubmit={onSubmit} className="form-signin mt-2">
      {players[currentPlayer] ? <div>{players[currentPlayer].name}</div> : ""}
      {showForms()}
      {playerIconsAndButtons}
    </form>
  );
};

const mapStateToProps = ({ game, players }) => {
  return {
    game,
    players,
  };
};

export default connect(mapStateToProps, { submitForm, nextPlayer, prevPlayer })(
  FormContainer
);
