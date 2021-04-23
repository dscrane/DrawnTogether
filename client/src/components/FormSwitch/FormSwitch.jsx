import React from "react";
import { FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix, PlayerForm } from "../../lib/userForms";
import { FormSection } from "redux-form";

const FormSwitch = ({ form, currentPlayer }) => {
  switch (form) {
    case 1:
      return <PlayerForm />;
    case 2:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormOne />
        </FormSection>
      );
    case 3:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormTwo />
        </FormSection>
      );
    case 4:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormThree />
        </FormSection>
      );
    case 5:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormFour />
        </FormSection>
      );
    case 6:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormFive />
        </FormSection>
      );
    case 7:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormSix />
        </FormSection>
      );
    case 8:
      return <>hi</>;
    default:
      console.log("FormDisplay switch has failed");
  }
};

export default FormSwitch;
