import React from "react";
import { createHeaderIcons } from "../../utils";
import "./header.css";

const Header = ({ currentForm }) => {
  const displayHeaderText = currentForm > 0 ? null : <></>;
  const displayHeaderIcons = currentForm > 0 && currentForm < 8 ? createHeaderIcons(currentForm) : null;
  return (
    <div className="header" data-testid="component-Header">
      <h1 className="header__title">
        Drawn <br />
        Together
      </h1>
      <h3 className="header__text">an interactive visual investigation</h3>
      <div className="header__icons">{displayHeaderIcons}</div>
    </div>
  );
};

export default Header;
