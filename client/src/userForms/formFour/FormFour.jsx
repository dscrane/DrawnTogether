import React from "react";
import { Field } from "redux-form";

export const FormFour = () => {
  return (
    <div className="form__group">
      <div className="formItem">
        <label className="form__label">Relationship to Nature</label>
        <Field className="form__control" name="nature" id="formNature" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="hollow">Video Gamer</option>
          <option value="stroke">Happy on the porch</option>
          <option value="ring">Nature Lover</option>
          <option value="dot">Climate activist</option>
        </Field>
      </div>
      <div className="formItem">
        <label className="form__label">Relationship to Social Media</label>
        <Field className="form__control" name="media" id="formMedia" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="thinner">What is social media</option>
          <option value="thicker">Lurker</option>
          <option value="thin">Regular poster</option>
          <option value="thick">Influencer</option>
        </Field>
      </div>
      <div className="formItem">
        <label className="form__label">Relationship to Progress</label>
        <Field className="form__control" name="progress" id="formProgress" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="complimentary">Curmudgeon</option>
          <option value="triadic">C'est Le Vie</option>
          <option value="monochromatic">Reluctant Participant</option>
          <option value="analogous">Activist</option>
        </Field>
      </div>
    </div>
  );
};
