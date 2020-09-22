import React from 'react';
import { reduxForm } from "redux-form";



const RenderForm = (props) => {

  const handleForm = formValues => {
    props.handleForm(formValues);
    props.reset();
  }

  return (
    <form onSubmit={props.handleSubmit(handleForm)} className='form-signin mt-2'>
      {props.children}
      {props.playerIconsAndButtons}
    </form>
  )
}

export default reduxForm({ form: `form_2`})(RenderForm)