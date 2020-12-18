import React from "react";
import { connect } from 'react-redux'
import { setInterest } from '../../redux/actions';
import {
  InterestForm,
  PlayerForm,
  OneForm,
  TwoForm,
  ThreeForm,
  FourForm,
  FiveForm,
  SixForm,
  Results,
} from "../../utils/forms";

const DisplayForm = ({ form, setInterest }) => {
  switch (form) {
    case 1:
      return <InterestForm setInterest={setInterest} />;
    case 2:
      return <PlayerForm />;
    case 3:
      return <OneForm />;
    case 4:
      return <TwoForm />;
    case 5:
      return <ThreeForm />;
    case 6:
      return <FourForm />;
    case 7:
      return <FiveForm />;
    case 8:
      return <SixForm />;
    case 9:
      return <Results />;
    default:
      throw new Error("FormArea switch has failed");
  }
};


export default connect(null, { setInterest })(DisplayForm);
