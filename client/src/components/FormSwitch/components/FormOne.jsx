import React from "react";
import { Field } from "formik";

export const FormOne = ({ currentPlayer, values }) => {
  return (
    <>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Tallness</label>
        <label className="form__radio">
          <Field className="item__radio" type="radio" name={`players.${currentPlayer}.height`} value={"16"} />
          How's the weather up there?
        </label>
        <label className="form__radio">
          <Field className="item__radio" type="radio" name={`players.${currentPlayer}.height`} value={"32"} />
          Regular
        </label>
        <label className="form__radio">
          <Field className="item__radio" type="radio" name={`players.${currentPlayer}.height`} value={"48"} />
          Small but mighty
        </label>
      </div>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Most Distracted by</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.curiosity`}
            id="formCuriosity"
            value={"27"}
          />
          Numbers
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.curiosity`}
            id="formCuriosity"
            value={"36"}
          />
          Letters
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.curiosity`}
            id="formCuriosity"
            value={"18"}
          />
          Thoughts
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.curiosity`}
            id="formCuriosity"
            value={"9"}
          />
          Sights
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.curiosity`}
            id="formCuriosity"
            value={"0"}
          />
          Humans
        </label>
      </div>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Best Hair Day</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.hair`}
            id="formHair"
            value={"2"}
          />
          Curly
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.hair`}
            id="formHair"
            value={"1"}
          />
          Straight
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.hair`}
            id="formHair"
            value={"0"}
          />
          Wavy
        </label>
      </div>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Dietary Predilection</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.diet`}
            id="formDiet"
            value="omnivore"
          />
          Meat and salad
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.diet`}
            id="formDiet"
            value="vegetarian"
          />
          Salad and salad
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.diet`}
            id="formDiet"
            value="pescatarian"
          />
          Fish and salad
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.diet`}
            id="formDiet"
            value="vegan"
          />
          No dairy, no eggs but salad
        </label>
      </div>
    </>
  );
};
