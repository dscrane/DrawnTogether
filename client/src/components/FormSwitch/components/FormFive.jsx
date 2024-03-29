import React from "react";
import { Field } from "formik";

export const FormFive = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row">
        <label className="item__label item__label-select">Foundation of Faith</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.religion`}
          id="formReligion"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value="solid">Practitioner</option>
          <option value="round">The Science says...</option>
          <option value="dotted">God-fearing</option>
          <option value="uneven">Wiccin</option>
          <option value="dashed">Undecided</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Cultural Consumption</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.culture`}
          id="formCulture"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={1}>People Magazine reader</option>
          <option value={2}>Netflix binger</option>
          <option value={3}>Museum Crawler</option>
          <option value={4}>Cultural Practitioner</option>
        </Field>
      </div>
    </>
  );
};
