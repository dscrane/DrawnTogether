import React from "react";
import { Field } from "formik";

export const FormOne = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row">
        <label className="item__label item__label-select">Tallness?</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.height`}
          id="formHeight"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={16}>How's the weather up there?</option>
          <option value={32}>Regular</option>
          <option value={48}>Small but mighty</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Most Distracted by?</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.curiosity`}
          id="formInterest"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={27}>Numbers</option>
          <option value={36}>Letters</option>
          <option value={18}>Thoughts</option>
          <option value={9}>Sights</option>
          <option value={0}>Humans</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Best Hair Day?</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.hair`}
          id="formHair"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={2}>Curly</option>
          <option value={1}>Straight</option>
          <option value={0}>Wavy</option>
          {/*<option value={-15}>Patrick Stewart</option>*/}
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Elderliness?</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.age`}
          id="formAge"
          as="select"
        >
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
        <label className="item__label item__label-select">Dietary Predilection?</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.diet`}
          id="formDiet"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value="omnivore">Meat and salad</option>
          <option value="vegetarian">Salad and salad</option>
          <option value="pescatarian">Fish and salad</option>
          <option value="vegan">No dairy, no eggs and salad</option>
        </Field>
      </div>
    </>
  );
};
