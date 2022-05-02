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

export const PanelHeaderIcons = ({ currentForm }) => {
  if (currentForm < 1 || currentForm > 8) {
    return null;
  }

  const formIcons = [
    <PeopleRounded className={`header__icon ${currentForm === 1 ? "header__icon-active" : ""}`} />,
    <FingerprintOutlined className={`header__icon ${currentForm === 2 ? "header__icon-active" : ""}`} />,
    <PsychologyRounded className={`header__icon ${currentForm === 3 ? "header__icon-active" : ""}`} />,
    <BakeryDiningRounded className={`header__icon ${currentForm === 4 ? "header__icon-active" : ""}`} />,
    <SelfImprovementRounded className={`header__icon ${currentForm === 5 ? "header__icon-active" : ""}`} />,
    <FlareRounded className={`header__icon ${currentForm === 6 ? "header__icon-active" : ""}`} />,
    <ColorLensRounded className={`header__icon ${currentForm === 7 ? "header__icon-active" : ""}`} />,
  ];

  const icons = formIcons.map((icon, i) => (
    <div key={`formIcon_${i}`} className="icon__container">
      {icon}
    </div>
  ));
  return (
    <div className="header__icons" data-testid="component-HeaderIcons">
      {icons}
    </div>
  );
};
