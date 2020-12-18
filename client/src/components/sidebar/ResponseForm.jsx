import React from 'react';
// import { Field } from 'redux-form';
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import FormContainer from "./FormContainer";
import { PlayerButtons } from "./PlayerButtons";
import formData from '../../utils/formData';
import { SET_INTEREST } from '../../redux/types';

export const ResponseForm = (props) => {
  console.log('Response Form', props)


  return (
    <FormGroup className='form__group'>
      <FormContainer
        currentPlayer={props.currentPlayer}
        currentForm={props.currentForm}
      />
    </FormGroup>
  )
}
