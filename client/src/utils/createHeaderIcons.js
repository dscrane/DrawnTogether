import {HeaderIcon} from "../components/Header";
import React from "react";

export const createHeaderIcons = (currentForm) => {
  const formNames = ["Participants", "Personal", "Mental", "Financial", "Natural", "Cultural", "Visual"];
  return formNames.map((formName, i) => {
    return i === currentForm - 1 ? (
      <div key={`${formName}-active`} className="icon__container">
        <HeaderIcon formName={formName} isActive={true} />
      </div>
    ) : (
      <div key={`${formName}`} className="icon__container">
        <HeaderIcon formName={formName} isActive={false} />
      </div>
    );
  });
};