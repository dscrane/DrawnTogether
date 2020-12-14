import React from 'react';
import { Field } from 'redux-form';
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import RenderForm from "./RenderForm";
import { PlayerButtons } from "./PlayerButtons";
import formData  from '../../utils/formData';
import { SET_INTEREST } from '../../redux/types';

export const ResponseForm = (props) => {
  console.log('Response Form', props)
  const handleForm = (formValues) => {
    props.currentForm === 1 ? props.handleForm({ type: SET_INTEREST, formValues }) : props.handleForm({ formValues })
  }

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
        <PlayerButtons currentPlayer={props.currentPlayer} prevPlayer={props.prevPlayer} nextPlayer={props.nextPlayer} />
      </>
    ) : (
      <></>
    );

  const renderInputs = ({input, label, type, options, values }) => {
    if (type === 'select') {
      const optionTags = options.map((option, i) => {
        return <option key={option} value={values[i]}>{option}</option>
      })
      return (
        <div key={`${label}-options`}>
          <FormLabel className='form__label'>{label}</FormLabel>
          <FormControl className='form__control' as={type} defaultValue={'DEFAULT'}>
            <option className='form__option' value='DEFAULT'>Choose...</option>
            {optionTags}
          </FormControl>
        </div>
      )
    }
    return (
      <div key={label}>
        <FormLabel className='form__label' >{label}</FormLabel>
        <FormControl className='form__control' placeholder={label} {...input} required />
      </div>
    )
  }

  const createFields = () => {
    return props.formFields.map(field => {
      return (
        <Field
          key={field}
          name={field}
          component={renderInputs}
          label={formData[field].label}
          type={formData[field].type}
          options={formData[field].options ? formData[field].options : false}
          values={formData[field].values ? formData[field].values : false}
        />
      )
    })
  }

  return (
    <FormGroup className='form__group'>
      <RenderForm currentForm={props.currentForm} handleForm={handleForm} playerIconsAndButtons={playerIconsAndButtons}>
        {createFields()}
      </RenderForm>
    </FormGroup>
  )
}
