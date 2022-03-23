import React from "react";
import { Formik, Form } from "formik";
import { FormSwitch } from "../FormSwitch";
import { PanelButtonRow } from "../PanelButtonRow";
import { NextForm } from "./NextForm";
import { FormHeading } from "../FormHeading";
import { formInstructions } from "../../lib/instructions";
import "./formDisplay.css";

const FormDisplay = ({ onSubmit, initialValues, handlePrevious, currentForm, currentPlayer, numPlayers, players }) => {
  const showNextOption = currentPlayer !== numPlayers || currentForm < 2;
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={(values, actions) => onSubmit(values, actions)}>
        {({ values, ...props }) => (
          <>
            <FormHeading currentPlayer={currentPlayer} numPlayers={numPlayers} players={players} />
            <Form className={`form ${currentForm === 1 ? "form__full-border" : ""}`}>
              <div className="form__row form__row-instructions">
                <p className="instructions">
                  {formInstructions[currentForm].split("\n").map((line) => (
                    <p>{line}</p>
                  ))}
                </p>
              </div>
              <div className={`form__group ${currentForm > 1 ? "form__group-center" : ""}`}>
                {showNextOption ? (
                  <FormSwitch form={currentForm} currentPlayer={currentPlayer} values={values} formProps={props} />
                ) : (
                  <NextForm />
                )}
              </div>
              <div className="form__row form__row-buttons">
                <PanelButtonRow
                  prevText={"Back"}
                  nextText={showNextOption ? "Submit" : "Next Form"}
                  handlePrevious={handlePrevious}
                />
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};
export default FormDisplay;
