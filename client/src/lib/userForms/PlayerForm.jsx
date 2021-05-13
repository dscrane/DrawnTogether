import React, { useEffect, useState } from "react";
// import { Field, FormSection } from "redux-form";
import {Field, FieldArray, Form, Formik} from "formik"
import {  validateString, validateNumber } from "../../utils/validators";
import {FormSwitch} from "../../components/FormSwitch";
import {PanelButtonRow} from "../../components/PanelButtonRow";

// Create the inputs for each player field
const renderField = ({ index, field, form, label, placeholder, ...props }) => {
  return (
    <>
      <div className="form__item">
        <label className="item__label">{label}</label>
        <input
          {...field}
          {...props}
          placeholder={placeholder || label + "..."}
        />
      </div>
    </>
  );
};

// Create the player form fields
// const createPlayerFormField = (player, index, removeField, ...props) => {
//   return (
//
//   );
// };

export const PlayerForm = ({ values }) => {
  return (
    <>
      <div className="form__row">
        <div className="form__item form__item-interest">
          <label className="item__label item__label-interest">Common Interest</label>
          <Field
            className={`form__control form__control-input ${1===2 ? "form__control-invalid" : ""}`}
            id="commonInterest"
            name="interest"
            component="input"
            type="text"
            placeholder="Common interest..."
            validate={validateString}
          />
        </div>
      </div>
      <FieldArray
        name="players"
        render={arrayHelpers => (
          <>
            {
              values.players.map((player, index) => (
                <div key={`player_${index}`} className="form__row">
                  <div className="form__item">
                    <div className="item__name">Player #{index + 1}</div>
                    <button className="item__removeCTA" type="button" title="Remove Player" onClick={() => arrayHelpers.remove(index)}>
                      Remove
                    </button>
                  </div>
                  <div className="form__item">
                    <Field
                      className={`form__control form__control-input ${1===2 ? "form__control-invalid" : ""}`}
                      name={`players.${index}.name`}
                      type="text"
                      component={renderField}
                      label="Name"
                      validate={validateString}
                      index={index}
                    />
                  </div>
                  <div className="form__item">
                    <Field
                      className={`form__control form__control-input ${1===2 ? "form__control-invalid" : ""}`}
                      name={`players.${index}.association`}
                      type="text"
                      component={renderField}
                      label={"Association"}
                      validate={validateNumber}
                    />
                  </div>
                </div>

              ))
            }
            <div className="form__row">
              <div className="form__item form__item-addCTA">
                <button className="item__addCTA" type="button" onClick={() => arrayHelpers.push({name: '', association: ''})}>
                  Add Player
                </button>
              </div>
            </div>
          </>
        )}
      />
    </>
)};
