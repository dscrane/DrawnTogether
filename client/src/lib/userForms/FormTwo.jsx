import React from "react";
import { Field } from "formik";

export const FormTwo = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row">
        <label className="item__label item__label-select">Leaning</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.leaning`}
          id="formTemporal"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={18}>Right-Brain</option>
          <option value={45}>Left-Brain</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Personality</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.personality`}
          id="formPersonality"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={60}>Introvert</option>
          <option value={31}>Extrovert</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Hair</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.hair`}
          id="formHair"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={10}>Curly</option>
          <option value={18}>Straight</option>
          <option value={25}>Wavy</option>
        </Field>
      </div>
    </>
  );
};
