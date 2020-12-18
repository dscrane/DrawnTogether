import React, { useState } from 'react';
import { connect } from 'react-redux';
import { store } from '../../store';
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import { submitForm, nextPlayer, prevPlayer } from '../../redux/actions';
import DisplayForm from "./DisplayForm";
import {PlayerButtons} from "./PlayerButtons";

const FormContainer = ({ game, submitForm, nextPlayer, prevPlayer }) => {
  const { currentForm, currentPlayer, numPlayers } = game.config;
  const defaultResponses = {
    name: null,
    association: null,
  }
  const [ responses, setResponses ] = useState({
    ...defaultResponses
  })

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
    console.log('playerIcons', playerIcons)

    return playerIcons;
  };

  const playerIconsAndButtons =
    currentForm > 1 ? (
      <>
        <div className="player__icon_row">
          {createPlayerIcons()}
        </div>
        <PlayerButtons
          players={game.players}
          currentForm={currentForm}
          currentPlayer={currentPlayer}
        />
      </>
    ) : (
      <></>
    );

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('onsubmit', currentPlayer)
    submitForm(
      currentPlayer,
      currentForm,
      {
        ...responses,
      }
    )
    setResponses({...defaultResponses})
    nextPlayer(currentPlayer)
  }

  return (
    <form onSubmit={onSubmit} className='form-signin mt-2'>
      <DisplayForm responses={responses} setResponses={setResponses} form={currentForm} />
      {playerIconsAndButtons}
    </form>
  )
}

const mapStateToProps = ({ game }) => {
  return {
    game
  }
}

export default connect(mapStateToProps, { submitForm, nextPlayer, prevPlayer })(FormContainer)
