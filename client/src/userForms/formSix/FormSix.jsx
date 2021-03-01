import React from "react";

export const FormSix = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <div className="form__group">
      <label className="form__label">Choose a Color</label>
      <select
        className="form__control"
        name="color"
        onChange={onChange}
        id="formColor"
        value={responses.color || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="chartreuse">Chartreuse</option>
        <option value="vermilion">Vermilion</option>
        <option value="cobalt">Cobalt</option>
        <option value="teal">Teal</option>
        <option value="kellyGreen">Kelly Green</option>
        <option value="aubergine">Aubergine</option>
      </select>
    </div>
  );
};
