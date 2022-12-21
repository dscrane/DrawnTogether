/* IMPORTS */
import React from "react";
import { Field } from "formik";
import { PlayerForm } from "../PlayerForm";
import { formData } from "../../utils";
import "./formBuilder.css";
/* ------ */

export const FormBuilder = ({ currentPlayer, currentForm, values, players, formProps }) => {
  const toggleChecked = (currentPlayer, question, option) => {
    if (currentPlayer.mock) {
      return { checked: option === currentPlayer.responses[question].toString() ? true : "" };
    }
  };

  if (currentForm === 8) {
    return (
      <div className="form__row">
        <div className="form__instructions">
          <p className="instruction__line">"Finish" to see the final display</p>
          <p className="instruction__line">or</p>
          <p className="instruction__line">"Back" to make any final changes</p>
        </div>
      </div>
    );
  } else if (currentForm === 1) {
    return <PlayerForm form={currentForm} currentPlayer={currentPlayer} values={values} formProps={formProps} />;
  } else {
    return (
      <>
        {formData[currentForm].map((question) => (
          <div
            key={`form-row-${question.name}`}
            className={`form__row ${players[currentPlayer].mock ? "form__row-faded" : ""}`}
            role="group"
          >
            <label className="item__label item__label-select">{question.label}</label>
            {question.options.map((option) => (
              <label key={`form-radio-${option.text}`} className="form__radio">
                <Field
                  className="item__radio"
                  type="radio"
                  name={`players.${currentPlayer}.${question.name}`}
                  value={option.value}
                  disabled={players[currentPlayer].mock}
                  {...toggleChecked(players[currentPlayer], question.name, option.value)}
                />
                {option.text}
              </label>
            ))}
          </div>
        ))}
      </>
    );
  }
};
