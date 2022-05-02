/* IMPORTS */
import React from "react";
import { HelpOutlineRounded } from "@mui/icons-material";
/* ------ */

export const InfoButton = ({ toggleModal }) => {
  return (
    <button className="help" onClick={toggleModal}>
      <HelpOutlineRounded className="help__icon" />
    </button>
  );
};
