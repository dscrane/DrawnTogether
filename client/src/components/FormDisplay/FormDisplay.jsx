import React, { useRef } from "react";
import { Formik, Form } from "formik";
import { PanelButtonRow } from "../PanelButtonRow";
import { FormHeading } from "../FormHeading";
import { InstructionText } from "../../lib/InstructionText";
import { FormBuilder } from "../FormBuilder";
import "./formDisplay.css";

const FormDisplay = ({ onSubmit, initialValues, handlePrevious, currentForm, currentPlayer, numPlayers, players }) => {
  const buttonRowRef = useRef(null);
  const showNextOption = currentPlayer !== numPlayers || currentForm < 2;

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
              <div className="form__scroll">
                <Form className={`form ${currentForm > 1 ? "form__stretch" : ""}`}>
                  {/*<InstructionText currentForm={currentForm} />*/}
                  <div className={`form__group ${currentForm > 1 ? "form__group-center" : ""}`}>
                    <FormBuilder
                      values={values}
                      players={players}
                      currentPlayer={currentPlayer}
                      formProps={props}
                      currentForm={currentForm}
                    />
                  </div>
                  <div ref={buttonRowRef} className="form__row form__row-buttons">
                    <PanelButtonRow
                      prevText={"Back"}
                      nextText={showNextOption ? (currentForm === 8 ? "Finish" : "Submit") : "Next Form"}
                      handlePrevious={handlePrevious}
                    />
                  </div>
                </Form>
              </div>
            </>
          );
        }}
      </Formik>
    </>
  );
};
export default FormDisplay;
