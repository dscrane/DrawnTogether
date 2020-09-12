import React from 'react';
import { Field } from 'redux-form';
import RenderForm from "./RenderForm";

const formData = {
  interest: {
    type: 'input',
    label: 'Common Interest'
  },
  name: {
    type: 'input',
    label: 'Name'
  },
  association: {
    type: 'input',
    label: 'Time Associated to Interest'
  },
  height: {
    type: 'select',
    options: {}
  },
  gender: {},
  vocation: {},
  time: {},
  personality: {},
  money: {},
  food: {},
  nature: {},
  media: {},
  religion: {},
  culture: {},
  hue: {}
}

export const ResponseForm = (props) => {
  const handleForm = (formValues) => {
    props.handleForm(formValues)
  }

  const renderInputs = ({input, label }) => {
    return (
      <div>
        <label className='' >{label}</label>
        <input className='' placeholder={label} {...input} required />
      </div>
    )
  }


  const createFields = () => {
    return props.formFields.map(field => {
      return (
        <Field name={field} component={renderInputs} label={field} />
      )
    })
  }

  return (
    <RenderForm handleForm={handleForm}>
      {createFields}
    </RenderForm>
  )
}