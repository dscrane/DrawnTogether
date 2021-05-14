import React from "react";
import {Formik, Form} from 'formik'
import { FormSwitch } from "../FormSwitch";
import { PanelButtonRow } from "../PanelButtonRow";
import { NextForm } from "./NextForm";
import "./formDisplay.css";

const FormDisplay = ({
  onSubmit,
  initialValues,
  handlePrevious,
  currentForm,
  currentPlayer,
  numPlayers,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => onSubmit(values, actions)}
      className={`form ${currentForm > 1 ? "form-bordered" : ""} form-signin mt-2`}
    >
      {
        ({values, ...props}) => (
          <Form>
            {
              currentPlayer !== numPlayers || currentForm < 2
              ? <FormSwitch form={currentForm} currentPlayer={currentPlayer} values={values} formProps={props}/>
              : <NextForm />
            }
            <div className="form__row">
              <PanelButtonRow prevText={"Back"} nextText={"Submit"} handlePrevious={handlePrevious}/>
            </div>
          </Form>
        )
      }
    </Formik>
  )};
export default FormDisplay;
