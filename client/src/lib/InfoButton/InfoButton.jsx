/* IMPORTS */
import React from "react";
import { InfoRounded } from "@mui/icons-material";
/* ------ */

export const InfoButton = ({ toggleModal, styleType }) => {
  return (
    <button className={`help ${styleType ? "help-" + styleType : ""}`} onClick={toggleModal}>
      <InfoRounded className={`help__icon ${styleType ? "help__icon-" + styleType : ""} `} />
    </button>
  );
};
