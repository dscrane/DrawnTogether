import React from "react";
import { Field } from "formik";

export const FormSix = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row">
        <label className="item__label item__label-select">Choose a Color</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.color`}
          id="formColor"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value="chartreuse">Chartreuse</option>
          <option value="vermilion">Vermilion</option>
          <option value="cobalt">Cobalt</option>
          <option value="teal">Teal</option>
          <option value="kellyGreen">Kelly Green</option>
          <option value="aubergine">Aubergine</option>
        </Field>
      </div>
    </>
  );
};
