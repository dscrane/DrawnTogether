import React from "react";
import { Field } from "formik";

export const FormFour = () => {
  return (
    <>
      <div className="form__row">
        <label className="item__label item__label-select">Relationship to Nature</label>
        <Field className="form__control form__control-select" name="nature" id="formNature" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value="hollow">Video Gamer</option>
          <option value="stroke">Happy on the porch</option>
          <option value="ring">Nature Lover</option>
          <option value="dot">Climate activist</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Relationship to Social Media</label>
        <Field className="form__control form__control-select" name="media" id="formMedia" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value="thinner">What is social media</option>
          <option value="thicker">Lurker</option>
          <option value="thin">Regular poster</option>
          <option value="thick">Influencer</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Relationship to Progress</label>
        <Field className="form__control form__control-select" name="progress" id="formProgress" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value="complimentary">Curmudgeon</option>
          <option value="triadic">C'est Le Vie</option>
          <option value="monochromatic">Reluctant Participant</option>
          <option value="analogous">Activist</option>
        </Field>
      </div>
    </>
  );
};
