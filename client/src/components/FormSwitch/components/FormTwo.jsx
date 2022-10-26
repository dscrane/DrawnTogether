import React from "react";
import { Field } from "formik";

export const FormTwo = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Cognitive Disposition</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.leaning`}
            id="formLeaning"
            value="DEFAULT"
          />
          Choose...
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.leaning`}
            id="formLeaning"
            value={18}
          />
          Right-Brain
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.leaning`}
            id="formLeaning"
            value={45}
          />
          Left-Brain
        </label>
      </div>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Personality Profile #1</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.productivity`}
            id="formProductivity"
            value="DEFAULT"
          />
          Choose...
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.productivity`}
            id="formProductivity"
            value={2}
          />
          Up with the sun
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.productivity`}
            id="formProductivity"
            value={-1}
          />
          Night owl
        </label>
      </div>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Personality Profile #2</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.personality`}
            id="formPersonality"
            value="DEFAULT"
          />
          Choose...
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.personality`}
            id="formPersonality"
            value={60}
          />
          Introvert
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.personality`}
            id="formPersonality"
            value={31}
          />
          Extrovert
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.personality`}
            id="formPersonality"
            value={18}
          />
          It Depends
        </label>
      </div>
    </>
  );
};
