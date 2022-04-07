import React from "react";
import { Field, FieldArray } from "formik";
import { validateString, validateNumber } from "../../utils/validators";
import { responseSchema } from "../../utils";
import { ActionButton } from "../../components/ActionButton";

// Create the inputs for each player field
const renderField = ({ index, field, form, label, placeholder, ...props }) => {
  return (
    <>
      <label className="item__label">{label}</label>
      <input {...field} {...props} />
    </>
  );
};

export const PlayerForm = ({ values }) => {
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
            // placeholder="Common interest..."
            validate={validateString}
          />
        </div>
      </div>
      <FieldArray
        name="players"
        render={({ remove, push }) => (
          <>
            {values.players.map((player, index) => (
              <div key={`player_${index}`} className="form__row">
                <div className="form__item">
                  <div className="item__name">Player #{index + 1}</div>
                  {values.players.length < 3 ? null : (
                    <button
                      className="item__removeCTA"
                      type="button"
                      title="Remove Player"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  )}
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
                    label={"Time"}
                    validate={validateNumber}
                  />
                </div>
              </div>
            ))}
            <div className="form__row">
              <div className={`form__item form__item-addCTA ${values.players.length === 5 ? "invisible" : ""}`}>
                <ActionButton onClick={() => push(responseSchema)} text={"Add Player"} buttonType={"add"} />
              </div>
            </div>
          </>
        )}
      />
    </>
  );
};
