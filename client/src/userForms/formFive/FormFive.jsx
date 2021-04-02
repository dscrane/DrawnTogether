import React from "react";

export const FormFive = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <div className="form__group">
      <div className="form__item">
        <label className="form__label">Relationship to Religion</label>
        <select
          className="form__control"
          name="religion"
          onChange={onChange}
          id="formReligion"
          value={responses.religion || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="solid">Practitioner</option>
          <option value="round">Agnostic</option>
          <option value="dotted">God-fearing</option>
          <option value="uneven">Wiccin</option>
          <option value="dashed">Undecided</option>
        </select>
      </div>
      <div className="form__item">
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
    </div>
  );
};
