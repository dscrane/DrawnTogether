import React from "react";
import { Field } from "formik";;

export const FormFive = () => {
  return (
    <>
      <div className="form__row">
        <label className="item__label">Relationship to Religion</label>
        <Field className="form__control form__control-select" name="religion" id="formReligion" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value="solid">Practitioner</option>
          <option value="round">Agnostic</option>
          <option value="dotted">God-fearing</option>
          <option value="uneven">Wiccin</option>
          <option value="dashed">Undecided</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label">Relationship to Culture</label>
        <Field className="form__control form__control-select" name="culture" id="formCulture" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value={1}>People Magazine reader</option>
          <option value={2}>Netflix binger</option>
          <option value={3}>Museum attendee</option>
          <option value={4}>Cultural practitioner</option>
        </Field>
      </div>
    </>
  );
};
