import React from "react";
import { Field, FieldArray } from "redux-form";

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => {
  return (
    <div className="form__group">
      <label className="form__label">{label}</label>
      <input className="form__control" {...input} type={type} placeholder={label + "..."} />
    </div>
  );
};

const addPlayerButton = (onClick) => {
  return (
    <button type="button" onClick={onClick}>
      Add Player
    </button>
  );
};

const renderPlayers = ({ fields, meta: { error, submitFailed } }) => {
  return (
    <div>
      {addPlayerButton(() => fields.push())}
      {submitFailed && error && <span>{error}</span>}
      {fields.map((player, index) => {
        return (
          <div key={index}>
            <button type="button" title="Remove Player" onClick={() => fields.remove(index)} />
            <h4>Player #{index + 1}</h4>
            <Field name={`${player}.name`} type="text" component={renderField} label="Name" />
            <Field name={`${player}.association`} type="text" component={renderField} label={"Association"} />
          </div>
        );
      })}
    </div>
  );
};

export const PlayerForm = () => {
  return <FieldArray name="players" component={renderPlayers} />;
};
