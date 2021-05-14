import React from "react";
import { Field } from "formik";

export const FormTwo = () => {
  return (
    <>
      <div className="form__row">
        <label className="item__label">Time</label>
        <Field className="form__control form__control-select" name="time" id="formTemporal" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value="18">Morning</option>
          <option value="45">Evening</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label">Personality</label>
        <Field
          className="form__control form__control-select"
          name="personality"
          id="formPersonality"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value="60">Introvert</option>
          <option value="31">Extrovert</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label">Hair</label>
        <Field className="form__control form__control-select" name="hair" id="formHair" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value="10">Curly</option>
          <option value="18">Straight</option>
          <option value="25">Wavy</option>
        </Field>
      </div>
    </>
  );
};
