import React from "react";
import { Field } from "redux-form";
import { PlayerForm } from "../playerForm";

export const InterestForm = () => {
  return (
    <div className="form__group">
      <div className="form__item">
        <Field
          className="form__control"
          id="commonInterest"
          name="interest"
          component="input"
          type="text"
          placeholder="Common interest..."
        />
      </div>
      <PlayerForm />
    </div>
  );
};
