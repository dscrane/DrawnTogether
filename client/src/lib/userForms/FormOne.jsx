import React from "react";
import { Field } from "formik";

export const FormOne = () => {
  return (
    <>
      <div className="form__row">
        <label className="item__label item__label-select">Height</label>
        <Field className="form__control form__control-select" name="height" id="formHeight" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value={16}>Tall</option>
          <option value={32}>Average</option>
          <option value={48}>Short</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Interest</label>
        <Field className="form__control form__control-select" name="interest" id="formInterest" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value={27}>Numbers</option>
          <option value={36}>Words</option>
          <option value={18}>Ideas</option>
          <option value={9}>Images</option>
          <option value={0}>People</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Gender</label>
        <Field className="form__control form__control-select" name="gender" id="formGender" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value={2}>Male</option>
          <option value={1}>Female</option>
          <option value={0}>Non Binary</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Age</label>
        <Field className="form__control form__control-select" name="age" id="formAge" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value={400}>0-10</option>
          <option value={40}>11-20</option>
          <option value={360}>21-30</option>
          <option value={80}>31-40</option>
          <option value={320}>41-50</option>
          <option value={120}>51-60</option>
          <option value={280}>61-70</option>
          <option value={160}>71-80</option>
          <option value={240}>81-90</option>
          <option value={200}>91-100</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Diet</label>
        <Field className="form__control form__control-select" name="diet" id="formDiet" as="select">
          <option value="DEFAULT">Choose...</option>
          <option value="omnivore">Omnivore</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="vegan">Vegan</option>
        </Field>
      </div>
    </>
  );
};
