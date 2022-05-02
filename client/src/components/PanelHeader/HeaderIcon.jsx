/* IMPORTS */
import React from "react";
import {
  FingerprintOutlined,
  ColorLensRounded,
  PsychologyRounded,
  PeopleRounded,
  SelfImprovementRounded,
  BakeryDiningRounded,
  FlareRounded,
} from "@mui/icons-material";
/* ------ */

export const HeaderIcon = ({ formName, isActive }) => {
  switch (formName) {
    case "Participants":
      return <PeopleRounded className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Personal":
      return <FingerprintOutlined className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Mental":
      return <PsychologyRounded className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Financial":
      return <BakeryDiningRounded className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Natural":
      return <SelfImprovementRounded className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Cultural":
      return <FlareRounded className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Visual":
      return <ColorLensRounded className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    default:
      console.log("HeaderIcon switch has failed");
  }
};
