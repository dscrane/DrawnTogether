/* IMPORTS */
import React from "react";
import { InfoRounded } from "@mui/icons-material";
/* ------ */

export const InfoButton = ({ toggleModal, style }) => {
  return (
    <button className={`help ${style ? "help-" + style : ""}`} onClick={toggleModal}>
      <InfoRounded className={`help__icon ${style ? "help__icon-" + style : ""} `} />
    </button>
  );
};
