import React, { useEffect, useState } from "react";
import { Field, FormSection } from "redux-form";

// Create the inputs for each player field
const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className="formItem__row">
      <label className="form__label">{label}</label>
      <input className="form__control" {...input} type={type} placeholder={label + "..."} />
    </div>
  );
};

// Create the player form fields
const createPlayerFormField = (index, removeField, isInitial) => {
  if (isInitial) {
    return (
      <div key={index} className="formItem formItem__player">
        <div className="formItem__row">
          <div className="formItem__name">Player #{index + 1}</div>
        </div>
        <Field name={"name"} type="text" component={renderField} label="Name" />
        <Field name={"association"} type="text" component={renderField} label={"Association"} />
      </div>
    );
  } else {
    return (
      <div key={index} className="formItem formItem__player">
        <div className="formItem__row">
          <div className="formItem__name">Player #{index + 1}</div>
          <button
            className="formItem__removeCTA"
            type="button"
            title="Remove Player"
            onClick={() => removeField(index)}
          >
            Remove
          </button>
        </div>
        <Field name={"name"} type="text" component={renderField} label="Name" />
        <Field name={"association"} type="text" component={renderField} label={"Association"} />
      </div>
    );
  }
};

export const PlayerForm = () => {
  const [formFields, setFormFields] = useState(null);
  const [additionalPlayerIndex, setAdditionalPlayerIndex] = useState(3);
  // Display initial player sections
  useEffect(() => {
    let responseAreas = [];
    for (let i = 0; i < 3; i++) {
      responseAreas.push(
        <FormSection key={i} name={`${i}`}>
          {createPlayerFormField(i, null, true)}
        </FormSection>
      );
    }
    setFormFields(responseAreas);
  }, []);

  // Remove the current player field from display
  const removeField = (index) => {
    const newFormFieldArray = formFields.slice(index, 1);
    setFormFields(newFormFieldArray);
  };

  // Add an additional player field to display
  const addField = () => {
    const newField = (
      <FormSection name={`${additionalPlayerIndex}`}>
        {createPlayerFormField(additionalPlayerIndex, removeField, false)}
      </FormSection>
    );
    const newFormFieldArray = [...formFields, newField];
    setFormFields(newFormFieldArray);
    setAdditionalPlayerIndex(additionalPlayerIndex + 1);
  };

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
      {formFields}
      <button className="formItem__addCTA" type="button" onClick={() => addField()}>
        Add Player
      </button>
    </div>
  );
};
