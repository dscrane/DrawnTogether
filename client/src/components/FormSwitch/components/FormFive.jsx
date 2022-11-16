import React from "react";
import { Field } from "formik";

export const FormFive = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Foundation of Faith</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.religion`}
            id="formReligion"
            value="solid"
          />
          Practitioner
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.religion`}
            id="formReligion"
            value="round"
          />
          The Science says...
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.religion`}
            id="formReligion"
            value="dotted"
          />
          God-fearing
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.religion`}
            id="formReligion"
            value="uneven"
          />
          Wiccin
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.religion`}
            id="formReligion"
            value="dashed"
          />
          Undecided
        </label>
      </div>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Cultural Consumption</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.culture`}
            id="formCulture"
            value={"1"}
          />
          People Magazine reader
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.culture`}
            id="formCulture"
            value={"2"}
          />
          Netflix binger
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.culture`}
            id="formCulture"
            value={"3"}
          />
          Museum Crawler
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.culture`}
            id="formCulture"
            value={"4"}
          />
          Cultural Practitioner
        </label>
      </div>
    </>
  );
};
