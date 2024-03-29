import React from "react";
import { ErrorMessage, Field, FieldArray } from "formik";
import { validateString, validateInterest, validateAssociation } from "../../../utils/validators";
import { responseSchema } from "../../../utils";
import { ActionButton } from "../../ActionButton";
import { Tooltip } from "../../../lib/Tooltip/Tooltip";
import { HelpTwoTone, ErrorOutlineRounded, CloseRounded } from "@mui/icons-material";

// Create the inputs for each player field
const renderField = ({ index, field, form, label, placeholder, ...props }) => {
  return (
    <>
      {label !== "Time" ? (
        <label className="item__label">{label}</label>
      ) : (
        <div className="tooltip__wrapper">
          <label className="item__label item__label-tooltip">{label}</label>
          <Tooltip content="In hours, months, or years">
            <HelpTwoTone className="tooltip__icon" />
          </Tooltip>
        </div>
      )}
      <div className="item__control">
        <input {...field} {...props} />
        <ErrorMessage className="control__error" name={field.name} component={ErrorOutlineRounded} />
      </div>
    </>
  );
};

export const PlayerForm = ({ values, formProps }) => {
  return (
    <>
      <div className="form__row">
        <div className="form__item form__item-interest">
          <label className="item__label item__label-interest">Common Interest</label>
          <Field
            className={`form__control form__control-input `}
            id="commonInterest"
            name="interest"
            component="input"
            type="text"
            validate={validateInterest}
            autoComplete="off"
          />
          <ErrorMessage name="interest">{(msg) => <span className="control__error">{msg}</span>}</ErrorMessage>
        </div>
      </div>
      <FieldArray
        name="players"
        render={({ remove, push }) => (
          <>
            {values.players.map((player, index) => (
              <div key={`player_${index}`} className="form__row">
                <div className="form__item">
                  <div className="item__name">Player {index + 1}</div>
                  {values.players.length < 3 ? null : (
                    <button
                      className="item__removeCTA"
                      type="button"
                      title="Remove Player"
                      onClick={() => remove(index)}
                    >
                      <CloseRounded className="removeCTA__icon" />
                    </button>
                  )}
                </div>
                <div className="form__item">
                  <Field
                    className={`form__control form__control-input `}
                    name={`players.${index}.name`}
                    type="text"
                    component={renderField}
                    label="Name"
                    validate={validateString}
                    index={index}
                    autoComplete="off"
                  />
                </div>
                <div className="form__item">
                  <Field
                    className={`form__control form__control-input `}
                    name={`players.${index}.association`}
                    type="text"
                    component={renderField}
                    onChange={(e) => {
                      e.preventDefault();
                      formProps.setFieldValue(`players.${index}.association`, e.target.value.match(/(\d+)/)[0]);
                    }}
                    label={"Time"}
                    validate={validateAssociation}
                    autocomplete="off"
                  />
                </div>
              </div>
            ))}
            <div className="form__row">
              <div className={`form__item form__item-addCTA ${values.players.length === 5 ? "invisible" : ""}`}>
                <ActionButton onClick={() => push(responseSchema)} text={"Add Player"} buttonType={"add"} />
              </div>
            </div>
          </>
        )}
      />
    </>
  );
};
