import React from "react";
import {Formik, Form} from 'formik'
import { FormSwitch } from "../FormSwitch";
import { PanelButtonRow } from "../PanelButtonRow";
import { NextForm } from "./NextForm";
import "./formDisplay.css";
import {FormHeading} from "../FormHeading";

const FormDisplay = ({
  onSubmit,
  initialValues,
  handlePrevious,
  currentForm,
  currentPlayer,
  numPlayers,
  players
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => onSubmit(values, actions)}
      >
        {
          ({values, ...props}) => (
            <>
            <FormHeading currentPlayer={currentPlayer} numPlayers={numPlayers} players={players} />
            <Form className="form form-signin mt-2">
              <div className={`form__group ${currentForm > 1 ? "form__group-center" : ""}`}>
              {
                currentPlayer !== numPlayers || currentForm < 2
                ? <FormSwitch form={currentForm} currentPlayer={currentPlayer} values={values} formProps={props}/>
                : <NextForm />
              }
              </div>
              <div className="form__row form__row-buttons">
                <PanelButtonRow prevText={"Back"} nextText={"Submit"} handlePrevious={handlePrevious}/>
              </div>
            </Form>
            </>
          )
        }
      </Formik>
    </>
  )};
export default FormDisplay;
