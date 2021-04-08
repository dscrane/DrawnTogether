import React from "react";
import { Field } from "redux-form";
const formTwo = [
  {
    label: "Time",
    id: "formTemporal",
    options: [
      { text: "Choose...", value: "DEFAULT" },
      { text: "Morning", value: "18" },
      { text: "Evening", value: "45" },
    ],
  },
];

export const FormTwo = () => {
  return (
    <div className="form__group">
      <div className="form__item">
        <label className="form__label">Time</label>
        <Field className="form__control" name="time" id="formTemporal" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="18">Morning</option>
          <option value="45">Evening</option>
        </Field>
      </div>
      <div className="form__item">
        <label className="form__label">Personality</label>
        <Field className="form__control" name="personality" id="formPersonality" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="60">Introvert</option>
          <option value="31">Extrovert</option>
        </Field>
      </div>
      <div className="form__item">
        <label className="form__label">Hair</label>
        <Field className="form__control" name="hair" id="formHair" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="10">Curly</option>
          <option value="18">Straight</option>
          <option value="25">Wavy</option>
        </Field>
      </div>
    </div>
  );
};
