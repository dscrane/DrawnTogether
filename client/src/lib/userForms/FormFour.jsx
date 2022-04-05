import React from "react";
import { Field } from "formik";

export const FormFour = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row">
        <label className="item__label item__label-select">Relationship to Nature</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.nature`}
          id="formNature"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value="hollow">What is the sun?</option>
          <option value="stroke">Happy on the porch</option>
          <option value="ring">National Park-er</option>
          <option value="dot">Tree-hugger</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Relationship to Social Media</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.media`}
          id="formMedia"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value="thinner">What is social media?</option>
          <option value="thicker">Lurker</option>
          <option value="thin">You didn't see my post?</option>
          <option value="thick">Influencer</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Relationship to Progress</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.progress`}
          id="formProgress"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value="complimentary">Curmudgeon</option>
          <option value="triadic">C'est Le Vie</option>
          <option value="monochromatic">Reluctant Participant</option>
          <option value="analogous">When is the next rally?</option>
        </Field>
      </div>
    </>
  );
};
