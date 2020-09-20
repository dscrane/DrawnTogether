import React from 'react';
import { reduxForm } from "redux-form";

const RenderForm = (props) => {
  const handleForm = formValues => {
    return props.handleForm(formValues);
  }

  return (
    <form onSubmit={props.handleSubmit(handleForm)} className='form-signin mt-2'>
      {props.children}
    </form>
  )
}

export default reduxForm({ form: 'responseForm'})(RenderForm)