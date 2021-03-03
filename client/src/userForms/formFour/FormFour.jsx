import React from "react";

export const FormFour = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <div className="form__group">
      <div className="form__item">
        <label className="form__label">Relationship to Nature</label>
        <select
          className="form__control"
          name="nature"
          onChange={onChange}
          id="formNature"
          value={responses.nature || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="hollow">Video Gamer</option>
          <option value="stroke">Happy on the porch</option>
          <option value="ring">Nature Lover</option>
          <option value="dot">Climate activist</option>
        </select>
      </div>
      <div className="form__item">
        <label className="form__label">Relationship to Social Media</label>
        <select
          className="form__control"
          name="media"
          onChange={onChange}
          id="formMedia"
          value={responses.media || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="thinner">What is social media</option>
          <option value="thicker">Lurker</option>
          <option value="thin">Regular poster</option>
          <option value="thick">Influencer</option>
        </select>
      </div>
      <div className="form__item">
        <label className="form__label">Relationship to Progress</label>
        <select
          className="form__control"
          name="progress"
          onChange={onChange}
          id="formProgress"
          value={responses.progress || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="complimentary">Curmudgeon</option>
          <option value="triadic">C'est Le Vie</option>
          <option value="monochromatic">Reluctant Participant</option>
          <option value="analogous">Activist</option>
        </select>
      </div>
    </div>
  );
};
