import React from "react";
import {Field, FieldArray, Formik, Form } from "formik";
import {  validateString, validateNumber } from "../../utils/validators";

// Create the inputs for each player field
const renderField = ({ index, field, form, label, placeholder, ...props }) => {
  return (
    <>
        <label className="item__label">{label}</label>
        <input
          {...field}
          {...props}
          placeholder={placeholder || label + "..."}
        />
    </>
  );
};

export const PlayerForm = ({ values, ...formProps }) => {
  return (
<>
      <div className="form__row">
        <div className="form__item form__item-interest">
          <label className="item__label item__label-interest">Common Interest</label>
          <Field
            className={`form__control form__control-input ${1 === 2 ? "form__control-invalid" : ""}`}
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
                    <button className="item__removeCTA" type="button" title="Remove Player"
                            onClick={() => arrayHelpers.remove(index)}>
                      Remove
                    </button>
                  </div>
                  <div className="form__item">
                    <Field
                      className={`form__control form__control-input ${1 === 2 ? "form__control-invalid" : ""}`}
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
                      className={`form__control form__control-input ${1 === 2 ? "form__control-invalid" : ""}`}
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
            <div className={`form__row ${values.players.length === 5 ? 'invisible' : ''}`}>
              <div className="form__item form__item-addCTA">
                <button className="p-button p-button__add" type="button" onClick={() => arrayHelpers.push({name: '', association: ''})}>
                  Add Player
                </button>
              </div>
            </div>
          </>
        )}
      />
    </>
)
};