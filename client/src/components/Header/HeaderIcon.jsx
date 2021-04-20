/* IMPORTS */
import React from "react";
import {
  FingerprintOutlined,
  LocalFloristOutlined,
  PaletteOutlined,
  PeopleAltOutlined,
  PublicOutlined,
  ShoppingCartOutlined,
  WatchOutlined,
} from "@material-ui/icons";
/* ------ */

export const HeaderIcon = ({ formName, isActive }) => {
  switch (formName) {
    case "Participants":
      return <PeopleAltOutlined className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Personal":
      return <FingerprintOutlined className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Mental":
      return <WatchOutlined className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Financial":
      return <PublicOutlined className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Natural":
      return <ShoppingCartOutlined className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Cultural":
      return <LocalFloristOutlined className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    case "Visual":
      return <PaletteOutlined className={`header__icon ${isActive ? "header__icon-active" : ""}`} />;
    default:
      console.log("HeaderIcon switch has failed");
  }
};
