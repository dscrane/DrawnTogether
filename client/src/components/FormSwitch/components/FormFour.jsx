import React from "react";
import { Field } from "formik";

const radioStyle = { margin: "5px " };
export const FormFour = ({ currentPlayer }) => {
  return (
    <>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Nature Nature</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.nature`}
            id="formNature"
            value="hollow"
          />
          Might open a window
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.nature`}
            id="formNature"
            value="stroke"
          />
          Happy on the porch
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.nature`}
            id="formNature"
            value="ring"
          />
          National Park-er
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.nature`}
            id="formNature"
            value="dot"
          />
          Tree-hugger
        </label>
      </div>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Social Media Appetite</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.media`}
            id="formNature"
            value="thinner"
          />
          What is social media?
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.media`}
            id="formNature"
            value="thicker"
          />
          Lurker
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.media`}
            id="formNature"
            value="thin"
          />
          Didn't you see my story?
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.media`}
            id="formNature"
            value="thick"
          />
          Influencer
        </label>
      </div>
      <div className="form__row" role="group">
        <label className="item__label item__label-select">Cause for Concern</label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.progress`}
            id="formNature"
            value="complimentary"
          />
          Back in my day...
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.progress`}
            id="formNature"
            value="triadic"
          />
          C'est Le Vie
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.progress`}
            id="formNature"
            value="monochromatic"
          />
          Reluctant Participant
        </label>
        <label className="form__radio">
          <Field
            className="item__radio"
            type="radio"
            name={`players.${currentPlayer}.progress`}
            id="formNature"
            value="analogous"
          />
          When's the next rally?
        </label>
      </div>
    </>
    /*<>
      <div className="form__row">
        <label className="item__label item__label-select">Nature Nature</label>
        <Field className"item__radio
          className="form__control form__control-select"
          name={`players.${currentPlayer}.nature`}
          id="formNature"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value="hollow">Might open a window</option>
          <option value="stroke">Happy on the porch</option>
          <option value="ring">National Park-er</option>
          <option value="dot">Tree-hugger</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Social Media Appetite</label>
        <Field className"item__radio
          className="form__control form__control-select"
          name={`players.${currentPlayer}.media`}
          id="formMedia"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value="thinner">What is social media?</option>
          <option value="thicker">Lurker</option>
          <option value="thin">Didn't you see my story?</option>
          <option value="thick">Influencer</option>
        </Field>
      </div>
      <div className="form__row">
        <label className="item__label item__label-select">Cause for Concern</label>
        <Field className"item__radio
          className="form__control form__control-select"
          name={`players.${currentPlayer}.progress`}
          id="formProgress"
          as="select"
        >
          <option value="DEFAULT">Choose...</option>
          <option value="complimentary">Back in my day...</option>
          <option value="triadic">C'est Le Vie</option>
          <option value="monochromatic">Reluctant Participant</option>
          <option value="analogous">When's the next rally?</option>
        </Field>
      </div>
    </>*/
  );
};
