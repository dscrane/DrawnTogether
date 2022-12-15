/* IMPORTS */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Landing } from "../Landing";
import { FormContainer } from "../FormContainer";
import { FinalPanel } from "../FinalPanel";
import { InfoButton } from "../../lib/InfoButton";
/* ------ */

const PanelContent = () => {
  const dispatch = useDispatch();

  const { _id, currentForm, screenshot } = useSelector((state) => state.session);

  const defineView = () => {
    if (currentForm === 0) {
      return <Landing toggleModal={() => dispatch({ type: "session/toggleInfoModal" })} />;
    } else {
      return (
        <>
          <InfoButton toggleModal={() => dispatch({ type: "session/toggleInfoModal" })} styleType={"panel"} />
          {currentForm > 8 ? (
            <FinalPanel _id={_id} screenshot={screenshot} currentForm={currentForm} />
          ) : (
            <FormContainer />
          )}
        </>
      );
    }
  };
  return <>{defineView()}</>;
};

export default PanelContent;
