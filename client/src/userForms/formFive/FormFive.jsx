import React from "react";

export const FormFive = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <div className="form__group">
      <label className="form__label">Relationship to Religion</label>
      <select
        className="form__control"
        name="religion"
        onChange={onChange}
        id="formReligion"
        value={responses.religion || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="1">Practitioner</option>
        <option value="2">Agnostic</option>
        <option value="3">God-fearing</option>
        <option value="4">Wiccin</option>
        <option value="5">Undecided</option>
      </select>
      <label className="form__label">Relationship to Culture</label>
      <select
        className="form__control"
        name="culture"
        onChange={onChange}
        id="formCulture"
        value={responses.culture || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="1">People Magazine reader</option>
        <option value="2">Netflix binger</option>
        <option value="3">Museum attendee</option>
        <option value="4">Cultural practitioner</option>
      </select>
    </div>
  );
};
