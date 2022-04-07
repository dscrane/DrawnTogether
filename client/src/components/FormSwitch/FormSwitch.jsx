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
    default:
      // TODO handle error
      console.log("FormDisplay switch has failed");
  }
};

export default FormSwitch;
