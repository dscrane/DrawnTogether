import React from "react";
import { Field } from "formik";

export const FormTwo = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row">
        <label className="item__label item__label-select">Cognitive Disposition</label>
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
        <label className="item__label item__label-select">Personality Profile #1</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.productivity`}
          id="formGender"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={2}>Up with the sun</option>
          <option value={-1}>Night owl</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Personality Profile #2</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.personality`}
          id="formPersonality"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={60}>Introvert</option>
          <option value={31}>Extrovert</option>
          <option value={18}>It Depends</option>
        </Field>
      </div>
    </>
  );
};
