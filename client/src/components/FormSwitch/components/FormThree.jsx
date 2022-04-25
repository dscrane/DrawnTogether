import React from "react";
import { Field } from "formik";

export const FormThree = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row">
        <label className="item__label item__label-select">You and Your Wallet</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.money`}
          id="formMoney"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={0}>Miserly</option>
          <option value={2}>Spend-thrift</option>
          <option value={1}>What's mine is yours</option>
          <option value={3}>Capitalistic</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Food Attitude</label>
        <Field
          className="form__control form__control-select"
          name={`players.${currentPlayer}.food`}
          id="formFood"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value={135}>A foodie</option>
          <option value={45}>See it, Eat it</option>
          <option value={270}>Vanilla</option>
          <option value={45}>Fear Factor</option>
        </Field>
      </div>
    </>
  );
};
