import React from "react";
import { Field } from "formik";

export const FormThree = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">You and Your Wallet</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.money`}
            id="formMoney"
            value="DEFAULT"
          />
          Choose...
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.money`}
            id="formMoney"
            value={0}
          />
          Miserly
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.money`}
            id="formMoney"
            value={2}
          />
          Spend-thrift
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.money`}
            id="formMoney"
            value={1}
          />
          What's mine is yours
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.money`}
            id="formMoney"
            value={3}
          />
          Capitalistic
        </label>
      </div>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Food Attitude</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.food`}
            id="formFood"
            value="DEFAULT"
          />
          Choose...
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.food`}
            id="formFood"
            value={135}
          />
          A foodie
        </label>
        <label className="form__radio">
          <Field className="item__radio" type="radio" name={`players.${currentPlayer}.food`} id="formFood" value={45} />
          See it, Eat it
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.food`}
            id="formFood"
            value={270}
          />
          Vanilla
        </label>
        <label className="form__radio">
          <Field className="item__radio" type="radio" name={`players.${currentPlayer}.food`} id="formFood" value={45} />
          Fear Factor
        </label>
      </div>
    </>
  );
};
