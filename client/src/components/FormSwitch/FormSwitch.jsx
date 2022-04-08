import React from "react";
import { FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix, PlayerForm } from "./components";

const FormSwitch = ({ form, values, formProps, currentPlayer }) => {
  switch (form) {
    case 1:
      return <PlayerForm values={values} formProps={formProps} />;
    case 2:
      return <FormOne values={values} formProps={formProps} currentPlayer={currentPlayer} />;
    case 3:
      return <FormTwo values={values} formProps={formProps} currentPlayer={currentPlayer} />;
    case 4:
      return <FormThree values={values} formProps={formProps} currentPlayer={currentPlayer} />;
    case 5:
      return <FormFour values={values} formProps={formProps} currentPlayer={currentPlayer} />;
    case 6:
      return <FormFive values={values} formProps={formProps} currentPlayer={currentPlayer} />;
    case 7:
      return <FormSix values={values} formProps={formProps} currentPlayer={currentPlayer} />;
    case 8:
      return (
        <>
          <div className="form__row">
            <div className="form__instructions">
              <p className="instruction__line">"Finish" to see the final display</p>
              <p className="instruction__line">or</p>
              <p className="instruction__line">"Back" to make any final changes</p>
            </div>
          </div></>
      )
    default:
      // TODO handle error
      console.log("FormDisplay switch has failed");
  }
};

export default FormSwitch;
