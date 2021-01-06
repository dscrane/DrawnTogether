import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  submitForm,
  nextPlayer,
  prevPlayer,
  updatePlayerCircle,
} from "../../redux/actions";
import DisplayForm from "./DisplayForm";
import { PlayerButtons } from "./PlayerButtons";

const FormContainer = ({
  game,
  players,
  submitForm,
  nextPlayer,
  updatePlayerCircle,
  prevPlayer,
}) => {
  const { currentForm, currentPlayer, numPlayers } = game;

  const [responses, setResponses] = useState({});
  console.log("RESPONSES", responses);
  useEffect(() => {
    setResponses({});
  }, [submitForm]);

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
            <span className="player__icon player__icon-active" key={i} />
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
          prevPlayer={prevPlayer}
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
    console.log("resopnses", responses);

    await submitForm(currentPlayer, currentForm, responses);
    if (currentForm > 2) {
      await updatePlayerCircle(currentPlayer);
    }
    setResponses({});
    nextPlayer(currentPlayer);
  };

  const showForms = () => {
    if (currentForm > 2) {
      return currentPlayer === numPlayers ? (
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
    <div className="content__container">
      {players[currentPlayer] && currentForm > 2 ? (
        <div className="content__name">{players[currentPlayer].name}</div>
      ) : (
        ""
      )}
      <form onSubmit={onSubmit} className="content__form form-signin mt-2">
        {showForms()}
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
