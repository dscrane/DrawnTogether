import React from "react";
import { Field } from "redux-form";

export const FormSix = () => {
  return (
    <div className="form__group">
      <div className="formItem">
        <label className="form__label">Choose a Color</label>
        <Field className="form__control" name="color" id="formColor" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="chartreuse">Chartreuse</option>
          <option value="vermilion">Vermilion</option>
          <option value="cobalt">Cobalt</option>
          <option value="teal">Teal</option>
          <option value="kellyGreen">Kelly Green</option>
          <option value="aubergine">Aubergine</option>
        </Field>
      </div>
    </div>
  );
};
