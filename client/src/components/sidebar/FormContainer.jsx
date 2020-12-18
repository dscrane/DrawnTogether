import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../store';
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import { submitForm, nextPlayer, prevPlayer } from '../../redux/actions';
import DisplayForm from "./DisplayForm";
import {PlayerButtons} from "./PlayerButtons";

const FormContainer = (props) => {
  console.log('render form', store.getState())
  console.log(props)

  const createPlayerIcons = () => {
    const playerIcons = [];
    if (props.numPlayers === 0) {
      for (let i = 0; i < 5; i++) {
        playerIcons.push(
          i === props.currentPlayer ? (
            <span className="player__icon player__icon-active" key={i} />
          ) : (
            <span className="player__icon" key={i} />
          )
        );
      }
    } else {
      for (let i = 0; i < props.numPlayers; i++) {
        playerIcons.push(
          i === props.currentPlayer ? (
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
    props.currentForm > 1 ? (
      <>
        <div className="player__icon_row">
          {createPlayerIcons()}
        </div>
        <PlayerButtons
          currentForm={props.currentForm}
          currentPlayer={props.currentPlayer}
          prevPlayer={props.prevPlayer}
          nextPlayer={props.nextPlayer}
        />
      </>
    ) : (
      <></>
    );

  return (
    <form onSubmit={submitForm} className='form-signin mt-2'>
      <DisplayForm form={props.currentForm} />
      {playerIconsAndButtons}
    </form>
  )
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps, { submitForm, nextPlayer, prevPlayer })(FormContainer)
