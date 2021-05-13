import React from "react";
// import { reduxForm } from "redux-form";
import {Formik, Form} from 'formik'
import { FormSwitch } from "../FormSwitch";
import { PanelButtonRow } from "../PanelButtonRow";
import "./formDisplay.css";


const FormDisplay = ({
  onSubmit,
  handlePrevious,
  currentForm,
  currentPlayer,
  numPlayers,
}) => {
  const renderPlayerFormOrNext = (
    currentPlayer !== numPlayers || currentForm < 2 ? (
      <Formik
        initialValues={{players: [{name: "", association: ""}]}}
        onSubmit={(values) => onSubmit(values)}
        className={`form ${currentForm > 1 ? "form-bordered" : ""} form-signin mt-2`}
        >
        {
          ({ values, ...props}) => (
            <Form>
              <FormSwitch form={currentForm} currentPlayer={currentPlayer} values={values} formProps={props} />
              <div className="form__row">
                <PanelButtonRow prevText={"Back"} nextText={"Submit"} handlePrevious={handlePrevious} />
              </div>
            </Form>
        )
        }
      </Formik>
    ) : (
      <>
        <div className="body__updateMessage">
          Click "Next Form"
          <br /> to continue
          <br /> or
          <br /> go back
          <br /> to change responses
        </div>
        <PanelButtonRow prevText={"Back"} nextText={"Next Form"} handlePrevious={handlePrevious} />
      </>
    )
  )
  return (
    <>{renderPlayerFormOrNext}</>
  );

};
export default /*reduxForm({
  form: "playerForm",
})*/(FormDisplay);
