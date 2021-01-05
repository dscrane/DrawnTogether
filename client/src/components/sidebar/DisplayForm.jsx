import React from "react";
import { connect } from "react-redux";
import { setInterest } from "../../redux/actions";
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

const DisplayForm = ({ form, setInterest, responses, setResponses }) => {
  switch (form) {
    case 1:
      return <InterestForm setInterest={setInterest} />;
    case 2:
      return <PlayerForm responses={responses} setResponses={setResponses} />;
    case 3:
      return <OneForm responses={responses} setResponses={setResponses} />;
    case 4:
      return <TwoForm responses={responses} setResponses={setResponses} />;
    case 5:
      return <ThreeForm responses={responses} setResponses={setResponses} />;
    case 6:
      return <FourForm responses={responses} setResponses={setResponses} />;
    case 7:
      return <FiveForm responses={responses} setResponses={setResponses} />;
    case 8:
      return <SixForm responses={responses} setResponses={setResponses} />;
    case 9:
      return <Results />;
    default:
      console.log("FormArea switch has failed");
  }
};

export default connect(null, { setInterest })(DisplayForm);
