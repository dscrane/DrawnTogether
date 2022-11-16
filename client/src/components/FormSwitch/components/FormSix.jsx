import React from "react";
import { Field } from "formik";

export const FormSix = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Which hue is you</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.color`}
            id="formColor"
            value="chartreuse"
          />
          Chartreuse
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.color`}
            id="formColor"
            value="vermilion"
          />
          Vermilion
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.color`}
            id="formColor"
            value="cobalt"
          />
          Cobalt
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.color`}
            id="formColor"
            value="teal"
          />
          Teal
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.color`}
            id="formColor"
            value="kellyGreen"
          />
          Kelly Green
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.color`}
            id="formColor"
            value="aubergine"
          />
          Aubergine
        </label>
      </div>
    </>
  );
};
