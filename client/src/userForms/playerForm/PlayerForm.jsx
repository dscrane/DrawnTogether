import React from "react";
import { Field, FieldArray, FormSection } from "redux-form";

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className="formItem__row">
      <label className="form__label">{label}</label>
      <input className="form__control" {...input} type={type} placeholder={label + "..."} />
    </div>
  );
};

const addPlayerButton = (onClick) => {
  return (
    <button className="formItem__addCTA" type="button" onClick={onClick}>
      Add Player
    </button>
  );
};

const renderPlayers = ({ fields, meta: { error, submitFailed } }) => {
  return (
    <>
      {addPlayerButton(() => fields.push())}
      {submitFailed && error && <span>{error}</span>}
      {fields.map((player, index) => {
        return (
          <div key={index} className="formItem">
            <div className="formItem__row">
              <div className="formItem__name">Player #{index + 1}</div>
              <button
                className="formItem__removeCTA"
                type="button"
                title="Remove Player"
                onClick={() => fields.remove(index)}
              >
                Remove
              </button>
            </div>
            <Field name={`${player}.name`} type="text" component={renderField} label="Name" />
            <Field name={`${player}.association`} type="text" component={renderField} label={"Association"} />
          </div>
        );
      })}
    </>
  );
};

export const PlayerForm = () => {
  return (
    <div className="form__group">
      <div className="formItem formItem__interest">
        <Field
          className="form__control form__control-interest"
          id="commonInterest"
          name="interest"
          component="input"
          type="text"
          placeholder="Common interest..."
        />
      </div>
      <FieldArray name="players" /*fields={["0", "1", "2"]}*/ component={renderPlayers} />
    </div>
  );
};
