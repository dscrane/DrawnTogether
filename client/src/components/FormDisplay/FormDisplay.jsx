import React, { useRef } from "react";
import { Formik, Form } from "formik";
import { FormSwitch } from "../FormSwitch";
import { PanelButtonRow } from "../PanelButtonRow";
import { NextForm } from "./components/";
import { FormHeading } from "../FormHeading";
import { formInstructions } from "../../lib/instructions";
import "./formDisplay.css";

const FormDisplay = ({ onSubmit, initialValues, handlePrevious, currentForm, currentPlayer, numPlayers, players }) => {
  const buttonRowRef = useRef(null);
  const showNextOption = currentPlayer !== numPlayers || currentForm < 2;
  const showInstructions = showNextOption ? (
    <div className="form__row form__row-instructions">
      <div className="form__instructions">
        {formInstructions[currentForm].split("\n").map((line, i) => (
          <p className="instruction__line" key={`instruction-line-${i}`}>
            {line}
          </p>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={(values, actions) => onSubmit(values, actions)}>
        {({ values, ...props }) => {
          return (
            <>
              {buttonRowRef.current !== null ? buttonRowRef.current.scrollIntoView({ behavior: "smooth" }) : null}
              {currentForm === 1 ? null : (
                <FormHeading currentPlayer={currentPlayer} numPlayers={numPlayers} players={players} />
              )}
              <Form className={`form ${currentForm > 1 ? "form__stretch" : ""}`}>
                {showInstructions}
                <div className={`form__group ${currentForm > 1 ? "form__group-center" : ""}`}>
                  {showNextOption ? (
                    <FormSwitch form={currentForm} currentPlayer={currentPlayer} values={values} formProps={props} />
                  ) : (
                    <NextForm />
                  )}
                </div>
                <div ref={buttonRowRef} className="form__row form__row-buttons">
                  <PanelButtonRow
                    prevText={"Back"}
                    nextText={showNextOption ? (currentForm === 8 ? "Finish" : "Submit") : "Next Form"}
                    handlePrevious={handlePrevious}
                  />
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};
export default FormDisplay;
