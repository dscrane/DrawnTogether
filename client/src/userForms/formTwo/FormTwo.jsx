import React from "react";

export const FormTwo = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <div className="form__group">
      <div className="form__item">
        <label className="form__label">Time</label>
        <select
          className="form__control"
          name="time"
          onChange={onChange}
          id="formTemporal"
          value={responses.time || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="18">Morning</option>
          <option value="45">Evening</option>
        </select>
      </div>
      <div className="form__item">
        <label className="form__label">Personality</label>
        <select
          className="form__control"
          name="personality"
          onChange={onChange}
          id="formPersonality"
          value={responses.personality || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="60">Introvert</option>
          <option value="31">Extrovert</option>
        </select>
      </div>
      <div className="form__item">
        <label className="form__label">Hair</label>
        <select
          className="form__control"
          name="hair"
          onChange={onChange}
          id="formHair"
          value={responses.hair || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="10">Curly</option>
          <option value="18">Straight</option>
          <option value="25">Wavy</option>
        </select>
      </div>
    </div>
  );
};
